// TARGET UI ELEMENTS
// sign up form submit button
const signupForm = $("#signup-form");
const alreadyExistsModal = $("#already-exists-modal");

const getErrorsSignUp = ({
  email,
  password,
  confirmPassword,
  firstName,
  lastName,
  username,
}) => {
  const errors = {};

  if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.email = "Invalid email address.";
  }

  if (
    !password ||
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$/.test(
      password
    )
  ) {
    errors.password =
      "Invalid password. Must be 8-64 characters and include at least one letter, number, and special character.";
  }

  if (!confirmPassword || password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  if (!username || !/^[A-Za-z0-9]{8,30}$/.test(username)) {
    errors.username = "Invalid username. Must be 8-30 alphanumeric characters.";
  }

  if (!firstName) {
    errors.firstName = "First name is required.";
  }

  if (!lastName) {
    errors.lastName = "Last name is required.";
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
  event.preventDefault();

  // get post body from form fields
  const firstName = $("#first-name").val();
  const lastName = $("#last-name").val();
  const email = $("#email").val();
  const username = $("#username").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();

  // error handling for form fields
  const errors = getErrorsSignUp({
    email,
    username,
    password,
    confirmPassword,
    firstName,
    lastName,
  });

  renderErrorMessages(errors);

  if (!Object.keys(errors).length) {
    // make post request to /auth/sign-up
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

    // display 'User already exists' modal
    if (data.error === "User already exists.") {
      alreadyExistsModal.modal("show");
    }

    if (data.success) {
      window.location.replace("/login");
    }
  }
};

signupForm.on("submit", handleSignup);
