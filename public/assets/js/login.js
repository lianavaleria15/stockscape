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
