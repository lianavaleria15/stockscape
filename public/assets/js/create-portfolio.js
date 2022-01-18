// TARGET UI ELEMENTS
const portfolioForm = $("#portfolio-form");

const renderErrorMessages = (errors) => {
  const fields = ["portfolio"];
  fields.forEach((field) => {
    const errorDiv = $(`#${field}-error`);

    if (errors[field]) {
      errorDiv.text(errors[field]);
    } else {
      errorDiv.text("");
    }
  });
};

const handleCreatePortfolio = async (event) => {
  //   prevent form default
  event.preventDefault();

  // get post body from form fields
  const portfolioName = $("#portfolio-title").val();
  console.log(portfolioName);

  // display form field errors
  const errors = getErrorsPortfolio({
    portfolioName,
  });

  renderErrorMessages(errors);

  // make POST request to /auth/login
  const response = await fetch("/api/portfolios/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ portfolioName }),
  });

  const data = await response.json();

  if (data.success) {
    console.log("hooray");
  }
};

const getErrorsPortfolio = ({ portfolioName }) => {
  const errors = {};

  if (!portfolioName) {
    const error = (errors.portfolioName = "Invalid portfolio name.");
    console.log(error);
  }

  return errors;
};

portfolioForm.on("submit", handleCreatePortfolio);
