const {
  // User,
  // BlogPost,
  Category,
  // PostCategory,
} = require('../models');

const requestContent = (title, content, categoryIds) => {
  if (!title || !content || !categoryIds) return false;
  return true;
};

const requestCategoryId = async (categoryIds) => {
  const allCategories = await Category.findAll();
  const todasCategorias = Object.values(allCategories);

  const arrayResult = [];
  todasCategorias.forEach((category) => arrayResult.push(category.dataValues.id));

  const booleanArray = [];
  categoryIds.forEach((id) => booleanArray.push(arrayResult.includes(id)));

  if (booleanArray.includes(false)) return false;
  return true;
};

module.exports = {
  requestContent,
  requestCategoryId,
};
