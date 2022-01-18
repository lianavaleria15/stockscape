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

router.get("/:id/portfolio/create", renderCreateMyPortfolio);

// should this become '/:userid/portfolio/:portfolioid/edit' now that users can have more than 1 portfolio?
router.get("/portfolio/:id/edit", renderEditMyPortfolio);

router.get("/users", renderUserList);

module.exports = router;
