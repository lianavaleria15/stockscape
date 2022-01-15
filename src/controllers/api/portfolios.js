// IMPORTS
const { User, Portfolio } = require("../../models");
const { logError } = require("../../helpers/utils");

// /api/portfolios
const addPortfolio = async (req, res) => {
  try {
    const { company, units } = req.body;

    // get payload: USE getPayloadWithValidFieldsOnly HERE
    if (company && units) {
      await Portfolio.create({
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

// /api/portfolios/:id
const updatePortfolio = async (req, res) => {
  try {
    // get payload: USE getPayloadWithValidFieldsOnly HERE
    const { company, units, id } = req.body;
    const { userId } = req.session.user;

    // check for portfolio in db
    const investmentPortfolioId = await Portfolio.findByPk(id);
    if (investmentPortfolioId) {
      await Portfolio.update(
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

// /api/portfolios/:id
const deletePortfolio = async (req, res) => {
  try {
    // delete portfolio by id
    await Portfolio.destroy({
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
