const {
  User,
  BlogPost,
  Category,
  // PostCategory,
} = require('../models');

const postValidate = require('../middlewares/postValidate');

const getById = async (id) => {
  const result = await BlogPost.findOne({ where: id });
  // console.log('==================================================');
  // console.log('result do getById', result);
  return result;
};

const createPost = async (title, content, categoryIds, data) => {
  const emailId = await postValidate.emailId(data);
  console.log('===== POST SERVICE ======');
  // console.log(emailId.id);

  const requestContent = postValidate.requestContent(title, content, categoryIds);
  const requestCategoryId = await postValidate.requestCategoryId(categoryIds);
  // console.log('requestCategoryId', requestCategoryId);

  if (requestContent === false) {
    return { code: 400, message: 'Some required fields are missing' };
  }

  if (requestCategoryId === false) {
    return { code: 400, message: '"categoryIds" not found' };
  }

  const post = await BlogPost.create({ title, content, userId: emailId.id });
  const { id } = post.dataValues;
  const result = await getById(id);

  // console.log('result.dataValues', result.dataValues);
  return result.dataValues;

  // return result;
};

const getAll = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return result;
};

module.exports = {
  createPost,
  getAll,
  getById,
};
