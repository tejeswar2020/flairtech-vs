import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import fire from './Firebase/firebase'
import {Redirect} from 'react-router-dom'
import AdminUI from './AdminUI'
import ManagerUI from './ManagerUI'
import UserUI from './UserUI'
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
  DropdownItem } from 'reactstrap';
  import Logo from '../assets/logo.png'
function AfterLogin(props) {
    const {adminRole,managerRole,userRole,logOut,user,profile,email}=props
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
          {user?
          <div>
            {adminRole?<AdminUI logOut={logOut} user={user} profile={profile} email={email}/>:null}
            {managerRole?<ManagerUI logOut={logOut} user={user} profile={profile} email={email}/>:null}
            {userRole?<UserUI logOut={logOut} user={user} profile={profile} email={email}/>:null}
          </div>
            :(
                
            <Navbar  className="navset" light expand="md">
            <NavbarBrand href="/dashboard"><img src={Logo} height="80"/></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto d-flex justify-content-around" navbar>
                
                <React.Fragment>
                  <Link to="/login" className="nav-link shove"><NavItem className="m-2 p-2">Login </NavItem></Link>
               
                
                  <Link to="#" className="nav-link shove"><NavItem className="m-2 p-2">About </NavItem></Link>
               
                </React.Fragment>
              
            
              </Nav>
            </Collapse>
          </Navbar>
            )
          }
            

        </div>
    )
}

export default AfterLogin
