const { Router } = require("express");

const userRoutes = require("./userRoutes");
const portfolioRoutes = require("./portfolioRoutes");
const apiAuth = require("../../middlewares/apiAuth");

const router = Router();

//  api routes
router.use("/users", apiAuth, userRoutes);
router.use("/portfolios", apiAuth, portfolioRoutes);

module.exports = router;
