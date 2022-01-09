const { User } = require("../../models");
const {
  logError,
  getPayloadWithValidFieldsOnly,
} = require("../../helpers/utils");

// /auth/ endpoints
const signup = (req, res) => {
  try {
    // get payload
    const payload = getPayloadWithValidFieldsOnly(
      ["username", "password", "email", "firstName", "lastName"],
      req.body
    );

    // if not all payload fields are present, throw error
    if (Object.keys(payload).length !== 5) {
      return res
        .status(400)
        .json({ success: false, error: "Please provide the valid fields." });
    }

    // create new user record w/ payload
    await User.create(payload);

    return res.json({ success: true, message: "Created new user." });
  } catch (error) {
    logError("POST user", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create user." });
  }
};

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
