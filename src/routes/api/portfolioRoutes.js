const { Router } = require("express");

const {
  getAllPortfolios,
  addPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../../controllers/api/portfolios");

const router = Router();

// /api/portfolios endpoints
router.get("/", getAllPortfolios);
router.post("/", addPortfolio);
router.put("/:id", updatePortfolio);
router.delete("/:id", deletePortfolio);

module.exports = router;
