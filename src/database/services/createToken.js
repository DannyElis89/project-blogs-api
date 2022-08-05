require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
  const newToken = jwt.sign(
    { data: user },
    process.env.JWT_SECRET, {
      expiresIn: '1h',
      algorithm: 'HS256',
    },
  );
  return newToken;
};

module.exports = createToken;
