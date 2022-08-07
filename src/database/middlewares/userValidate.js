const { User } = require('../models');

const userValidate = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.email !== email || user.password !== password) return false;

  return true;
};

module.exports = userValidate;
