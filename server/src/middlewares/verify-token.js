import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: "Unauthorized - no token provided" 
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ 
        success: false, 
        message: "Unauthorized - invalid token" 
      });
    }

    // Set all decoded information
    req.userId = decoded.userId;
    console.log(req.userId,decoded.userId)
    req.userRole = decoded.role;
    console.log(req.userRole,decoded.role)
    req.isVerified = decoded.isVerified;
    req.user = decoded;

    next();
  } catch (error) {
    console.log("Error in verifyToken:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Server error" 
    });
  }
};
