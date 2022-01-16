// For USER interactions
console.log("Connected");
const viewUserProfileBtn = $("[name='view-profile-btn']");
const usernameSearchForm = $("#username-search-form");

const viewUserProfile = (event) => {
  event.preventDefault();
  console.log("click");

  // get user id from session
  const userId = event.currentTarget.id;

  console.log(userId);

  window.location.replace(`/users/${userId}`);
};

const handleSearchForUsername = async (event) => {
  event.preventDefault();

  // get post body from form fields
  const username = $("#username").val();

  // make GET request to /auth/sign-up
  const response = await fetch(`/api/users/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // const data = await response.json();
};

viewUserProfileBtn.on("click", viewUserProfile);
usernameSearchForm.on("submit", handleSearchForUsername);
