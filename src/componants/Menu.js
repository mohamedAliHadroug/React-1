import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{marginTop:"20px",borderRadius:"20px"}} color="light" light expand="md">
        <NavbarBrand  style={{margin:"0px 100px",fontSize:"30px",fontStyle:"italic"}} href="/">NETFLIX</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={{margin:"0px 100px",fontSize:"30px",fontStyle:"bold"}}  href="/components/">FILM</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{margin:"0px 100px",fontSize:"30px",fontStyle:"bold"}} href="https://github.com/reactstrap/reactstrap">SERIES</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{margin:"0px 100px",fontSize:"30px",fontStyle:"bold"}}>
                CATEGORY
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem  style={{margin:"10px 10px",fontSize:"20px",fontStyle:"bold"}}>
                 ACTION            
                </DropdownItem>
                <DropdownItem style={{margin:"10px 10px",fontSize:"20px",fontStyle:"bold"}}>
                  THRILLER
                </DropdownItem>
                <DropdownItem style={{margin:"10px 10px",fontSize:"20px",fontStyle:"bold"}}> 
                  ROMANCE
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;