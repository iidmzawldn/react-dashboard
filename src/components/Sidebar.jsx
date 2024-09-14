import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.png";

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="/" className="brand-link">
        <img src={Logo} alt="RSU Logo" className="brand-image img-circle" />
        <span className="brand-text font-weight-light">
          <b>RS Djuansih</b>
        </span>
      </a>
      <div className="sidebar">
        <div className="form-inline mt-2">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <NavLink
                to="/"
                className={(navActive) =>
                  navActive.isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={(navActive) =>
                  navActive.isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fas fa-th" />
                <p>About</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/data"
                className={(navActive) =>
                  navActive.isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fas fa-folder" />
                <p>Data</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
