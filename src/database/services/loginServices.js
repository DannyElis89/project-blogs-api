const loginValidate = require('../middlewares/loginValidate');
const userValidate = require('../middlewares/userValidate');

const loginServices = async (email, password) => {
  const validateLogin = await loginValidate(email, password);
  const validateUser = await userValidate(email, password);

  if (!validateLogin) {
    return {
      code: 400,
      message: 'Some required fields are missing',
    };
  }

  if (!validateUser) {
    return {
      code: 400,
      message: 'Invalid fields',
    };
}
  return true;
};

module.exports = loginServices;
