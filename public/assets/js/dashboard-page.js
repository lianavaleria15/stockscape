// target chart elements
const stockAllocationCanvas = $(".stock-allocation-chart");
const leaderboardCanvas = $(".leaderboard-graph");

// pie chart config options
const allocationChartOptions = {
  type: "doughnut",
  data: {
    // pull company symbols from user -> portfolio -> company in db
    labels: ["$TSLA", "$GME", "$GOOGL", "$AMZN", "$FB", "$AMC"],
    datasets: [
      {
        label: "Return Value",
        // pull from user -> portfolio in db
        data: [200000, 100000, 400000, 50000, 200000, 50000],
        // set these to the theme colors
        backgroundColor: ["#95f9e3ff", "#69ebd0ff", "#758173ff", "#cb904dff"],
        borderWidth: 1,
        borderColor: "#777",
        hoverBorderWidth: 2,
        // hoverBorderColor: "#000",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Stock Allocations",
      fontSize: 25,
    },
  },
};

// render chart
const renderAllocationPieChart = new Chart(
  stockAllocationCanvas,
  allocationChartOptions
);

const leaderboardChartOptions = {
  type: "bar",
  data: {
    // pull top 10 usernames from db by total portfolio return value, sort highest to lowest
    labels: [
      "My Portfolio, kayleriegerpatton",
      "Retirement Investments, tigerbath",
      "YOLO Savings, conorKELLY",
      "Play it Safe Stocks, lianavaleria15",
    ],
    datasets: [
      {
        label: "Return Value",
        // pull from user -> portfolio in db, sort highest to lowest
        data: [20100.56, 40000.0, 53400.27, 100.89],
        // set these to the theme colors
        backgroundColor: ["#95f9e3ff", "#69ebd0ff", "#758173ff", "#cb904dff"],
        borderWidth: 1,
        borderColor: "#777",
        hoverBorderWidth: 2,
        // hoverBorderColor: "#000",
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Stock Allocations",
      fontSize: 25,
    },
  },
};

const leaderboardChart = new Chart(leaderboardCanvas, leaderboardChartOptions);

$(document).ready(renderAllocationPieChart);
$(document).ready(leaderboardChart);
