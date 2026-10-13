import { Link, useLocation } from "react-router-dom";
import logo from "../high-level-description-a-gaming-style-pe_kSHGRBeRX5ypAIKWIQF9gw_xAbyZruiQlmuGTum6M549Q_cover.jpg";
import { useEffect, useState } from "react";

function Navbar({ mode, togglemode }) {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="container">
      <nav className="portnav" aria-label="Main navigation">
        <img className="weblogo" src={logo} alt="Portfolio logo" />
        <ul
          id="primary-navigation"
          className={`nav-links${menuOpen ? " is-open" : ""}`}
        >
          <li>
            <Link
              className={`nav-link${pathname === "/" ? " active" : ""}`}
              aria-current={pathname === "/" ? "page" : undefined}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link${pathname === "/Project" ? " active" : ""}`}
              aria-current={pathname === "/Project" ? "page" : undefined}
              to="/Project"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link${pathname === "/skils" ? " active" : ""}`}
              aria-current={pathname === "/skils" ? "page" : undefined}
              to="/skils"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link${pathname === "/Contact" ? " active" : ""}`}
              aria-current={pathname === "/Contact" ? "page" : undefined}
              to="/Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          className={`theme-toggle${mode === "dark" ? " dark" : ""}`}
          type="button"
          aria-label="Toggle dark mode"
          aria-pressed={mode === "dark"}
          onClick={togglemode}
        >
          <span className="theme-icon">☀️</span>
          <span className="toggle-circle"></span>
          <span className="theme-icon">🌙</span>
        </button>
        <button
          className={`burger${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
