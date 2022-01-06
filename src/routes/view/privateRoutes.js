const { Router } = require("express");

const { renderDashboard } = require("../../controllers/view/privateController");

const router = Router();

router.get("/dashboard", renderDashboard);

module.exports = router;
