const saveProfileEditsBtn = $("[name='save-profile-changes-btn']");
const editPortfolioBtn = $("edit-portfolio-btn");

const getErrorsEditProfile = ({ username }) => {
  const errors = {};

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

const renderProfileErrorMessages = (errors) => {
  const fields = ["username", "bio"];
  fields.forEach((field) => {
    const errorDiv = $(`#${field}-error`);

    if (errors[field]) {
      errorDiv.text(errors[field]);
    } else {
      errorDiv.text("");
    }
  });
};

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

const viewEditPortfolio = (event) => {
  event.preventDefault();

  // get user id from session - CK14/10: LEAVING BLANK FOR NOW UNTIL MODELS COMPLETE
  // const userId = event.currentTarget.id;

  // redirect to edit portfolio path with user id
  window.location.replace(`/portfolio/1/edit/`);
};

saveProfileEditsBtn.on("click", updateProfile);
editPortfolioBtn.on("click", viewEditPortfolio);
