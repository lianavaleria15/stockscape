const { Router } = require("express");

const { getCompanyById } = require("../../controllers/api/companies");

const router = Router();

// /api/users endpoints
router.get("/:id", getCompanyById);

module.exports = router;
