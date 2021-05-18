import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavLink className="navbar-item" activeClassName="is-active" to="/">
              Display Lists
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/addStudent"
            >
              Add Student
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/updateStudent"
            >
              Update Student
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/updateTeacher"
            >
              Update Teacher
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/addTeacher"
            >
              Add Teacher
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/loginForm"
            >
              Login
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/signupForm"
            >
              Signup
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
