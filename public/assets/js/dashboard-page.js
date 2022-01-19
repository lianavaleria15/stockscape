// target chart elements
const stockAllocationCanvas = $(".stock-allocation-chart");
const leaderboardGraphCanvas = $("[name='leaderboard-graph-canvas']");
const allocationChartCanvas = $("[name='allocation-chart-canvas']");

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
          //   data: getPortfolioReturnValues(data),
          backgroundColor: [
            "#95f9e3ff",
            "#69ebd0ff",
            "#758173ff",
            "#cb904dff",
            "#5e47f7",
            "#241e4eff",
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

  if (allocationChartData.error === "Failed to get user dashboard data.") {
    // * render some error if user dashboard data doesn't return?
  }

  if (allocationChartData.success) {
    renderAllocationChart(allocationChartData);
  }
};

// pass api data object to this function
const renderAllocationChart = ({ data }) => {
  console.log(data);
  //   const portfolio = data[0];

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

  const allocationChartOptions = {
    type: "doughnut",
    data: {
      // pull company symbols from user -> portfolio -> company in db
      labels: getCompanySymbols(data),
      datasets: [
        {
          label: "Return Value",
          data: getCompanyStockReturns(data),
          backgroundColor: [
            "#95f9e3ff",
            "#69ebd0ff",
            "#758173ff",
            "#cb904dff",
            "#5e47f7",
            "#241e4eff",
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
          text: `${data.portfolioName} Stock Allocations`,
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
