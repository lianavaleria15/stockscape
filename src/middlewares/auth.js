const authUser = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    console.log("not logged in");
  } else {
    next();
  }
};

module.exports = authUser;
