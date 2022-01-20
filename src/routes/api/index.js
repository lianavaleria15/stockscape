const { Router } = require("express");

const userRoutes = require("./userRoutes");
const portfolioRoutes = require("./portfolioRoutes");
const companiesRoutes = require("./companiesRoutes");
const portfolioCompanyRoutes = require("./portfolioCompanyRoutes");
const apiAuth = require("../../middlewares/apiAuth");

const router = Router();

//  api routes
router.use("/users", apiAuth, userRoutes);
router.use("/portfolios", apiAuth, portfolioRoutes);
router.use("/companies", apiAuth, companiesRoutes);
router.use("/portfolio-company", apiAuth, portfolioCompanyRoutes);

module.exports = router;
