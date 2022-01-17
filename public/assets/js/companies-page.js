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

//event listener on company modal
const addCompanyToBasket = (event) => {
  event.preventDefault();

  const numberShares = $("#number-shares").val();

  const portfolioName = $("#portfolio-name option:selected").val();

  const portfolioId = $("#portfolio-name option:selected").attr("id");

  const companyName = $("#company-name").text();
  console.log(companyName);

  const basketData = { companyName, numberShares };

  //initialise LS with portdfolioName
  //add to ls
  //portfolio name key to LS, value array of objects with (company name, nr shares)
};

//event on view more btn
companiesContainer.on("click", renderStockInfoModal);

//event on modal to add to stockbasket
$("#added-to-basket").on("submit", addCompanyToBasket);
