const { Router } = require("express");

const {
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../../controllers/api/users");

const router = Router();

// /api/users endpoints
router.get("/", getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
