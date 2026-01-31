import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import {
  Introduction,
  Projects,
  Skills,
  Notable,
  Teaching,
  Resume,
  Contacts,
} from "../sections";
import { ROUTES, NAV_ITEMS } from "../../constants";
import "../../styles/App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Content() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="Content">
      <ScrollToTop />
      <div className="TopPanel">
        <div className="NameMenu">
          <a href="http://resume.lucas-g.ca" rel="noopener noreferrer">
            Lucas G
          </a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={menuOpen ? "show" : ""}>
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeMenu}
                end={item.path === ROUTES.HOME}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="MainContent">
        <Routes>
          <Route path={ROUTES.INTRODUCTION} element={<Introduction />} />
          <Route path={ROUTES.PROJECTS} element={<Projects />} />
          <Route path={ROUTES.HACKATHON} element={<Notable />} />
          <Route path={ROUTES.TEACHING} element={<Teaching />} />
          <Route path={ROUTES.DOCUMENTS} element={<Resume />} />
          <Route path={ROUTES.SKILLS} element={<Skills />} />
          <Route path={ROUTES.CONTACT} element={<Contacts />} />
        </Routes>
      </div>
    </div>
  );
}

export default Content;
