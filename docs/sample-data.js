const ctx = document.getElementById("user-allocation").getContext("2d");
const chartChoiceDiv = $("#button-div");

Chart.defaults.global.defaultFontFamily = "Helvetica";
// Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = "black";

const allocationPieChart = new Chart(ctx, {
  // is it possible to change the chart layout based on user input?
  type: "pie",
  data: {
    // pull company symbols from user -> portfolio -> company in db
    labels: ["$TSLA", "$GME", "$GOOGL", "$AMZN", "$FB", "$AMC"],
    datasets: [
      {
        label: "Stock Allocation",
        // pull from user -> portfolio in db
        data: [200000, 100000, 400000, 50000, 200000, 50000],
        // set these to the theme colors
        backgroundColor: ["green", "blue", "red", "yellow", "pink", "purple"],
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
      text: "Portfolio Allocation",
      fontSize: 25,
    },
  },
});

const handleChartTypeSelection = (event) => {
  const target = event.target;

  if ($(target).is("button")) {
    const data = $(target).attr("data-type");
    console.log(data);
    return data;
  }
};

chartChoiceDiv.on("click", handleChartTypeSelection);
