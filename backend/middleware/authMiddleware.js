const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        message: "No token, authorization denied",
      });
    }

    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.JWT_SECRET
    );

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Token not valid",
    });
  }
};

module.exports = protect;