// TARGET UI ELEMENTS
// For AUTH interactions
const signupForm = $("#signup-form");
const alreadyExistsModal = $("#already-exists-modal");
const loginForm = $("#login-form");
const doesntExistModal = $("#doesnt-exist-modal");
const logoutBtn = $("#logout-btn");

// For USER interactions
// For PORTFOLIO interactions

const handleLogin = async (event) => {
  //   prevent form default
  event.preventDefault();

  // get post body from form fields
  const username = $("#username").val();
  const password = $("#password").val();

  // CODE ERROR MESSAGES FOR EMPTY FIELDS
  const errors = getErrorsLogIn({
    username,
    password,
  });

  renderErrorMessages(errors);

  // make POST request to /auth/login
  const response = await fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (data.error === "Username does not exist") {
    console.log("USER DOES NOT EXIST");
    doesntExistModal.modal("show");
  }

  if (data.success) {
    console.log("Logged in");
    // direct to dashboard
    window.location.replace("/homepage");
  }
};

const getErrorsSignUp = ({
  email,
  password,
  confirmPassword,
  firstName,
  lastName,
}) => {
  const errors = {};

  if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
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

  if (!firstName) {
    const error = (errors.firstName = "First name is required");
    console.log(error);
  }

  if (!lastName) {
    const error = (errors.lastName = "Last name is required");
    console.log(error);
  }

  return errors;
};

const getErrorsLogIn = ({ username, password }) => {
  const errors = {};

  if (!password) {
    const error = (errors.password = "Invalid password");
    console.log(error);
  }

  if (!username) {
    const error = (errors.username = "Username is required");
    console.log(error);
  }

  return errors;
};

const renderErrorMessages = (errors) => {
  const fields = [
    "email",
    "password",
    "firstName",
    "lastName",
    "username",
    "confirmPassword",
  ];
  fields.forEach((field) => {
    const errorDiv = $(`#${field}-error`);

    if (errors[field]) {
      errorDiv.text(errors[field]);
    } else {
      errorDiv.text("");
    }
  });
};

const handleSignup = async (event) => {
  //   prevent form default
  event.preventDefault();

  // get post body from form fields
  const firstName = $("#first-name").val();
  const lastName = $("#last-name").val();
  const email = $("#email").val();
  const username = $("#username").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();

  // CODE ERROR MESSAGES FOR EMPTY FIELDS
  const errors = getErrorsSignUp({
    email,
    username,
    password,
    confirmPassword,
    firstName,
    lastName,
  });

  renderErrorMessages(errors);

  if (password === confirmPassword) {
    // make post request to /auth/signup
    const response = await fetch("/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        username,
        password,
      }),
    });

    const data = await response.json();

    if (data.error === "User Already Exists") {
      console.log("to do - render user already exists modal");
      alreadyExistsModal.modal("show");
    }

    if (data.success) {
      //   if success response, direct to login page
      window.location.replace("/login");
    }
  }
};

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

// EVENT LISTENERS
signupForm.on("submit", handleSignup);
loginForm.on("submit", handleLogin);
// logoutBtn.on("click", handleLogout);
