const { Router } = require("express");

const {
  renderDashboard,
  renderCreateMyPortfolio,
  renderEditMyPortfolio,
  renderEditMyProfile,
  renderStockBasket,
} = require("../../controllers/view/privateController");

const router = Router();

// Private / endpoints
router.get("/dashboard", renderDashboard);

router.get("/:id/profile/edit", renderEditMyProfile);

router.get("/:id/portfolio/create", renderCreateMyPortfolio);

router.get("/portfolio/:id/edit/", renderEditMyPortfolio);
// OR router.get("/:id/portfolio/:id/edit/", renderEditMyPortfolio);

//check with team if this is different to dashboard=leaderboard
router.get("/stockbasket", renderStockBasket);

module.exports = router;
