const { User, Portfolio, Company, PortfolioCompany } = require("../../models");
const { logError } = require("../../helpers/utils");

const renderDashboard = async (req, res) => {
  try {
    // get logged in user's id
    const { id } = req.session.user;

    // // get user, portfolio, and company info from db
    // const userDashboardData = await User.findByPk(userId);

    // const userDashboard = userDashboardData.get({ plain: true });

    const portfoliosFromDB = await Portfolio.findAll({
      where: {
        user_id: id,
      },
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password"],
          },
        },
        {
          model: Company,
          through: PortfolioCompany,
        },
      ],
    });

    const portfolios = portfoliosFromDB.map((portfolio) =>
      portfolio.get({ plain: true })
    );

    console.log(portfolios);

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

    // for fave company list
    const companiesFromDB = await Company.findAll();
    // get the user's portfolio
    const userPortfolioData = await User.findByPk(id, {
      include: [{ model: Portfolio }],
    });

    // get plain data
    // const userProfileData = userProfile.get({ plain: true });
    const companies = companiesFromDB.map((company) =>
      company.get({ plain: true })
    );
    // const userPortfolio = userPortfolioData.map((portfolio) =>
    //   portfolio.get({ plain: true })
    // );
    const userPortfolio = userPortfolioData.get({ plain: true });
    console.log("USER PORTFOLIO", userPortfolio);

    return res.render("edit-profile", {
      user: userPortfolio,
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

const renderViewUserProfile = async (req, res) => {
  try {
    // get user id
    const userId = req.params.id;
    console.log(userId);

    const userFromDB = await User.findByPk(userId);
    const companiesFromDB = await Company.findAll();

    const user = userFromDB.get({ plain: true });
    const companies = companiesFromDB.map((company) =>
      company.get({ plain: true })
    );

    return res.render("user-profile", { user, companies });
  } catch (error) {
    logError("Render edit profile", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render user profile." });
  }
};

const renderEditMyPortfolio = async (req, res) => {
  try {
    // get user's investment portfolio data from db
    // get plain data object
    // get logged in user's id

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

const renderUserList = async (req, res) => {
  try {
    // get logged in user's id

    // get users & companies from db
    const usersFromDB = await User.findAll();
    const companiesFromDB = await Company.findAll();

    // map through companies to get plain data
    const users = usersFromDB.map((user) => {
      return user.get({ plain: true });
    });

    // for fave company list
    const companies = companiesFromDB.map((company) =>
      company.get({ plain: true })
    );

    res.render("view-users", { users, companies });
  } catch (error) {
    logError("Render companies", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to user list companies." });
  }
};

module.exports = {
  renderDashboard,
  renderCreateMyPortfolio,
  renderEditMyPortfolio,
  renderEditMyProfile,
  renderUserList,
  renderViewUserProfile,
};
