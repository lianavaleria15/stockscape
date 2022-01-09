// IMPORTS
const { User, InvestmentProfile } = require("../../models");
const { logError } = require("../../helpers/utils");

// Not yet sure if we need this one
const getAllUsers = async (req, res) => {
  try {
    const usersData = await User.findAll();

    const users = usersData.map((user) => {
      return user.get({ plain: true });
    });
    res.json({ success: true, data: users });
  } catch (error) {
    logError("GET all users", error.message);
    res.status(500).json({ success: false, error: "Failed to send response." });
  }
};

const updateUser = async (req, res) => {
  try {
    // get payload and user id
    // IS THIS OKAY AS LONG AS CERTAIN FIELDS CAN BE NULL?
    const {
      email,
      password,
      username,
      firstName,
      lastName,
      bio,
      investorType,
      faveCompany,
    } = req.body;
    const { id } = req.params;

    // check fo user in db
    const userId = await User.findByPk(id);
    if (userId) {
      await User.update(
        {
          email,
          password,
          username,
          first_name: firstName,
          last_name: lastName,
          bio,
          investor_type: investorType,
          fave_company: faveCompany,
        },
        {
          where: {
            id,
          },
        }
      );
      return res.json({
        success: true,
        data: `Updated user ${username}.`,
      });
    }
    return res.status(404).json({
      success: false,
      error: `User with id ${id} doesn't exist.`,
    });
  } catch (error) {
    logError("PUT user", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json({
      success: true,
      message: `User with id ${req.params.id} deleted.`,
    });
  } catch (error) {
    logError("DELETE user", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

module.exports = { getAllUsers, updateUser, deleteUser };
