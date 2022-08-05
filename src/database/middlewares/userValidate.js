const { User } = require('../models');

const userValidate = async (email, password) => {
  // console.log('======= USER VALIDATE =======');
  // console.log('email', email);
  // console.log('password', password);
  const user = await User.findOne({ where: { email } });
  // console.log('user', user);

  if (!user || user.email !== email || user.password !== password) return false;

  return true;
};

module.exports = userValidate;
