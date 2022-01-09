const { Router } = require("express");

const {
  renderDashboard,
  renderCreateMyPortfolio,
  renderEditMyPortfolio,
  renderEditMyProfile,
} = require("../../controllers/view/privateController");

const router = Router();

// Private / endpoints
router.get("/dashboard", renderDashboard);
// profile/edit/:id
router.get("/edit-profile/:id", renderEditMyProfile);
// investmentportfolio
router.get("/create-portfolio", renderCreateMyPortfolio);
// investmentportfolio/:id
router.get("/edit-portfolio/:id", renderEditMyPortfolio);

module.exports = router;
