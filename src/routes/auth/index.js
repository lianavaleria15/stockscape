const { Router } = require("express");

const { signup, login, logout } = require("../../controllers/auth");

const router = Router();

// /auth endpoints
router.post("/sign-up", signup);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
