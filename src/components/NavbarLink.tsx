import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";
import classNames from "classnames";
import "../Navbar/Navbar.css";

interface NavbarLinkProps extends RouteComponentProps {
  url: string;
  state: {};
  children: React.ReactNode; 
  title: string;
  className: string;
  navLinkClass: string;
}

export const NavbarLink = withRouter(
  ({ match, history, url, state, children, title, className, navLinkClass }: NavbarLinkProps) => {
    let pathname = history.location.pathname;
    if (!pathname) {
      pathname = "/home";
    }
    className = classNames(className, {
      "App-header-bold": url.includes(pathname),
    });
    return (
      <Button className= {`${className}`}>
      <Link
              title={title}
              style = {{ textDecoration: 'none' }}
              to = {{
                pathname: `${url}`,
                state: state,
              }}
            className = { navLinkClass }>

          { children }
      </Link>
      </Button>
    );    
  }
);
