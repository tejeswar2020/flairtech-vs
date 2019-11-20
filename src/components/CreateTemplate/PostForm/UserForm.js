import React from 'react'
import $ from 'jquery'
import fire from '../../Firebase/firebase'
import {Form,FormGroup,Label,Input} from 'reactstrap'
class UserForm extends React.Component{
    state={
        passMatch1:"",
        passMatch2:"",
        password:"",
        confirmPassword:"",
        passwordLength:0,
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
    componentDidMount(){
        $("#placeit").html(this.props.htmlContent);
    }
    handleChange1=(e)=>{
        this.setState({passwordLength:$("#setPassword").val().length})
        const setP=$("#confirmPassword").val();
        if(e.target.value!=setP){
            this.setState({passMatch1:false})
        }
        else {this.setState({passMatch1:true})}
    }
    handleChange2=(e)=>{
        const setP=$("#setPassword").val();
        if(e.target.value!=setP){
            this.setState({passMatch2:false})
        }
        else{ this.setState({passMatch2:true})}
    }
    Register=(e)=>{
        
        e.preventDefault();
        console.log(this.state.password)
    if(($("#setPassword").val()!=$("#confirmPassword").val())||this.state.passwordLength<8){
        console.log("Passwords not match or min 8 length")
    }
    else{ 
        this.setState({password:$("#setPassword").val()})
     const personal={
                firstname:$("#PIb_fname").val(),
                middlename:$("#PIb_mname").val(),
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
        // fire.firestore().collection("UserTemplate").get().then(doc=>console.log(doc.data()))
       
        fire.auth().createUserWithEmailAndPassword(this.props.email,this.state.password).then(
            fire.firestore().collection("Users").doc(this.props.email).set({
                workauth,
                employmenthistory,
                emergencycontact,
                malilingaddress,
                personal,
            }).then(
                fire.firestore().collection("sendEmailVerify").doc(this.props.email).set({
                    status:true
                })
            )

            
        )
        .catch((error)=>console.log(error))
        
       
    }   
    }
    render(){
        return(
             <Form className="widthsetter p-4 bg-light m-5 rounded shadow ml-auto mr-auto">
                <div id="placeit" className="w ml-auto mr-auto">
                    
                </div>
                <FormGroup>
                    <Label for="setPassword">Set Password</Label>
                    <Input type="password" onChange={this.handleChange1} name="password" id="setPassword" placeholder="" />
                </FormGroup>
                <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input type="password" name="confirmPassword" onChange={this.handleChange2} id="confirmPassword" placeholder="" />
                    {this.state.passMatch1||this.state.passMatch2?<p className="text-success">Passwords match eachother</p>:<p className="text-danger">Passwords doesn't match</p>}
                   {this.state.passwordLength<8?<p className="text-danger">Minimum 8 characters needed</p>:<p></p>}
                </FormGroup>
                <button className="btn btn-primary w-50" onClick={this.Register} type="submit">Register</button>
             </Form>
        )
    }
    
}

export default UserForm