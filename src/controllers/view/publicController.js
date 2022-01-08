const renderSignUp = (req, res) => {
  try {
    res.render("sign-up");
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Sign Up`);
  }
};

const renderLogin = (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Log In`);
  }
};

const renderHomepage = async (req, res) => {
  try {
    res.render("homepage");
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Homepage`);
  }
};

const renderAboutUs = (req, res) => {
  try {
    res.render("about-us");
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Log In`);
  }
};

const renderCompanies = (req, res) => {
  try {
    res.render("about-us");
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Log In`);
  }
};

const renderUserProfile = async (req, res) => {
  try {
    return res.send("renderMyPortfolio");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render" });
  }
};

module.exports = {
  renderSignUp,
  renderLogin,
  renderHomepage,
  renderAboutUs,
  renderCompanies,
  renderUserProfile,
};
