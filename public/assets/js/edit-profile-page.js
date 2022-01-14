const saveProfileEditsBtn = $("[name='save-profile-changes-btn']");

const getErrorsEditProfile = ({ username, bio }) => {
  const errors = {};

  // if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
  //   const error = (errors.email = "Invalid email address.");
  //   console.log(error);
  // }

  // if (
  //   !password ||
  //   !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$/.test(
  //     password
  //   )
  // ) {
  //   const error = (errors.password = "Invalid password");
  //   console.log(error);
  // }

  // if (!confirmPassword || password !== confirmPassword) {
  //   const error = (errors.confirmPassword = "Passwords do not match");
  //   console.log(error);
  // }

  if (!username || !/^[A-Za-z]{8,30}$/.test(username)) {
    const error = (errors.username =
      "Invalid username. Must be 8-30 alphanumberic characters.");
    console.log(error);
  }

  if (bio.length > 2000) {
    const error = (errors.bio = "Bio must be fewer than 2,000 characters.");
    console.log(error);
  }

  return errors;
};

// ADJUST THIS FOR EDIT PROFILE PAGE
// const renderErrorMessages = (errors) => {
//   const fields = [
//     "email",
//     "password",
//     "firstName",
//     "lastName",
//     "username",
//     "confirmPassword",
//   ];
//   fields.forEach((field) => {
//     const errorDiv = $(`#${field}-error`);

//     if (errors[field]) {
//       errorDiv.text(errors[field]);
//     } else {
//       errorDiv.text("");
//     }
//   });
// };

const updateProfile = async (event) => {
  event.preventDefault();

  const userId = event.currentTarget.id;

  // get payload from form fields
  const username = $("#username").val();
  const investorType = $("#investor-type").val();
  const faveCompany = $("#favourite-company").val();
  const bio = $("#user-bio").val();

  // display form field errors
  const errors = getErrorsEditProfile({ username, bio });

  renderErrorMessages(errors);

  // make PUT request to /api/users
  const response = await fetch(`/api/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      investor_type: investorType,
      favourite_company: faveCompany,
      bio,
    }),
  });

  const data = await response.json();

  if (data.success) {
    window.location.replace(`/${userId}/profile/edit`);
  }
};

saveProfileEditsBtn.on("click", updateProfile);
