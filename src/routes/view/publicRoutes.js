const { Router } = require("express");

const {
  renderSignUp,
  renderLogin,
  renderHomepage,
  renderAboutUs,
  renderCompanies,
} = require("../../controllers/view/publicController");

const router = Router();

router.get("/sign-up", renderSignUp);
router.get("/login", renderLogin);
router.get("/", renderHomepage);
router.get("/about-us", renderAboutUs);
router.get("/companies", renderCompanies);

module.exports = router;
