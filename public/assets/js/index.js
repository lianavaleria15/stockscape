// TARGET UI ELEMENTS
// For AUTH interactions
const signupForm = $("#signup-form");
const loginForm = $("#login-form");
const logoutBtn = $("#logout-btn");

const handleLogin = async (event) => {
  //   prevent form default
  event.preventDefault();

  // get post body from form fields
  const email = $("#email").val();
  const password = $("#password").val();

  // make POST request to /auth/login
  const response = await fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (data.success) {
    console.log("Logged in");
    // direct to dashboard
    window.location.replace("/dashboard");
  }
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

  // confirm passwords match
  if (password !== confirmPassword) {
    //  DISPLAY ERROR MESSAGE
    // console.log("passwords don't match");
  }

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

  //   if success response, direct to login page
  if (data.success) {
    window.location.replace("/login");
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
signupForm.on("click", handleSignup);
loginForm.on("click", handleLogin);
logoutBtn.on("click", handleLogout);
