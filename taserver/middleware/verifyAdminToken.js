const jwt = require('jsonwebtoken');
const SECRET_KEY = "qwertyuiop1234567890";

const verifyAdminToken = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Token missing' });
    const token = authHeader.split(' ')[1];
    try {
    const decoded = jwt.verify(token, SECRET_KEY);
      console.log("VAT",decoded)
    if (!decoded.isAdmin) {
      return res.status(403).json({ message: 'Admin privileges required' });
    }
    // req.user = decoded; // Optional: pass user info to next handler
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
}


module.exports = {verifyAdminToken};