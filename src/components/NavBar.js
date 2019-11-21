import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import fire from './Firebase/firebase'
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
import AfterLogin from './AfterLogin'
import BeforeLogin from './BeforeLogin'
import {withRouter,Redirect} from 'react-router-dom'

class Example extends React.Component {
  
  state={
    user:null,
    profile:"",
    email:""
  }
  componentDidMount(){
    this.authListener()
  }
  authListener=()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        console.log(user.email)
      this.setState({user:user})
      fire.firestore().collection("Users").doc(user.email).get().then(snap=>{
        this.setState({profile:snap.data().imageURL})
        this.setState({email:user.email})
      })
      }
      else if(user==null&&this.props.history.location.pathname.match("/dashboard/adminmanagement/postform/")){
        console.log("yes");
      }
      else{
        const link =this.props.history;
        console.log(link)
         this.setState({user:null});

         this.props.history.push('/login')
      }
    })
    
  }
 logOut=()=>{
    fire.auth().signOut()
    this.authListener();
    // window.location.reload();
    
  }
  render(){
   
  return (
    
    <div>
      {/* {this.state.user?(<AfterLogin logOut={this.logOut}/>):(<BeforeLogin/>)}  */}
     
     <AfterLogin email={this.state.email} profile={this.state.profile} logOut={this.logOut} user={this.state.user}/>
      
    </div>
  );
  
    
}
}

export default withRouter(Example);
