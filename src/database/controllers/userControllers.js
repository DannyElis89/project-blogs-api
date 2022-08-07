const userServices = require('../services/userServices');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
    const result = await userServices.createUser({ displayName, email, password, image });

    if (result.code || result.message) {
      const { code, message } = result;
      return res.status(code).json({ message });
    }

    return res.status(201).json({ token: result });
};

const getUsers = async (req, res) => {
  const result = await userServices.getUsers();
  return res.status(200).json(result);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const result = await userServices.getUserById(id);

  if (result.code) {
    const { code, message } = result;
    return res.status(code).json({ message });
  }

  return res.status(200).json(result);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
