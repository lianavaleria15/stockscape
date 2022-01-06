const renderDashboard = async (req, res) => {
  try {
    return res.send("renderDashbaord");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render" });
  }
};

module.exports = {
  renderDashboard,
};
