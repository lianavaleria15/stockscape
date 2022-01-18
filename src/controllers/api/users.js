// IMPORTS
const { User, Portfolio } = require("../../models");
const { logError } = require("../../helpers/utils");

const isUsernameUnique = (username) => {
  return User.count({ where: { username: username } }).then((count) => {
    if (count != 0) {
      return "Username already exists";
    }
    return true && "username does not exist";
  });
};

const updateUser = async (req, res) => {
  try {
    // get payload: USE getPayloadWithValidFieldsOnly HERE
    const { username, bio, investor_type, favourite_company } = req.body;

    const { id } = req.session.user;

    // function to check if the username exists
    const usernameCheck = await isUsernameUnique(username);
    console.log(usernameCheck);

    // if the username attempted already exists and it does not match the id of req.session.user
    // then do not update the username

    // check for user in db
    const userId = await User.findByPk(id);

    if (userId) {
      await User.update(
        {
          username,
          bio,
          investor_type,
          favourite_company,
        },
        {
          where: {
            id,
          },
        }
      );
      return res.json({
        success: true,
        data: `Updated user ${username}.`,
      });
    }
    return res.status(404).json({
      success: false,
      error: `User with id ${id} doesn't exist.`,
    });
  } catch (error) {
    logError("PUT user", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

// /api/users/:id
const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json({
      success: true,
      message: `User with id ${req.params.id} deleted.`,
    });
  } catch (error) {
    logError("DELETE user", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

// /api/users/:id/dashboard
const handleDashboardData = async () => {
  // get user and include portfolios and companies through PortfolioCompany
  const userPortfoliosFromDB = await Portfolio.findAll({
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

  // map to get plain data
  const userPortfoliosData = userPortfoliosFromDB.map((portfolio) =>
    portfolio.get({ plain: true })
  );

  // map plain data to get transformed portfolios data object
  const userPortfolios = userPortfoliosData.map((portfolio) => {
    return {
      portfolioName: portfolio.name,
      companies: portfolio.companies.map((company) => {
        // calculate company's year end return
        const stockReturn =
          company.janPrice * company.portfolioCompany.units * company.gainLoss -
          company.janPrice * company.portfolioCompany.units;

        return {
          id: company.id,
          name: company.name,
          symbol: company.symbol,
          stockReturn,
        };
      }),
    };
  });

  console.log(userPortfolios[0].companies);
};

module.exports = { updateUser, deleteUser, handleDashboardData };
