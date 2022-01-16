const { User, Portfolio, Company, PortfolioCompany } = require("../../models");
const { logError } = require("../../helpers/utils");

const renderDashboard = async (req, res) => {
  try {
    // get logged in user's id
    const { id } = req.session.user;

    // get user and include portfolios and companies through Portfolio Company?
    const userPortfoliosData = await Portfolio.findAll({
      where: {
        user_id: id,
      },
      include: [
        {
          model: Company,
          through: PortfolioCompany,
        },
      ],
    });

    const userPortfolios = userPortfoliosData.map((portfolio) =>
      portfolio.get({ plain: true })
    );

    const portfoliosMap = portfolios.map((portfolio) => {
      return {
        portfolioName: portfolio.name,
        companies: portfolio.companies.map((company) => {
          const stockReturn = company.decPrice * company.portfolioCompany.units;

          return {
            id: company.id,
            name: company.name,
            symbol: company.symbol,
            stockReturn,
          };
        }),
      };
    });

    console.log(portfoliosMap[0].companies);

    return res.render("dashboard", { id, userPortfolios });
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

module.exports = {
  renderDashboard,
  renderCreateMyPortfolio,
  renderEditMyPortfolio,
  renderEditMyProfile,
};
