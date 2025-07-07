const jwt = require('jsonwebtoken');
const SECRET_KEY = "qwertyuiop123456789";

const tokenGenerator = (payload, expiresIn = '3h') => {
  console.log("tk",payload)
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

module.exports = { tokenGenerator };