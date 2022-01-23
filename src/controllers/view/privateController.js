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

    const companies = companiesFromDB.map((company) =>
      company.get({ plain: true })
    );

    // get the user's portfolios
    const userPortfolioData = await User.findByPk(id, {
      include: {
        model: Portfolio,
        include: { model: Company, through: PortfolioCompany },
      },
    });

    const userPortfolio = userPortfolioData.get({ plain: true });

    const portfolioInfo = userPortfolio.portfolios.map((portfolio) => {
      const stockReturnArray = portfolio.companies.map((company) => {
        // calculate each company's year end return
        const stockReturn =
          company.janPrice * company.portfolioCompany.units * company.gainLoss -
          company.janPrice * company.portfolioCompany.units;
        return stockReturn;
      });

      const stockReturns =
        stockReturnArray.length > 0
          ? stockReturnArray.reduce((acc, curr) => {
              return acc + curr;
            })
          : 0;

      return {
        portfolioName: portfolio.name,
        yearEndReturn: stockReturns,
        companies: portfolio.companies,
      };
    });

    return res.render("edit-profile", {
      user: userPortfolio,
      loggedIn: req.session.user.loggedIn,
      companies,
      portfolioInfo,
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

    // get user info, including portfolios, companies
    const userPortfoliosData = await User.findByPk(userId, {
      include: {
        model: Portfolio,
        include: {
          model: Company,
          through: PortfolioCompany,
        },
      },
    });

    const user = userPortfoliosData.get({ plain: true });

    const portfoliosInfo = user.portfolios.map((portfolio) => {
      const stockReturnArray = portfolio.companies.map((company) => {
        // calculate each company's year end earnings
        const stockReturn =
          company.janPrice * company.portfolioCompany.units * company.gainLoss -
          company.janPrice * company.portfolioCompany.units;
        return stockReturn;
      });
      // add up all of a portfolio's company stock returns
      const yearEndReturn =
        stockReturnArray.length > 0
          ? stockReturnArray.reduce((acc, curr) => {
              return acc + curr;
            })
          : 0;

      return {
        portfolioName: portfolio.name,
        yearEndReturn,
        companies: portfolio.companies,
      };
    });

    // get companies id for fav company field
    const companyFromDB = await Company.findByPk(user.favourite_company);

    const favourite_company = companyFromDB.get({ plain: true });

    return res.render("user-profile", {
      user,
      favourite_company,
      portfoliosInfo,
    });
  } catch (error) {
    logError("Render public user profile", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render public user profile." });
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

    // CK Issue = this is causing the userID to change to match the favourite ID instead of matching userID's favourite company with a company in the database
    // const userFavCompany = user.map((user) => {
    //   let favCompanyList = favourite_company.find(
    //     (element) => element.id === user.favourite_company
    //   );
    //   return { ...user, ...favCompanyList };
    // });

    res.render("view-users", { user, favourite_company });
  } catch (error) {
    logError("Render users", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to render all users." });
  }
};

module.exports = {
  renderDashboard,
  renderCreateMyPortfolio,
  renderEditMyProfile,
  renderUserList,
  renderViewUserProfile,
};
