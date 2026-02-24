import { NavLink } from "react-router-dom";

export default function NavTabs() {
  // NavLink can apply active styles automatically based on the current URL.
  // This is cleaner than manually reading useLocation() and comparing strings.

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink to="/" end className={getLinkClass}>
          Home
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/about" className={getLinkClass}>
          About
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/blog" className={getLinkClass}>
          Blog
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/contact" className={getLinkClass}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
}
