const userValidate = require('./userValidate');

const validaDisplayName = (displayName) => {
  console.log('displayName', displayName);
  if (displayName.length < 8) return false;
  return true;
};

const validaEmail = (email) => {
  console.log('email', email);
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regex.test(email);
};

const validaPassword = (password) => {
  console.log('password', password);
  if (password.length < 6) return false;
  return true;
};

const validateBodyRequest = async ({ displayName, email, password }) => {
  const nomeValida = validaDisplayName(displayName);
  const emailValida = validaEmail(email);
  const passwordValida = validaPassword(password);
  const usuarioValido = await userValidate(email, password);

  if (!nomeValida) {
    return { code: 400, message: '"displayName" length must be at least 8 characters long' };
  }

  if (!emailValida) {
    return { code: 400, message: '"email" must be a valid email' };
  }

  if (!passwordValida) {
    return { code: 400, message: '"password" length must be at least 6 characters long' };
  }

  if (usuarioValido) {
    return { code: 409, message: 'User already registered' };
  }

  return true;
};

module.exports = validateBodyRequest;
