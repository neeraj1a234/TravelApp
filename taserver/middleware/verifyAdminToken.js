const jwt = require('jsonwebtoken');
const SECRET_KEY = "qwertyuiop123456789";

const verifyAdminToken = (req, res, next) => {
  console.log("verifyAdminToken middleware triggered");

  const authHeader = req.headers.authorization;
  console.log("Authorization header:", authHeader);

  // 🔍 Check if token exists
  if (!authHeader) {
    return res.status(401).json({ message: 'Token missing' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log("Decoded token payload:", decoded);

    // 🔍 Check admin privilege
    if (!decoded.isAdmin) {
      return res.status(403).json({ message: 'Admin privileges required' });
    }

    // Optional: Attach user info to request for downstream routes
    req.user = decoded;

    next(); // ✅ Token verified and user is admin
  } catch (error) {
    console.error("Token verification error:", error.message);
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

module.exports = { verifyAdminToken };
