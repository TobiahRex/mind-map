import React, { Component } from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

class HeaderLinks extends Component {
  render() {
    return (
      <div>
        <Nav>
          {/* <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem> */}

          {/* <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem> */}
        </Nav>
        <Nav pullRight>
          {/* <NavItem eventKey={1} href="#">
            Account
          </NavItem> */}
          {/* <NavDropdown
            eventKey={1}
            title="Charts"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={1.1}>Sankey</MenuItem>
            <MenuItem eventKey={1.2}>Sunburst</MenuItem>
            <MenuItem eventKey={2.2}>Another action</MenuItem>
            <MenuItem eventKey={2.3}>Something</MenuItem>
            <MenuItem eventKey={2.4}>Another action</MenuItem>
            <MenuItem eventKey={2.5}>Something</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.3}>Help</MenuItem>
          </NavDropdown> */}
          {/* <NavItem eventKey={3} href="#">
            Log out
          </NavItem> */}
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
