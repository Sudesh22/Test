import "./Dashboard.css";
import Graph from "./Graph/Graph";
import Guage from "./Graph/Gauge";
import React from "react";

export default function Dashboard({ baseUrl }) {
  const [chartData, setChartData] = React.useState({
    data: [],
  });
  // console.log(localStorage.getItem("userProfile"))

  // fetching the chart data
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/dashboard`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            access_token: localStorage.getItem("userProfile"),
          }),
        });
        const responseData = await response.json();
        const data = responseData.reverse();
        console.log(data); 

        setChartData({
          data: data,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // Fetch data initially
    fetchData();

    // Fetch data every second
    const intervalId = setInterval(fetchData, 5000);

    // Cleaning interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [baseUrl]);

  const component = chartData.data.map(parameter =>    
          <tr className="text">
            <td>{parameter[1]}</td>
            <td>{parameter[2]}</td>
          </tr>
  )

  return (
    <div>
      <p className="dashboard">Dashboard</p>
      <div className="dashboard-status">
        <div className="device-status">
          {/* <p>Status : {chartData.deviceStatus}</p> */}
        </div>
      </div>
      <div className="all-graph">
        <table className="text" >
          <tr>
            <th>Distance</th>
            <th>Motion</th>
          </tr>
          {component}
        </table>

      </div>
    </div>
  );
}
