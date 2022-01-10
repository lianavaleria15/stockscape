const { Router } = require("express");

const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");
const authUser = require("../../middlewares/auth");

const router = Router();

// / routes
router.use(authUser, privateRoutes);
router.use(publicRoutes);

module.exports = router;
