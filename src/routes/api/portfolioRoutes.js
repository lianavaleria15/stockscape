const { Router } = require("express");

const {
  addPortfolio,
  updatePortfolio,
  deletePortfolio,
  handleLeaderBoardData,
  getPortfolioById,
} = require("../../controllers/api/portfolios");

const router = Router();

// /api/portfolios endpoints
router.get("/:id", getPortfolioById);
router.post("/", addPortfolio);
router.put("/:id", updatePortfolio);
router.delete("/:id", deletePortfolio);
router.post("/leaderboard", handleLeaderBoardData);

module.exports = router;
