import React from 'react';
import {Nav, NavItem, NavLink, Button} from 'reactstrap';
import {NavLink as RouterLink} from 'react-router-dom';
import logo from './logo.png';

const HeaderItem = () => (
  <div className="wrapper">
    <img src={logo} className="logo-image" alt="Logo"/>
    <Nav className="flex-nav">
      <NavItem>
        <NavLink tag={RouterLink} to="/" exact>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={RouterLink} to="/about">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Blog</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Features</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Events</NavLink>
      </NavItem>
      <NavItem className="d-none d-xl-none">
        <NavLink href="#">Events</NavLink>
      </NavItem>
    </Nav>
    <Button className="sign-in-button">Sign In</Button>
  </div>
);

export default HeaderItem;
