// target chart elements
const stockAllocationCanvas = $(".stock-allocation-chart");
const leaderboardCanvas = $(".leaderboard-graph");
const allocationChartCard = $("[name='allocation-chart-card']");

// const leaderboardChartOptions = {
//   type: "bar",
//   data: {
//     // pull top 10 usernames from db by total portfolio return value, sort highest to lowest
//     labels: [
//       "My Portfolio, kayleriegerpatton",
//       "Retirement Investments, tigerbath",
//       "YOLO Savings, conorKELLY",
//       "Play it Safe Stocks, lianavaleria15",
//     ],
//     datasets: [
//       {
//         label: "Return Value",
//         // pull from user -> portfolio in db, sort highest to lowest
//         data: [20100.56, 40000.0, 53400.27, 100.89],
//         // set these to the theme colors
//         backgroundColor: ["#95f9e3ff", "#69ebd0ff", "#758173ff", "#cb904dff"],
//         borderWidth: 1,
//         borderColor: "#777",
//         hoverBorderWidth: 2,
//         // hoverBorderColor: "#000",
//       },
//     ],
//   },
//   options: {
//     title: {
//       display: true,
//       text: "Stock Allocations",
//       fontSize: 25,
//     },
//   },
// };

// const leaderboardChart = new Chart(leaderboardCanvas, leaderboardChartOptions);

// make POST request to our api in order to get the user portfolio data
const getAllocationChartData = async () => {
  //   console.log("User id:", allocationChartCard.attr('id'));
  const id = allocationChartCard.attr("id");

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
  console.log("renderAllocationChart fn, data:", data);

  const portfolio = data[0];

  // transform data pie chart options config:
  //   find portfolio with highest summed stockReturns value(maybe do this in controller instead)
  // map through portfolios; for each portfolio, return the sum of the items with specific index number within companies array and the stock symbol

  const getCompanyNames = (companies) => {
    return companies.map((company) => {
      return company.name;
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
      labels: getCompanyNames(portfolio.companies),
      datasets: [
        {
          label: "Return Value",
          // pull from user -> portfolio in db
          data: getCompanyStockReturns(portfolio.companies),
          // set these to the theme colors
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
          // hoverBorderColor: "#000",
        },
      ],
    },
    options: {
      // TITLE IS NOT DISPLAYING
      title: {
        display: true,
        text: `${portfolio.portfolioName} Stock Allocations`,
        fontSize: 25,
      },
    },
  };

  // render chart
  const allocationPieChart = new Chart(
    stockAllocationCanvas,
    allocationChartOptions
  );
};

// allocationChartCard.on("click", getAllocationChartData);
// $(document).load(getAllocationChartData);
$(window).on("load", getAllocationChartData);
