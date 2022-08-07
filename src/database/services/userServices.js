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

module.exports = {
  createUser,
};
