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
}) => {
  const errors = {};

  if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    const error = (errors.email = "Invalid email address.");
    console.log(error);
  }

  if (
    !password ||
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$/.test(
      password
    )
  ) {
    const error = (errors.password =
      "Invalid password. Must be 8-64 characters and include at least one letter, number, and special character.");
    console.log(error);
  }

  if (!confirmPassword || password !== confirmPassword) {
    const error = (errors.confirmPassword = "Passwords do not match.");
    console.log(error);
  }

  if (!username) {
    const error = (errors.username =
      "Username is required. Must be 8-30 characters.");
    console.log(error);
  }

  if (!firstName) {
    const error = (errors.firstName = "First name is required.");
    console.log(error);
  }

  if (!lastName) {
    const error = (errors.lastName = "Last name is required.");
    console.log(error);
  }

  return errors;
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

  if (password === confirmPassword) {
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
