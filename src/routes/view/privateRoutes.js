const { Router } = require("express");

const {
  renderDashboard,
  renderCreateMyPortfolio,
  renderEditMyPortfolio,
  renderCreateMyProfile,
  renderEditMyProfile,
} = require("../../controllers/view/privateController");

const router = Router();

// Private / endpoints
router.get("/dashboard", renderDashboard);
router.get("/create-profile", renderCreateMyProfile);
router.get("/edit-profile/:id", renderEditMyProfile);
router.get("/create-portfolio", renderCreateMyPortfolio);
router.get("/edit-portfolio/:id", renderEditMyPortfolio);

module.exports = router;
