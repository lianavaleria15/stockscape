const { Router } = require("express");

const {} = require("../../controllers/api/users");

const router = Router();

// /api/users endpoints
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
