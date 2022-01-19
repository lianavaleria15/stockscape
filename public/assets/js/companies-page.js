//get view more btn
const companiesContainer = $("#companies-container");

const constructPortfolioOptions = (portfolios) => {
  return portfolios
    .map((portfolio) => {
      return `<option id="${portfolio.id}" value="${portfolio.name}">${portfolio.name}</option>`;
    })
    .join("");
};
const constructCompanyModal = ({ company, portfolios }) => {
  return `<div class="modal fade" id="company-card-modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-success text-white">
          <h5 class="modal-title" id="company-name">${company.name}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h6 class="card-subtitle">${company.sector}</h6>
          <p>${company.symbol}</p>
          <p>January 2021 share price: <span>${company.janPrice}</span></p>
          <p>${company.company_summary}</p>
        </div>
        <form id="add-company-form">
          <div class="modal-footer d-flex justify-content-between">
            <div>
              <label for="number-shares"> Number of shares:</label>
              <input type="text" name="" id="number-shares" />
            </div>
            <div>
              <label for="portfolio-name">Select a portfolio:</label>
              <select name="portfolio-name" id="portfolio-name">
                ${constructPortfolioOptions(portfolios)}
              </select>
            </div>
            <div>
              <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Add to
                portfolio</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>`;
};

const renderStockInfoModal = async (event) => {
  const target = event.target;

  if ($(target).is('button[name="view-company"]')) {
    if ($("#company-card-modal").length) {
      $("#company-card-modal").remove();
    }

    const companyId = $(target).attr("id");

    // make API request
    const response = await fetch(`/api/companies/${companyId}`);

    const { data } = await response.json();

    const companyModal = constructCompanyModal(data);

    companiesContainer.append(companyModal);
    $("#company-card-modal").modal("show");
    $("#add-company-form").on("submit", addCompanyToPortfolio);
  }
};

//event listener on company modal
const addCompanyToPortfolio = (event) => {
  event.preventDefault();

  const numberShares = $("#number-shares").val();

  const portfolioName = $("#portfolio-name option:selected").val();

  const portfolioId = $("#portfolio-name option:selected").attr("id");

  const companyName = $("#company-name").text();

  // //store new portfolio data
  // const newPortfolioToBasket = { companyName, numberShares };

  console.log(numberShares);

  $("#company-card-modal").on("hide.bs.modal", () => {
    console.log("closing modal");
  });
};

//event on view more btn
companiesContainer.on("click", renderStockInfoModal);

//event on modal to add to stockbasket
// const modalId = $("#company-card-modal").data("id");
// $("#add-company-form").on("submit", addCompanyToPortfolio);
