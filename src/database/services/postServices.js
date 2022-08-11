const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);

const formata = (object) => ({
  id: object.id,
  title: object.title,
  content: object.content,
  userId: object.userId,
  updated: object.updatedAt,
  published: object.createdAt,
});

const {
  User,
  BlogPost,
  Category,
  PostCategory,
} = require('../models');

const postValidate = require('../middlewares/postValidate');

const getById = async (id) => {
  const result = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' }],
  });

  if (!result) return { code: 404, message: 'Post does not exist' };

  return result;
};

const createPost = async (title, content, categoryIds, data) => {
  const t = await sequelize.transaction();

  const requestContent = postValidate.requestContent(title, content, categoryIds);
  if (!requestContent) return { code: 400, message: 'Some required fields are missing' };

  const requestCategoryId = await postValidate.requestCategoryId(categoryIds);
  if (!requestCategoryId) return { code: 400, message: '"categoryIds" not found' };

  try {
    const { id } = await User.findOne({ where: { email: data } }, { transaction: t });

    const newPost = await BlogPost.create({ title, content, userId: id }, { transaction: t });

    await Promise.all(categoryIds.map((item) => PostCategory
    .create({ postId: newPost.id, categoryId: item }, { transaction: t })));

    await t.commit();
    const result = formata(newPost);
    return result;
  } catch (error) {
    await t.rollback();
  }
};

const getAll = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return result;
};

const updatePost = async (title, content, id, email) => {
  if (!title || !content) return { code: 400, message: 'Some required fields are missing' };

  const user = await User.findOne({ where: { email } });

  const post = await BlogPost.findAll({
    where: { [Op.and]: [{ id }, { userId: user.id }] } });

  if (post.length < 1) return { code: 401, message: 'Unauthorized user' };
  // console.log('====================================');
  // console.log('post', post);

  await BlogPost.update({ title, content }, { where: { id } });

  const result = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', attributes: ['id', 'name'] },
    ],
  });
  console.log('result', result);
  return result;
};

module.exports = {
  createPost,
  getAll,
  getById,
  updatePost,
};
