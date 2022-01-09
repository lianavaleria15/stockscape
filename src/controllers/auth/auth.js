const { User } = require("../../models");
const {
  logError,
  getPayloadWithValidFieldsOnly,
} = require("../../helpers/utils");

// /auth/ endpoints
const signup = (req, res) => {};
const login = (req, res) => {};
const logout = (req, res) => {
  // if user is logged in, destroy session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      return res.json({ success: true, message: "User logged out." });
    });
  } else {
    return res.status(404).json({
      success: false,
      error: "User already logged out.",
    });
  }
};

module.exports = { signup, login, logout };
