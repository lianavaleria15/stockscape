//get view more btn
const companiesContainer = $("#companies-container");

const renderStockInfoModal = (event) => {
  const target = event.target;

  if ($(target).is("button")) {
    const id = $(target).attr("id");

    $(`[data-id=${id}]`).modal("show");
  }
};

const renderPortfolioPage = () => {
  console.log("hooray");
};

//initialize local storage
const initializeLocalStorage = () => {
  //get portfolios from LS
  const basketPortfolios = JSON.parse(localStorage.getItem("portfolios")) ?? [];

  //set portfolios to LS
  localStorage.setItem("portfolios", JSON.stringify(basketPortfolios));

  return basketPortfolios;
};

//event listener on company modal
const addCompanyToPortfolio = (event) => {
  event.preventDefault();

  initializeLocalStorage();

  const numberShares = $("#number-shares").val();

  const portfolioName = $("#portfolio-name option:selected").val();

  const portfolioId = $("#portfolio-name option:selected").attr("id");

  const companyName = $("#company-name").text();

  //store new portfolio data
  const newPortfolioToBasket = { companyName, numberShares };

  //push new portfolio data to portfolio array
  basketPortfolios.push(newPortfolioToBasket);

  //add to LS
  localStorage.setItem("portfolios", JSON.stringify(basketPortfolios));
  //portfolio name key to LS, value array of objects with (company name, nr shares)
};

//event on view more btn
companiesContainer.on("click", renderStockInfoModal);

//event on modal to add to stockbasket
$("#added-to-basket").on("submit", addCompanyToPortfolio);
