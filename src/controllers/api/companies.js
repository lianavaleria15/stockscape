// IMPORTS
const { Company, Portfolio } = require("../../models");
const { logError } = require("../../helpers/utils");

const getCompanyById = async (req, res) => {
  try {
    const { id: loggedInUserId } = req.session.user;

    const companyFromDb = await Company.findByPk(req.params.id);
    const portfolioFromDb = await Portfolio.findAll({
      where: { user_id: loggedInUserId },
    });

    const portfolios = portfolioFromDb.map((portfolio) =>
      portfolio.get({ plain: true })
    );

    if (!companyFromDb) {
      logError("Failed to get company.", "Company does not exist");
      return res
        .status(404)
        .json({ success: false, error: "Failed to get company." });
    }

    const company = companyFromDb.get({ plain: true });

    return res.json({
      success: true,
      data: { company, portfolios },
    });
  } catch (error) {
    logError("Failed to get company.", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get company." });
  }
};

module.exports = { getCompanyById };
