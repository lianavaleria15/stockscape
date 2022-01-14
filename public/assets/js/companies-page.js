//get view more btn
const companiesContainer = $("#companies-container");

const renderStockInfoModal = (event) => {
  const target = event.target;

  if ($(target).is("button")) {
    const id = $(target).attr("id");

    $(`[data-id=${id}]`).modal("show");
  }
};

companiesContainer.on("click", renderStockInfoModal);
