const loginServices = require('../services/loginServices');
const createToken = require('../services/createToken');

const login = async (req, res) => {
  const { email, password } = req.body;

  const resultLoginServices = await loginServices(email, password);
    // console.log('=========== LOGIN CONTROLLER =============');
    // console.log('resultLoginServices', resultLoginServices);

  if (resultLoginServices !== true) {
    const { code, message } = resultLoginServices;

    // console.log('=========== LOGIN CONTROLLER =============');
    // console.log('code', code, 'message', message);

    return res.status(code).json({ message });
  }

  const token = createToken(email);
  // console.log('=========== LOGIN CONTROLLER =============');
  // console.log('token', token);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};
