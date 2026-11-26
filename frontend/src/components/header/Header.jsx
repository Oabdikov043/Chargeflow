import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import "./Header.css";

const navItems = [
  { path: "/", label: "Dashboard" },
  { path: "/chargers", label: "Chargers" },
  { path: "/requests", label: "Requests" },
  { path: "/sessions", label: "Sessions" },
  { path: "/simulation", label: "Simulation" },
  { path: "/reports", label: "Reports" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="cf-header">
      <div className="cf-header-container">
        <Link to="/" className="cf-logo">
          <span className="cf-logo-icon">⚡</span>
          <span>ChargeFlow</span>
        </Link>

        <button
          type="button"
          className="cf-menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`cf-nav ${menuOpen ? "cf-nav-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `cf-nav-link ${isActive ? "cf-active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="cf-header-right">
          <span className="cf-demo-badge">Demo</span>
          <span className="cf-avatar" aria-label="Demo user">
            U
          </span>
        </div>
      </div>
    </header>
  );
}
