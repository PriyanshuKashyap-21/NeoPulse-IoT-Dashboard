import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import useSensorData from "./hooks/useSensorData";
import Charts from "./components/Charts";

function App() {
  const { sensors, history } = useSensorData();

  return (
    <div className="app">
      <Navbar />

      <div className="dashboard" id="dashboard">
        <Sidebar />

        <div id="dashboard"></div>

        <main className="content">
          <h1>Dashboard Overview</h1>

          <div className="cards" id="sensors">
            {sensors.map((sensor) => (
              <StatCard
                key={sensor.id}
                title={sensor.title}
                value={`${sensor.value}${sensor.unit}`}
                change={sensor.change}
                icon={sensor.icon}
                status={sensor.status}
              />
            ))}
          </div>

          <div id="analytics">
            <Charts history={history} />
          </div>

          <div className="settings-section" id="settings">
            <h2>Dashboard Settings</h2>
            <p>Monitoring preferences and dashboard configuration.</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
