const { User, InvestmentProfile, Company } = require("../../models");
const { logError } = require("../../helpers/utils");

const renderDashboard = async (req, res) => {
  try {
    // get logged in user's id
    const { id } = req.session.user;

    // // get user, portfolio, and company info from db
    // const userDashboardData = await User.findByPk(userId);

    // const userDashboard = userDashboardData.get({ plain: true });

    return res.render("dashboard", { id });
  } catch (error) {
    logError("Render dashboard", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render dashboard." });
  }
};

const renderEditMyProfile = async (req, res) => {
  try {
    // get logged in user's id
    const { id } = req.session.user;

    // get user, portfolio, and company info from db
    const userProfile = await User.findByPk(id);
    // for fave company list
    const companiesFromDB = await Company.findAll();

    // get plain data
    const userProfileData = userProfile.get({ plain: true });
    const companies = companiesFromDB.map((company) =>
      company.get({ plain: true })
    );

    return res.render("edit-profile", {
      user: userProfileData,
      loggedIn: req.session.user.loggedIn,
      companies,
    });
  } catch (error) {
    logError("Render edit profile", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render edit profile." });
  }
};

const renderEditMyPortfolio = async (req, res) => {
  try {
    // get user's investment portfolio data from db
    // get plain data object

    // pass data to handlebars template
    return res.render("edit-portfolio");
  } catch (error) {
    logError("Render edit portfolio", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render edit portfolio." });
  }
};

const renderCreateMyPortfolio = async (req, res) => {
  try {
    return res.render("create-portfolio");
  } catch (error) {
    logError("Render create portfolio", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render create portfolio." });
  }
};

module.exports = {
  renderDashboard,
  renderCreateMyPortfolio,
  renderEditMyPortfolio,
  renderEditMyProfile,
};
