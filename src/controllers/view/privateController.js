const renderDashboard = async (req, res) => {
  try {
    return res.send("renderDashboard");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render" });
  }
};

const renderEditMyProfile = async (req, res) => {
  try {
    return res.send("renderMyProfile");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render" });
  }
};

const renderCreateMyProfile = async (req, res) => {
  try {
    return res.send("renderMyProfile");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render" });
  }
};

const renderEditMyPortfolio = async (req, res) => {
  try {
    return res.send("renderMyPortfolio");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render" });
  }
};
const renderCreateMyPortfolio = async (req, res) => {
  try {
    return res.send("renderMyPortfolio");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render" });
  }
};

module.exports = {
  renderDashboard,
  renderCreateMyPortfolio,
  renderEditMyPortfolio,
  renderCreateMyProfile,
  renderEditMyProfile,
};
