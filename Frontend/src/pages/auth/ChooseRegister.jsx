import React from "react";
import { Link } from "react-router-dom";
import "../../styles/auth-shared.css";

// Example SVG icons; replace with your actual logo assets or <img> tags if available
const UserIcon = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a7 7 0 0 1 13 0" />
  </svg>
);

const SellerIcon = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 3v4M8 3v4M2 11h20" />
  </svg>
);

const ChooseRegister = () => {
  return (
    <div
      className="auth-page-wrapper"
      style={{
        maxWidth: "400px",
        margin: "2rem auto",
        padding: "0 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Company Logo */}
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        {/* Replace below svg/image with your actual logo */}
        <img
          src="/company-logo-l.png"
          alt="Company Logo"
          style={{ width: "120px", height: "auto", objectFit: "contain" }}
        />
      </div>

      <div
        className="auth-card"
        role="region"
        aria-labelledby="choose-register-title"
        style={{
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgb(0 0 0 / 0.1)",
        }}
      >
        <header style={{ textAlign: "center" }}>
          <h1
            id="choose-register-title"
            className="auth-title"
            style={{ marginBottom: "0.5rem" }}
          >
            Register
          </h1>
          <p
            className="auth-subtitle"
            style={{ marginBottom: "1rem", color: "#555" }}
          >
            Pick your flavor adventure: indulge as a user or inspire as a
            seller.
          </p>
        </header>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Link
            to="/user/register"
            className="auth-submit"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              background: "var(--color-surface-alt)",
              color: "var(--color-text)",
              border: "1px solid var(--color-border)",
              justifyContent: "center",
              padding: "5px",
              borderRadius: "6px",
            }}
          >
            <UserIcon />
            Register as User
          </Link>

          <Link
            to="/food-partner/register"
            className="auth-submit"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              background: "var(--color-surface-alt)",
              color: "var(--color-text)",
              border: "1px solid var(--color-border)",
              justifyContent: "center",
              padding: "5px",
              borderRadius: "6px",
            }}
          >
            <SellerIcon />
            Register as Seller
          </Link>
        </div>
        <div
          className="auth-alt-action"
          style={{ marginTop: "2rem", textAlign: "center" }}
        >
          Already have an account? <Link to="/user/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseRegister;
