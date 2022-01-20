// TARGET UI ELEMENTS
const loginForm = $("#login-form");
const doesntExistModal = $("#doesnt-exist-modal");

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

const getErrorsLogIn = ({ username, password }) => {
  const errors = {};

  if (!password) {
    errors.password = "Invalid password.";
  }

  if (!username) {
    errors.username = "Invalid username.";
  }

  return errors;
};

const handleLogin = async (event) => {
  //   prevent form default
  event.preventDefault();

  // get post body from form fields
  const username = $("#username").val();
  const password = $("#password").val();

  // display form field errors
  const errors = getErrorsLogIn({
    username,
    password,
  });

  renderErrorMessages(errors);

  if (!Object.keys(errors).length) {
    // make POST request to /auth/login
    const response = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.error === "Username does not exist.") {
      doesntExistModal.modal("show");
    }

    if (data.success) {
      window.location.replace("/dashboard");
    }
  }
};

loginForm.on("submit", handleLogin);
