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

// // make POST request to our api in order to get the user portfolio data
// const getAllocationChartData = async (event) => {
//   event.preventDefault();

//   // how do we get user id to pass to api request?
//   // const userId = ;

//   const userAllocationChartResponse = await fetch(
//     `/api/users/${userId}/dashboard`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // what do we pass in post body??
//       body: JSON.stringify({}),
//     }
//   );

//   const allocationChartData = await response.json();

//   // IS THIS NEEDED? API is only called when user logins in to their account and hits /dashboard endpoint
//   if (data.error === "User does not exist.") {
//     // render some error if user id doesn't exist?
//   }

//   if (data.success) {
//     renderAllocationChart(allocationChartData);
//   }
// };

const renderAllocationChart = (event) => {
  const id = event.currentTarget.id;

  console.log(`renderAllocationChart fn hit with id ${id}`);

  //    transform data pie chart options config
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
  const allocationPieChart = new Chart(
    stockAllocationCanvas,
    allocationChartOptions
  );
};

allocationChartCard.on("click", renderAllocationChart);
$(document).ready(console.log("window ready"));
