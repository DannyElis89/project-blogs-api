const validateBodyRequest = require('../middlewares/validateBodyRequest');
const userValidate = require('../middlewares/userValidate');
const createToken = require('./createToken');
const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const validaBody = await validateBodyRequest({ displayName, email, password });

  if (validaBody.code || validaBody.message) {
    return validaBody;
  }

  const user = await userValidate(email, password);

  if (user !== true) {
    const token = createToken(user);
    await User.create({ displayName, email, password, image });

    return token;
  }
};

const getUsers = async () => {
  const result = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return result;
};

const getUserById = async (id) => {
  const result = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  if (!result) return { code: 404, message: 'User does not exist' };

  return result;
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
