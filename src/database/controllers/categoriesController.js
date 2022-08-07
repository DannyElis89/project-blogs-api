const categoryServices = require('../services/categoriesServices');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const result = await categoryServices.createCategory(name);

  if (result.code || result.message) {
    const { code, message } = result;

    // console.log('================================');
    // console.log('code', code, 'message', message);

    return res.status(code).json({ message });
  }

  return res.status(201).json(result);
};

module.exports = {
  createCategory,
};
