import "./Charts.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Charts({ history }) {
  const temperature = history.find((sensor) => sensor.title === "Temperature");

  const humidity = history.find((sensor) => sensor.title === "Humidity");

  const chartData = temperature.data.map((value, index) => ({
    reading: index + 1,
    temperature: value,
    humidity: humidity.data[index],
  }));

  const pressure = history.find((sensor) => sensor.title === "Pressure");

  const pressureData = pressure.data.map((value, index) => ({
    reading: index + 1,
    pressure: value,
  }));

  return (
    <section className="charts-section">
      <div className="chart-card">
        <div className="chart-header">
          <div>
            <h2>Environmental Trends</h2>
            <p>Live temperature and humidity readings</p>
          </div>

          <span className="live-indicator">● LIVE</span>
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.08)"
              />

              <XAxis dataKey="reading" stroke="#718096" />

              <YAxis stroke="#718096" />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="temperature"
                name="Temperature"
                stroke="#4fd1ff"
                strokeWidth={3}
                dot={false}
                isAnimationActive={true}
              />

              <Line
                type="monotone"
                dataKey="humidity"
                name="Humidity"
                stroke="#7c83ff"
                strokeWidth={3}
                dot={false}
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card pressure-chart" id="reports">
          <div className="chart-header">
            <div>
              <h2>Pressure Monitoring</h2>
              <p>Recent atmospheric pressure readings</p>
            </div>
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pressureData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.08)"
                />

                <XAxis dataKey="reading" stroke="#718096" />

                <YAxis stroke="#718096" />

                <Tooltip />

                <Bar
                  dataKey="pressure"
                  name="Pressure"
                  fill="#4fd1ff"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Charts;
