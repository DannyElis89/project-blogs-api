const loginServices = require('../services/loginServices');
const createToken = require('../services/createToken');

const login = async (req, res) => {
  const { email, password } = req.body;

  const resultLoginServices = await loginServices(email, password);

  if (resultLoginServices !== true) {
    const { code, message } = resultLoginServices;
    return res.status(code).json({ message });
  }

  const token = createToken(email);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};
