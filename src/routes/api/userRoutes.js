const { Router } = require("express");

const {
  updateUser,
  deleteUser,
  getUser,
} = require("../../controllers/api/users");

const router = Router();

// /api/users endpoints
router.put("/:id", updateUser);
router.get("/", getUser);
router.delete("/:id", deleteUser);

module.exports = router;
