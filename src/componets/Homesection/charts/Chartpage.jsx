// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";

// function Chartme() {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Wave",
//         data: [],
//         fill: false,
//         borderColor: "blue",
//         tension: 0.1,
//       },
//     ],
//   });

//   useEffect(() => {
//     generateChartData();
//   }, []);

//   const generateChartData = () => {
//     const labels = [];
//     const data = [];

//     // Generate synthetic data points based on a combination of cosine and sine functions
//     for (let i = 0; i <= 360; i += 10) {
//       const radians = (i * Math.PI) / 180;
//       const y = Math.cos(radians) * Math.sin(radians) * 50 + 50;
//       labels.push(i);
//       data.push(y);
//     }

//     setChartData({
//       labels: labels,
//       datasets: [
//         {
//           ...chartData.datasets[0],
//           data: data,
//         },
//       ],
//     });
//   };

//   return (
//     <div className="bg-black w-full h-full text-white">
//       <h1>Crypto Market Cap</h1>
//       <div style={{ width: "80%", margin: "auto" }}>
//         <Line data={chartData} />
//       </div>
//     </div>
//   );
// }

// export default Chartme;
