const { Router } = require("express");

const {
  renderDashboard,
  renderCreateMyPortfolio,
  renderEditMyPortfolio,
  renderEditMyProfile,
  renderUserList,
  renderViewUserProfile,
} = require("../../controllers/view/privateController");

const router = Router();

// Private / endpoints
router.get("/dashboard", renderDashboard);

router.get("/:id/profile/edit", renderEditMyProfile);

router.get("/users/:id", renderViewUserProfile);

router.get("/portfolio/create", renderCreateMyPortfolio);

router.get("/users", renderUserList);

module.exports = router;
