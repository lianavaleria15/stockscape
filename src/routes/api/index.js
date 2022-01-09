const { Router } = require("express");

const userRoutes = require("./userRoutes");
const portfolioRoutes = require("./portfolioRoutes");

const router = Router();

//  '/api' endpoints
router.use("/users", userRoutes);
router.use("/portfolios", portfolioRoutes);

module.exports = router;
