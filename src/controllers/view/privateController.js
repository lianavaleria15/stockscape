const { User, InvestmentProfile } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
    // get user, portfolio, and company info from db
    const userDashboardData = await User.findByPk(req.params.id, {
      include: [{ model: InvestmentProfile, include: Company }],
    });

    const userDashboard = userDashboardData.get({ plain: true });

    return res.render("dashboard", { userDashboard });
  } catch (error) {
    logError("Render dashboard", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render dashboard." });
  }
};

const renderEditMyProfile = async (req, res) => {
  try {
    return res.render("edit-profile");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render edit profile." });
  }
};

const renderCreateMyProfile = async (req, res) => {
  try {
    // get data from db

    return res.render("create-profile");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render create profile" });
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
  renderCreateMyProfile,
  renderEditMyProfile,
};
