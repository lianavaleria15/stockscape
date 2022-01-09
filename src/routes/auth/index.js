const { Router } = require("express");
const {
  renderSignUp,
  renderLogin,
} = require("../../controllers/view/publicController");

const router = Router();

router.post("/sign-up", renderSignUp);
router.post("/login", renderLogin);
router.post("/logout", logout);

module.exports = router;
