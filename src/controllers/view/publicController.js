const { User, Portfolio, Company } = require("../../models");
const { logError } = require("../../helpers/utils");

// /sign-up
const renderSignUp = (req, res) => {
  try {
    res.render("sign-up");
  } catch (error) {
    logError("Render sign-up", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render sign-up." });
  }
};

// /login
const renderLogin = (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    logError("Render login", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render login." });
  }
};

// /*
const renderHomepage = (req, res) => {
  try {
    const { loggedIn } = req.session;
    // pass loggedIn to render private/public navbar
    res.render("homepage", { loggedIn });
  } catch (error) {
    logError("Render homepage", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render homepage." });
  }
};

// /about-us
const renderAboutUs = (req, res) => {
  try {
    const { loggedIn } = req.session;
    // pass loggedIn to render private/public navbar
    res.render("about-us", { loggedIn });
  } catch (error) {
    logError("Render about-us", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render about-us." });
  }
};

// /companies
const renderCompanies = async (req, res) => {
  try {
    const { loggedIn } = req.session;

    const companyData = await Company.findAll();

    const companies = companyData.map((company) => {
      return company.get({ plain: true });
    });

    // pass companies data & loggedIn to render private/public navbar
    res.render("companies", { companies, loggedIn });
  } catch (error) {
    logError("Render companies", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render companies." });
  }
};

// /user/:id
const renderUserProfile = async (req, res) => {
  try {
    const userSessionInfo = req.session;

    // check if logged in user is viewing own profile, pass to handlebars to render relevant buttons (delete/edit if viewing own profile)

    // get user, portfolio, and company info from db
    const userProfileData = await User.findByPk(req.params.id, {
      include: [{ model: Portfolio, include: Company }],
    });

    if (!userProfileData) {
      return res
        .status(404)
        .json({ message: `No user with id ${req.params.id}.` });
    }

    const userProfile = userProfileData.get({ plain: true });

    return res.render("user-profile", { userProfile, userSessionInfo });
  } catch (error) {
    logError("Render user-profile", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render user-profile." });
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
