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

const getAll = async (req, res) => {
   const result = await categoryServices.getAll();

   if (result.code || result.message) {
    const { code, message } = result;
    return res.status(code).json({ message });
  }

  return res.status(200).json(result);
};

module.exports = {
  createCategory,
  getAll,
};
