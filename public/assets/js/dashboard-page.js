// const Chart = require("chart.js");

// target chart element
const chartCanvas = $(".stock-allocation-chart");
// const chartChoiceDiv = $("#button-div");

// Chart.defaults.global.defaultFontFamily = "Helvetica";
// Chart.defaults.global.defaultFontColor = "black";
// Chart.defaults.global.defaultFontSize = 18;

// render chart
const allocationPieChart = new Chart(chartCanvas, {
  type: "pie",
  data: {
    // pull company symbols from user -> portfolio -> company in db
    labels: ["$TSLA", "$GME", "$GOOGL", "$AMZN", "$FB", "$AMC"],
    datasets: [
      {
        label: "Return Value",
        // pull from user -> portfolio in db
        data: [200000, 100000, 400000, 50000, 200000, 50000],
        // set these to the theme colors
        backgroundColor: [
          "#95f9e3ff",
          "#69ebd0ff",
          "#758173ff",
          "#cb904dff",
          "#69ebd0ff",
          "#758173ff",
        ],
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
});

$(document).ready(allocationPieChart);
$(document).ready(console.log("window loaded"));
