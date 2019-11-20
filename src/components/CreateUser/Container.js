import React, { Component } from 'react'
import fire from '../Firebase/firebase'
import Presentation from './Presentation'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'

class Container extends Component {
    state={
        placeHtml:null,
        userMail:""
    }
    componentDidMount(){
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
            
            }
            else{
                this.props.history.push("/login")
            }
          })
    }
    handleClick=()=>{
        var userMail=this.state.userMail
        
        fire.firestore().collection("sendEmailVerify").doc(userMail).set({
            status:false,
            Password:"veridic0004"
        })
    //     var nodemailer = require('nodemailer');

    // var transporter = nodemailer.createTransport({
    // service: 'gmail',
    // auth: {
    //     user: 'sunnychow90@gmail.com',
    //     pass: '980980980'
    // }
    // });

    // var mailOptions = {
    // from: 'sunnychow90@gmail.com',
    // to: userMail,
    // subject: 'Invitation to register your profile in veridic solutions',
    // text: `http://localhost:3000/dashboard/adminmanagement/postform`
    // };

    // transporter.sendMail(mailOptions, function(error, info){
    // if (error) {
    //     console.log(error);
    // } else {
    //     console.log('Email sent: ' + info.response);
    // }
    // });
        
    }

    handleChange=(e)=>{
        console.log(e.target.value);
        const userMail=e.target.value;
        this.setState({userMail:userMail})
   
    }
    componentDidMount(){
        fire.firestore().collection('Template').doc('HtmlTemp').get().then((snap)=>{
            // $("#placeit").html("<div>"+snap.data().content+"<div>")
            this.setState({
                placeHtml:snap.data().content
            })
            // $("#placeHtml").html(snap.data().content);
           console.log(snap.data().content)
          })
    }
    render() {

       

        return (
            <div className="mt-5">
                <Presentation placeHtml={this.state.placeHtml} handleChange={this.handleChange} handleClick={this.handleClick}/>
            </div>
        )
    }
}

export default withRouter(Container)
