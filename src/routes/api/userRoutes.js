const { Router } = require("express");

const { updateUser, deleteUser } = require("../../controllers/api/users");

const router = Router();

// /api/users endpoints
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
