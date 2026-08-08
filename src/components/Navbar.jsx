import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  useEffect(() => {
    if (!showNotifications) return;

    const timer = setTimeout(() => {
      setShowNotifications(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showNotifications]);
  
  const [showProfile, setShowProfile] = useState(false);
  useEffect(() => {
  if (!showProfile) return;

  const timer = setTimeout(() => {
    setShowProfile(false);
  }, 2000);

  return () => clearTimeout(timer);
}, [showProfile]);

  return (
    <header className="navbar">
      <div className="logo">
        <h2>⚡ NeoPulse</h2>
        <p>Real-Time IoT Monitoring Platform</p>
      </div>

      <div className="navbar-right">
        <div className="system-status">
          <span className="status-dot"></span>
          System Online
        </div>

        <div className="nav-action">
          <button
            className="icon-button"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfile(false);
            }}
          >
            🔔
            <span className="notification-badge">2</span>
          </button>

          {showNotifications && (
            <div className="dropdown notification-dropdown">
              <h3>Notifications</h3>

              <div className="notification">
                <span>🟢</span>
                <div>
                  <strong>System Online</strong>
                  <p>All sensors are responding normally.</p>
                </div>
              </div>

              <div className="notification">
                <span>🟡</span>
                <div>
                  <strong>Pressure Updated</strong>
                  <p>Latest reading received successfully.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="nav-action">
          <button
            className="profile-button"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
            }}
          >
            👤
            <span>Priyanshu Kashyap</span>
          </button>

          {showProfile && (
            <div className="dropdown profile-dropdown">
              <h3>Priyanshu Kashyap</h3>

              <p className="profile-role">Dashboard Administrator</p>

              <div className="profile-status">
                <span className="status-dot"></span>
                Online
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
