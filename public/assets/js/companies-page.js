//get view more btn
const companiesContainer = $("#companies-container");

//get company modal
const companyModal = $("#company-card-modal");

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
  const target = event.target;

  if ($(target).is("#added-to-basket")) {
    //relocate to edit-portfolio page
    renderPortfolioPage();
  }
};

//event on view more btn
companiesContainer.on("click", renderStockInfoModal);

//event on modal to add to stockbasket
companyModal.on("click", addCompanyToBasket);
