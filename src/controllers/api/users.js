// IMPORTS
const { User, InvestmentProfile } = require("../../models");
const { logError } = require("../../helpers/utils");

const checkIfUserExists = async (username, req, res) => {
  // Get all users in the database
  // const usernamesInDB = await User.findAll();
  // sort all usernames into an array
  // const usernameArray = [usernamesInDB.dataValues.username];
  // console.log("USERNAME IN DB", usernameArray);
  // throw error if username already exists
  // if (usernameArray.includes(username) &&  id =! req.session.user.username) {
  //   return res.json({
  //     success: false,
  //     data: `${username} already exists.`,
  //   });
  // }
};

const updateUser = async (req, res) => {
  try {
    // get payload and user id
    const { username, bio, investor_type, favourite_company } = req.body;

    const { id } = req.session.user;

    // checkIfUserExists(username);

    // check fo user in db
    const userId = await User.findByPk(id);

    if (userId) {
      await User.update(
        {
          username,
          bio,
          investor_type,
          favourite_company,
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

module.exports = { updateUser, deleteUser };
