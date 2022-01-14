const { User, InvestmentProfile, Company } = require("../../models");
const { logError } = require("../../helpers/utils");

const renderDashboard = async (req, res) => {
  try {
    // get logged in user's id
    // const userId = req.session.user.id;

    // console.log(req.session);

    // // get user, portfolio, and company info from db
    // const userDashboardData = await User.findByPk(userId);

    // const userDashboard = userDashboardData.get({ plain: true });

    // return res.render("dashboard", { userDashboard });

    return res.render("dashboard", { id: req.session.user.id });
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
    const profileId = req.params.id;

    // get user, portfolio, and company info from db
    const userProfile = await User.findByPk(profileId);
    const companiesFromDB = await Company.findAll();

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
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render edit profile." });
  }
};

const renderEditMyPortfolio = async (req, res) => {
  try {
    // get data from db

    return res.render("edit-portfolio");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render edit portfolio." });
  }
};

const renderCreateMyPortfolio = async (req, res) => {
  try {
    // get data from db

    return res.render("create-portfolio");
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ error: "Failed to render create portfolio." });
  }
};

module.exports = {
  renderDashboard,
  renderCreateMyPortfolio,
  renderEditMyPortfolio,
  renderEditMyProfile,
};
