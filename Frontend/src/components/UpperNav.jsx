import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/upper-nav.css"; // Create matching CSS for styling

const UpperNav = () => {
  const navigate = useNavigate();

  // Calls your backend logout route, then redirects (adjust as needed)
  const handleLogout = async () => {
    try {
      await fetch("/user/logout", {
        method: "GET",
        credentials: "include",
      });
      navigate("/user/login"); // Adjust to your login route
    } catch (error) {
      // Optionally handle error feedback
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="upper-navbar" role="banner" aria-label="Top">
      <div className="upper-navbar__left">
        {/* Place your logo image file in /public or /assets as needed */}
        <img
          src="/logo.png"
          alt="Company Logo"
          className="upper-navbar__logo"
          style={{ marginLeft: "10px" }}
        />
        <span className="upper-navbar__company-name">
          <strong>ReelBite Hub</strong>
        </span>
      </div>
      <button
        className="upper-navbar__logout-btn"
        onClick={handleLogout}
        aria-label="Log out"
      >
        Log Out
      </button>
    </header>
  );
};

export default UpperNav;
