const apiAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.status(401).json({ success: false, error: "unauthorized access" });
    console.log("not logged in");
  } else {
    next();
  }
};

module.exports = apiAuth;
