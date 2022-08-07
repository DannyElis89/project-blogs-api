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

module.exports = {
  createUser,
};
