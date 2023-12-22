import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <header className="sh__header">
      <div className="container">
        <div className="sh__header-inner_content">
          <div className="sh__header-inner_content-brand">
            <Link to="/">SuperheroesAPP</Link>
          </div>
          <ul className="sh__header-inner_content-nav_links">
            <li>
              <Link to="/favorites">My favorites</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
