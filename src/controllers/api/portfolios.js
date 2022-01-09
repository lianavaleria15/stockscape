// IMPORTS
const { User, InvestmentProfile } = require("../../models");
const { logError } = require("../../helpers/utils");

const addPortfolio = async (req, res) => {};
const updatePortfolio = async (req, res) => {};
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
