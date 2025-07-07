const jwt = require('jsonwebtoken');
const SECRET_KEY = "qwertyuiop1234567890";

const tokenGenerator = (payload, expiresIn = '1h') => {
  console.log("tk",payload)
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

module.exports = { tokenGenerator };