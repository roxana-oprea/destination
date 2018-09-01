import React, {Component} from 'react';
import {Nav, NavItem, NavLink, Button} from 'reactstrap';
import logo from '../logo.png';

class HeaderItem extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="wrapper">
        <img src={logo} className="logo-image" alt="Logo"/>
        <Nav className="flex-nav">
          <NavItem>
            <NavLink active href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Rooms</NavLink>
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
  }
}

export default HeaderItem;
