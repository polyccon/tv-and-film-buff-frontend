import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
import "../Navbar/Navbar.css";

export const NavbarLink = withRouter(
  ({ match, history, url, state, children, title, className, navLinkClass }) => {
    let pathname = history.location.pathname;
    if (!pathname) {
      pathname = "/home";
    }
    className = classNames(className, {
      "App-header-bold": url.includes(pathname),
    });
    return (
      <Button className={`${className}`}>
        <NavLink
          title={title}
          style={{ textDecoration: 'none' }}
          to={{
            pathname: `${url}`,
            state: state,
          }}
          className={navLinkClass}
        >

          {children}

        </NavLink>
      </Button>

    );
  }
);
