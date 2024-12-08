import React, { useState } from "react";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="Brand Logo" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Regular Navigation Links (Visible on Desktop) */}
        <ul className="nav-links">
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="login-btn">Login</button>
      </nav>

      {/* Sidebar Navigation for Mobile */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="login-btn">Login</button>
      </div>

      {/* Overlay (Clicking closes the sidebar) */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </header>
  );
};

export default Navigation;
