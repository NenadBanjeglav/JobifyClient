/* eslint-disable react/prop-types */
import { useDashboardContext } from "../pages/DashboardLayout";
import { links } from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => (
        <NavLink
          key={link.text}
          to={link.path}
          className="nav-link"
          onClick={isBigSidebar ? null : toggleSidebar}
          end
        >
          <span className="icon">{link.icon}</span>
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
