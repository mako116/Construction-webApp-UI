import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../../api";
import { Line } from "react-chartjs-2";

const CoinInfo = ({ coin, currency }) => {
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);

  const fetchHistoricData = async () => {
    try {
      const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
      setHistoricData(data.prices);
    } catch (error) {
      console.error("Error fetching historical data", error);
    }
  };

  useEffect(() => {
    if (coin) {
      fetchHistoricData();
    }
  }, [coin, days, currency]);

  // Prepare data for area chart
  const chartData = {
    labels: historicData.map((point) => {
      let date = new Date(point[0]);
      return days === 1 ? date.toLocaleTimeString() : date.toLocaleDateString();
    }),
    datasets: [
      {
        data: historicData.map((point) => point[1]),
        label: `Price (Past ${days} Days) in ${currency}`,
        backgroundColor: "rgba(238, 188, 29, 0.2)", // Background color for area
        borderColor: "transparent", // Transparent border to hide lines
      },
    ],
  };

  return (
    <div className="w-[300px]">
      {historicData.length > 0 && (
        <>
          <Line
            data={{
              labels: historicData.map((point) => {
                let date = new Date(point[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),
              datasets: [
                {
                  data: historicData.map((point) => point[1]),
                  label: `Price (Past ${days} Days) in ${currency}`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
          <div
            style={{
              display: "flex",
              marginTop: 20,
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {/* Add buttons or other components here */}
          </div>
        </>
      )}
      {/* Render area chart */}
      {historicData.length > 0 && <Line data={chartData} />}
    </div>
  );
};

export default CoinInfo;
