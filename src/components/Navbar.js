import { Link, NavLink } from "react-router-dom";
import logo from "../assets/media/ThoughtLogo_PNG1.png";

const Navbar = () => {
  return (
    <nav className="navigation">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Home
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <a
          href="./files/2023 resume v1.pdf"
          className="resume"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to resume"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
