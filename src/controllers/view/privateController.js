const { User, Portfolio, Company, PortfolioCompany } = require("../../models");
const { logError } = require("../../helpers/utils");

// Sequelize is required to access operators
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const renderDashboard = async (req, res) => {
  try {
    // get logged in user's id
    const { id } = req.session.user;

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

    return res.render("dashboard", { id, portfolios });
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

    // for fave company list
    const companiesFromDB = await Company.findAll();
    // get the user's portfolio
    const userPortfolioData = await User.findByPk(id, {
      include: [{ model: Portfolio }],
    });

    const companies = companiesFromDB.map((company) =>
      company.get({ plain: true })
    );

    const userPortfolio = userPortfolioData.get({ plain: true });

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

    const userFromDB = await User.findByPk(userId);
    const companyFromDB = await Company.findByPk(userFromDB.favourite_company);

    const user = userFromDB.get({ plain: true });
    const favourite_company = companyFromDB.get({ plain: true });

    return res.render("user-profile", { user, favourite_company });
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
    const { id } = req.session.user;

    const userFromDB = await User.findAll({
      where: {
        id: {
          [Op.ne]: id,
        },
      },
    });
    const companiesFromDB = await Company.findAll();

    const user = userFromDB.map((user) => user.get({ plain: true }));
    const favourite_company = companiesFromDB.map((companies) =>
      companies.get({ plain: true })
    );

    let userFavCompany = user.map((user) => {
      let favCompanyList = favourite_company.find(
        (element) => element.id === user.favourite_company
      );
      return { ...user, ...favCompanyList };
    });

    res.render("view-users", { userFavCompany });
  } catch (error) {
    logError("Render companies", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render all users." });
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
