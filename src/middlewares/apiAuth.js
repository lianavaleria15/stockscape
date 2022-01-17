const apiAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.status(401).json({ success: false, error: "Unauthorized access" });
  } else {
    next();
  }
};

module.exports = apiAuth;
