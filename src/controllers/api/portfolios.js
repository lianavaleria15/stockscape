// IMPORTS
const { User, InvestmentProfile } = require("../../models");
const { logError } = require("../../helpers/utils");

const addPortfolio = async (req, res) => {
  try {
    const { company, units } = req.body;

    // check request body contents
    if (company && units) {
      await InvestmentProfile.create({
        company,
        units,
        user_id: req.session.user.id,
      });

      return res.json({
        success: true,
        data: `Added new investment portfolio.`,
      });
    }

    // missing/bad data entry in request
    return res.status(400).json({
      success: false,
      error: "Please provide the appropriate data entries.",
    });

    // server error
  } catch (error) {
    logError("POST investment portfolio", error.message);
    res.status(500).json({ success: false, error: "Failed to send response." });
  }
};

const updatePortfolio = async (req, res) => {
  try {
    // get payload
    const { company, units, id } = req.body;
    const { userId } = req.session.user;

    // check for portfolio in db
    const investmentPortfolioId = await InvestmentProfile.findByPk(id);
    if (investmentPortfolioId) {
      await InvestmentProfile.update(
        { company, units, user_id: userId },
        {
          where: {
            id,
          },
        }
      );

      return res.json({
        success: true,
        data: `Updated investment portfolio ${id}.`,
      });
    }
    return res.status(404).json({
      success: false,
      error: `Investment portfolio with id ${id} doesn't exist.`,
    });
  } catch (error) {
    logError("PUT investment profile", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

const deletePortfolio = async (req, res) => {
  try {
    // delete portfolio by its `id` value
    await InvestmentProfile.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json({
      success: true,
      data: `Portfolio with id ${req.params.id} deleted.`,
    });
  } catch (error) {
    logError("DELETE investment profile", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

module.exports = {
  addPortfolio,
  updatePortfolio,
  deletePortfolio,
};
