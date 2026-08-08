import { useEffect, useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [activeSection, setActiveSection] = useState(
    window.location.hash || "#dashboard",
  );

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#dashboard");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);

    if (section === "#dashboard") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      document.body.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      const content = document.querySelector(".content");

      if (content) {
        content.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <aside className="sidebar">
      <a
        href="#dashboard"
        className={`menu-item ${
          activeSection === "#dashboard" ? "active" : ""
        }`}
        onClick={() => handleNavigation("#dashboard")}
      >
        Dashboard
      </a>

      <a
        href="#sensors"
        className={`menu-item ${activeSection === "#sensors" ? "active" : ""}`}
        onClick={() => handleNavigation("#sensors")}
      >
        Sensors
      </a>

      <a
        href="#analytics"
        className={`menu-item ${
          activeSection === "#analytics" ? "active" : ""
        }`}
        onClick={() => handleNavigation("#analytics")}
      >
        Analytics
      </a>

      <a
        href="#reports"
        className={`menu-item ${activeSection === "#reports" ? "active" : ""}`}
        onClick={() => handleNavigation("#reports")}
      >
        Reports
      </a>

      <a
        href="#settings"
        className={`menu-item ${activeSection === "#settings" ? "active" : ""}`}
        onClick={() => handleNavigation("#settings")}
      >
        Settings
      </a>
    </aside>
  );
}

export default Sidebar;
