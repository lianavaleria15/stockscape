const saveProfileEditsBtn = $("[name='save-profile-changes-btn']");
const editPortfolioBtn = $("edit-portfolio-btn");

const getErrorsEditProfile = ({ username, bio }) => {
  const errors = {};

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)) {
    const error = (errors.email = "Invalid email address");
    console.log(error);
  }

  if (
    !password ||
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$/.test(
      password
    )
  ) {
    const error = (errors.password = "Invalid password");
    console.log(error);
  }

  if (!confirmPassword || password !== confirmPassword) {
    const error = (errors.confirmPassword = "Passwords do not match");
    console.log(error);
  }

  if (!username) {
    const error = (errors.username = "Username is required");
    console.log(error);
  }

  return errors;
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
