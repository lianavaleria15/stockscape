const { Router } = require("express");

const {
  addPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../../controllers/api/portfolios");

const router = Router();

// /api/portfolios endpoints
router.post("/", addPortfolio);
router.put("/:id", updatePortfolio);
router.delete("/:id", deletePortfolio);

module.exports = router;
