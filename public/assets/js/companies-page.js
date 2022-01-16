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

companiesContainer.on("click", renderStockInfoModal);

//event listener on company modal
const addCompanyToBasket = (event) => {
  const target = event.target;

  if ($(target).is("#added-to-basket")) {
    //relocate to edit-portfolio page
  }
};

//event on modal to add to stockbasket
companyModal.on("click", addCompanyToBasket);
