// For USER interactions
console.log("Connected");
const viewUserProfileBtn = $("[name='view-profile-btn']");

const viewUserProfile = async (event) => {
  event.preventDefault();
  console.log("click");

  // get user id from session
  const userId = event.currentTarget.id;

  console.log(userId);

  window.location.replace(`/users/${userId}`);
};

viewUserProfileBtn.on("click", viewUserProfile);
