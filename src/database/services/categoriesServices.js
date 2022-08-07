const { Category } = require('../models');

const createCategory = async (name) => {
  if (!name) return { code: 400, message: '"name" is required' };
  const result = await Category.create({ name });
  // console.log(result);
  return result;
};

module.exports = {
  createCategory,
};
