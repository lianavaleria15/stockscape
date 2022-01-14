const { Router } = require("express");

const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");
const authUser = require("../../middlewares/auth");

const router = Router();

// / routes
router.use(publicRoutes);
router.use(authUser, privateRoutes);

module.exports = router;
