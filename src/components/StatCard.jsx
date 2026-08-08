import "./StatCard.css";

function StatCard({ title, value, change, icon, status }) {
  return (
    <div className="stat-card">

      <div className="card-header">

        <div>
          <h3>{title}</h3>
          <p className="status">{status}</p>
        </div>

        <div className="icon">
          {icon}
        </div>

      </div>

      <h2>{value}</h2>

      <p className="change">
        {change}
      </p>

      <div className="sparkline">

        ▁▂▃▄▅▆▅▄▃

      </div>

    </div>
  );
}

export default StatCard;