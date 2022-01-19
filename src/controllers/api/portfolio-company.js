// IMPORTS
const { Company, Portfolio, PortfolioCompany } = require("../../models");
const { logError } = require("../../helpers/utils");

const addPortfolioCompanyLine = async (req, res) => {
  try {
    // get payload: USE getPayloadWithValidFieldsOnly HERE
    const { portfolio_id, company_id, units } = req.body;

    const companyFromDb = await Company.findByPk(company_id);
    const { janPrice } = companyFromDb.get({ plain: true });

    const unit_cost = janPrice;

    // I think if the user is trying to add a company to the PortfolioCompany twice it's throwing an error - perhaps the line item needs to be unique?
    if (portfolio_id && company_id && units && unit_cost) {
      await PortfolioCompany.create({
        portfolio_id,
        company_id,
        units,
        unit_cost,
      });

      return res.json({
        success: true,
        data: `Successfully added company to portfolio`,
      });
    }

    // missing/bad data entry in request
    return res.status(400).json({
      success: false,
      error: "Please provide the appropriate data entries.",
    });
  } catch (error) {
    logError("PUT Portfolio Company", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

module.exports = { addPortfolioCompanyLine };
