require('dotenv/config');
const jwt = require('jsonwebtoken');

const tokenValidate = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(authorization, process.env.JWT_SECRET);
    req.user = payload;
    next();
} catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
}
};

module.exports = tokenValidate;
