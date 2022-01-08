const { Router } = require("express");

const {
  renderDashboard,
  renderCreateMyPortfolio,
  renderEditMyPortfolio,
  renderCreateMyProfile,
  renderEditMyProfile,
  renderUserProfile,
} = require("../../controllers/view/privateController");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/user/:id", renderUserProfile);
router.get("/create-profile", renderCreateMyProfile);
router.get("/edit-profile/:id", renderEditMyProfile);
router.get("/create-portfolio", renderCreateMyPortfolio);
router.get("/edit-portfolio/:id", renderEditMyPortfolio);

module.exports = router;
