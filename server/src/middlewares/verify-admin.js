export const verifyAdmin = (req, res, next) => {
  console.log(req.userRole)
  if (req.userRole !== 'admin') {
    return res.status(403).json({ 
      success: false, 
      message: "Forbidden - admin access only" 
    });
  }
  next();
};
