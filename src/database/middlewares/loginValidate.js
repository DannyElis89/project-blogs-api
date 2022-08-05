const loginValidate = async (email, password) => {
  if (email || password) return true;
   return false;
};

module.exports = loginValidate;
