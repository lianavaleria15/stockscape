// For USER interactions
const viewUserProfileBtn = $("[name='view-userprofile-btn']");
const usernameSearchForm = $("#username-search-form");

const viewUserProfile = (event) => {
  event.preventDefault();

  // get user id from user card
  const userId = event.currentTarget.id;

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
