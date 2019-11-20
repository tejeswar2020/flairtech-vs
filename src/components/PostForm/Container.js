import React, { Component } from 'react'
import fire from '../Firebase/firebase'
import Presentation from './Presentation'
import axios from 'axios'
import $ from 'jquery'
class Container extends Component {
    state={
        htmlContent:"Loading",
        PI_fname:"",
        PI_mname:"",
        PI_lname:"",
        PI_email:"",
        PI_phone:"",
        PI_department:"",
        PI_job:"",
        PI_report:"",
        PI_branch:"",
        PI_employment:"",
        PI_marital:"",
        PI_role:"",
        MA_LINE1:"",
        MA_LINE2:"",
        MA_CITY:"",
        MA_STATE:"",
        MA_ZIP:"",
        MA_COUNTRY:"",
        MA_FROM:"",
        MA_TO:"",
        EMC_name:"",
        EMC_phone:"",
        EMC_mail:"",
        EH_CLIENT:"",
        EH_CLIENTADD:"",
        EH_CLIENTMAIL:"",
        EH_VENDORNAME:"",
        EH_VENDORPHONE:"",
        EH_VENDORMAIL:"",
        EH_VENDORFROM:"",
        EH_VENDORTO:"",
        WA_TYPE:"",
        WA_NUMBER:"",
        WA_ISSUEDATE:"",
        WA_EXPDATE:"",
        WA_VENDORPHONE:"",
        WA_VENDORMAIL:"",
        WA_FROM:"",
        WA_TO:"",
        WA_FILE:""


    }
    //receive template from the firebase
    componentDidMount(){
       console.log(this.props);
        fire.firestore().collection('Template').doc('HtmlTemp').get().then((snap)=>{
            $("#placeit").html(snap.data().content)
           console.log(snap.data().content)
          })
    }


    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=()=>{
        
            console.log(this.state);
     const personal={
                firstname:this.state.PI_fname,
                middlename:this.state.PI_mname,
                lastname:this.state.PI_lname,
                emailid:this.state.PI_email,
                phonenumber:this.state.PI_phone,
                department:this.state. PI_department,
                jobtitle:this.state.PI_job,
                reportingmanager:this.state.PI_report,
                branch:this.state.PI_branch,
                empolyeestatus:this.state.PI_employment,
                maritalstatus:this.state.PI_marital,
                role:this.state.PI_role,
    }
    const malilingaddress={
                line1:this.state.MA_LINE1,
                line2:this.state. MA_LINE2,
                city:this.state.MA_CITY,
                state:this.state.MA_STATE,
                zip:this.state.MA_ZIP,
                country:this.state.MA_COUNTRY,
                from:this.state.MA_FROM,
                to:this.state.MA_TO,
    }
    const emergencycontact={
                name:this.state.EMC_name,
                phone:this.state.EMC_phone,
                emailid:this.state.EMC_mail,
    }
    const employmenthistory={
                client:this.state.EH_CLIENT,
                clientaddress:this.state.EH_CLIENTADD,
                yourworkingmailid:this.state.EH_CLIENTMAIL,
                vendorname:this.state.EH_VENDORNAME,
                vendorphone:this.state.EH_VENDORPHONE,
                vendoremail:this.state.EH_VENDORMAIL,
                from:this.state.EH_VENDORFROM,
                to:this.state.EH_VENDORTO,
    }

    const workauth={
                type:this.state.WA_TYPE,
                number:this.state.WA_NUMBER,
                issuedate:this.state.WA_ISSUEDATE,
                expdate:this.state.WA_EXPDATE,
                vendorphone:this.state.WA_VENDORPHONE,
                vendormail:this.state.WA_FROM,
                to:this.state.WA_TO,
                file:this.state.WA_FILE
    }
    
        fire.firestore().collection("UserTemplate").doc("V_0002").set({
            workauth,
            employmenthistory,
            emergencycontact,
            malilingaddress,
            personal,
        })
    }
    InvitationLink=()=>{
        
    }
    show=()=>{
        console.log(this.props.history);
    }
    render() {
        return (
            <div>
                <Presentation handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <button onClick={this.show}>Click</button>
            </div>
        )
    }
}

export default Container
