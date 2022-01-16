// jQuery Logout Elements
const logoutBtn = $("#logout-btn");

// For USER interactions
const viewProfileBtn = $("[name='view-profile-btn']");

const handleLogout = async () => {
  const response = await fetch("/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (data.success) {
    //   send to homepage
    window.location.replace("/");
  }
};

const viewEditProfile = (event) => {
  event.preventDefault();

  // get user id from session
  const userId = event.currentTarget.id;

  // redirect to edit profile path with user id
  window.location.replace(`/${userId}/profile/edit`);
};

// EVENT LISTENERS

logoutBtn.on("click", handleLogout);
editProfileBtn.on("click", viewEditProfile);
