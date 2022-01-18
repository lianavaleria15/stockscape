const { Router } = require("express");

const {
  updateUser,
  deleteUser,
  handleDashboardData,
} = require("../../controllers/api/users");

const router = Router();

// /api/users endpoints
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/:id/dashboard", handleDashboardData);

module.exports = router;
