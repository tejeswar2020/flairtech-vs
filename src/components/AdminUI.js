import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import fire from './Firebase/firebase'
import {Redirect} from 'react-router-dom'
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
    import Nopic from '../assets/flair-img/Nopic.png'
function AdminUI(props) {
    const {adminRole,managerRole,userRole,logOut,user,profile,email}=props
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar  className="navset" light expand="md">
        <NavbarBrand href="/dashboard"><img src={Logo} height="80"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto d-flex justify-content-around" navbar>
            
            <React.Fragment>
              <Link to="/dashboard/taskmanagement" className="nav-link shove"><NavItem className="m-2 p-2">Task Management </NavItem></Link>
           
            
              <Link to="/dashboard/timesheets" className="nav-link shove"><NavItem className="m-2 p-2">Time Sheets </NavItem></Link>
           
            
              <Link to="/dashboard/wiki" className="nav-link shove"><NavItem className="m-2 p-2">Wiki </NavItem></Link>
           
            
              <Link to="/dashboard/discussions" className="nav-link shove"><NavItem className="m-2 p-2">Discussions</NavItem></Link>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="userinfo rounded"  nav>
                
                <span>{profile?<img src={profile} height="60"  className="userinfo"/>:<img src={Nopic} height="60"  className="userinfo bg-light"/>}</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><span className="ml-2 mr-2">{email}</span></DropdownItem>
                <Link to="/dashboard/adminconsole" className="nav-link shove"><DropdownItem>Admin Console</DropdownItem></Link>
                
                <Link to="/dashboard/usermanagement" className="nav-link shove"><DropdownItem>User Management</DropdownItem></Link>
                
                <DropdownItem divider />
                
                  <a onClick={logOut}><DropdownItem>Logout</DropdownItem></a>
                
              </DropdownMenu>
            </UncontrolledDropdown>
            </React.Fragment>
         
          </Nav>
        </Collapse>
      </Navbar>
        </div>
    )
}

export default AdminUI
