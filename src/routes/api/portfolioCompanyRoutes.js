const { Router } = require("express");
const {
  addPortfolioCompanyLine,
} = require("../../controllers/api/portfolio-company");

const router = Router();

// /api/portfolios endpoints
router.post("/", addPortfolioCompanyLine);

module.exports = router;
