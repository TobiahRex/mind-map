/* eslint-disable lines-between-class-members, prefer-destructuring, react/prop-types, no-lonely-if, react/jsx-curly-brace-presence */

import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import HeaderLinks from './HeaderLinks';
import dashboardRoutes from '../../routes/Dashboard';
import logo from '../../assets/images/calixfer-long-logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    // this.getBrand = this.getBrand.bind(this);
    // this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false
    };
  }
  mobileSidebarToggle = e => {
    const { sidebarExists } = this.state;

    if (sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle('nav-open');

    const node = document.createElement('div');
    node.id = 'bodyClick';
    node.onclick = () => {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle('nav-open');
    };
    document.body.appendChild(node);
  };

  getBrand = () => {
    const { location } = this.props;
    let name;
    dashboardRoutes.map(prop => {
      if (prop.collapse) {
        prop.views.map(prop => {
          //eslint-disable-line
          if (prop.path === location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  };
  render() {
    return (
      <Navbar fluid>
        <Navbar.Header style={{ height: 100, width: '100%' }}>
          <Navbar.Brand style={{
            // display: 'flex',
            // justifyContent: 'space-between',
            // alignItems: 'center',
            // width: '100%',
            // height: '100%',
          }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            >
              <img src={logo} alt="logo" style={{ maxWidth: '20%' }} />
              <a href="/">{this.getBrand()}</a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.mobileSidebarToggle} />
        </Navbar.Header>
        <Navbar.Collapse>
          <HeaderLinks />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
