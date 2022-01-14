const saveProfileEditsBtn = $("[name='save-profile-changes-btn']");
const editPortfolioBtn = $("edit-portfolio-btn");

const getErrorsEditProfile = ({ username, bio }) => {
  const errors = {};

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)) {
    const error = (errors.email = "Invalid email address");
    console.log(error);
  }

  if (!username) {
    const error = (errors.username = "Username is required");
    console.log(error);
  }

  return errors;
};

const renderErrorMessages = (errors) => {
  const fields = ["username"];
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
  console.log("save changes clicked");
  const userId = event.currentTarget.id;

  // get payload from form fields
  const username = $("#username").val();
  const investorType = $("#investor-type").val();
  const faveCompany = $("#favourite-company").val();
  const bio = $("#user-bio").val();

  console.log(username, investorType, faveCompany);

  // ERROR FUNCTION FOR EMPTY AND/OR INVALID USERNAME
  // CODE ERROR MESSAGES FOR EMPTY FIELDS
  const errors = getErrorsEditProfile({
    username,
  });

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
  console.log(investorType, faveCompany);
  const data = await response.json();

  console.log("Data:" + { data });

  if (data.success) {
    console.log("changes saved");
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
