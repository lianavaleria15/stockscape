// target chart elements
const stockAllocationCanvas = $(".stock-allocation-chart");
const leaderboardGraphCanvas = $("[name='leaderboard-graph-canvas']");
const allocationChartCanvas = $("[name='allocation-chart-canvas']");
const noDataPanel = $("#no-data");

const getLeaderboardGraphData = async () => {
  const id = leaderboardGraphCanvas.attr("id");

  const leaderboardGraphResponse = await fetch("api/portfolios/leaderboard", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  const leaderboardGraphData = await leaderboardGraphResponse.json();

  if (leaderboardGraphData.error === "Failed to get leaderboard data.") {
    // * render some error if leaderboard data doesn't return?
  }

  if (leaderboardGraphData.success) {
    renderLeaderboardGraph(leaderboardGraphData);
  }
};

const getPortfolioLabels = (portfolios) => {
  return portfolios.map((portfolio) => {
    return portfolio.portfolioName;
  });
};

const getPortfolioReturnValues = (portfolios) => {
  return portfolios.map((portfolio) => {
    return portfolio.yearEndReturn;
  });
};

const renderLeaderboardGraph = ({ data }) => {
  const leaderboardChartOptions = {
    type: "bar",
    data: {
      labels: getPortfolioLabels(data),
      datasets: [
        {
          label: "Return Value",
          data: getPortfolioReturnValues(data),
          backgroundColor: [
            "#FFFF31",
            "#EE34D2",
            "#29AB87",
            "#2243B6",
            "#5e47f7",
            "#FF8833",
            "#FF404C",
            "#0066FF",
            "#733380",
            "#6F2DA8",
            "#56887D",
            "#A6E7FF",
          ],
          borderWidth: 1,
          borderColor: "#777",
          hoverBorderWidth: 2,
        },
      ],
    },
  };

  const leaderboardChart = new Chart(
    leaderboardGraphCanvas,
    leaderboardChartOptions
  );
};

const renderNoDataPanel = () => {
  const element = `<div class="alert alert-primary text-center mt-5 mx-2" role="alert">
    <div>You haven't invested in any companies.</div> 
    <div><a href="/companies" class="btn btn-link">Invest Now</a></div>
    </div>`;
  noDataPanel.append(element);
};

// make POST request to our api in order to get the user portfolio data
const getAllocationChartData = async () => {
  const id = allocationChartCanvas.attr("id");

  const userAllocationChartResponse = await fetch(
    `/api/users/${id}/dashboard`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }
  );

  const allocationChartData = await userAllocationChartResponse.json();
  console.log(allocationChartData);

  if (allocationChartData.error === "Failed to get user dashboard data.") {
    // * render some error if user dashboard data doesn't return?
  }

  if (allocationChartData.success) {
    if (
      allocationChartData.data[0] &&
      allocationChartData.data[0].companies.length
    ) {
      renderAllocationChart(allocationChartData);
    } else {
      renderNoDataPanel();
    }
  }
};

const getCompanySymbols = (companies) => {
  return companies.map((company) => {
    return company.symbol;
  });
};

const getCompanyStockReturns = (companies) => {
  return companies.map((company) => {
    return company.stockReturn;
  });
};

// pass api data object to this function
const renderAllocationChart = ({ data }) => {
  const portfolio = data[0];

  const allocationChartOptions = {
    type: "doughnut",
    data: {
      // pull company symbols from user -> portfolio -> company in db
      labels: getCompanySymbols(portfolio.companies),
      datasets: [
        {
          label: "Return Value",
          data: getCompanyStockReturns(portfolio.companies),
          backgroundColor: [
            "#FFFF31",
            "#EE34D2",
            "#29AB87",
            "#2243B6",
            "#5e47f7",
            "#FF8833",
            "#FF404C",
            "#0066FF",
            "#733380",
            "#6F2DA8",
            "#56887D",
            "#A6E7FF",
          ],
          borderWidth: 1,
          borderColor: "#777",
          hoverBorderWidth: 2,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: `${portfolio.portfolioName} Stock Allocations`,
          font: {
            size: 25,
          },
        },
      },
    },
  };

  // render chart
  const allocationPieChart = new Chart(
    stockAllocationCanvas,
    allocationChartOptions
  );
};

$(window).on("load", getAllocationChartData);
$(window).on("load", getLeaderboardGraphData);
