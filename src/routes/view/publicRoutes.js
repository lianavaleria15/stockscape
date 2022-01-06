const { Router } = require("express");

const {
  renderSignUp,
  renderLogin,
  renderHomepage,
  renderAboutUs,
} = require("../../controllers/view/publicController");

const router = Router();

router.get("/sign-up", renderSignUp);
router.get("/login", renderLogin);
router.get("/", renderHomepage);
router.get("/about-us", renderAboutUs);

module.exports = router;
