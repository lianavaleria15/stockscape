const { Router } = require("express");

const {
  getAllPortfolios,
  getPortfolioById,
  addPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../../controllers/api/portfolios");

const router = Router();

// /api/portfolios endpoints
router.get("/", getAllPortfolios);
router.get("/:id", getPortfolioById);
router.post("/", addPortfolio);
router.put("/:id", updatePortfolio);
router.delete("/:id", deletePortfolio);

module.exports = router;
