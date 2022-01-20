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
    const error = (errors.password = "Invalid password.");
    console.log(error);
  }

  if (!username) {
    const error = (errors.username = "Invalid username.");
    console.log(error);
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
};

loginForm.on("submit", handleLogin);
