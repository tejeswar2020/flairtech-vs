import React from 'react'
import $ from 'jquery'
import fire from '../../Firebase/firebase'
import {Form,FormGroup,Label,Input,Progress} from 'reactstrap'
import FileUploader from 'react-firebase-file-uploader'
import { parse } from 'path'
class UserForm extends React.Component{
    state={
        currID:"",
        veridicID:"",
        avatar: "",
        upload:false,
        isUploading: false,
        progress: 0,
        avatarURL: null,
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
        else {
            this.setState({passMatch1:true})
            this.setState({password:$("#setPassword").val()})
        }
    }
    handleChange2=(e)=>{
        const setP=$("#setPassword").val();
        if(e.target.value!=setP){
            this.setState({passMatch2:false})
        }
        else{ this.setState({passMatch2:true})
        this.setState({password:$("#confirmPassword").val()})
        }
    }
    Register=(e)=>{
        e.preventDefault();
        console.log(this.state.password)
        console.log("hello")
    if(($("#setPassword").val()!=$("#confirmPassword").val())||this.state.passwordLength<8){
        console.log("Passwords not match or min 8 length")
    }
    else{ 
       
        const personal={
            firstname:$("#PIb_fname").val(),
            middlename:$("#PIb_mname").val(),
            lastname:$("#PIb_lname").val(),
            emailid:$("#PIb_mail").val(),
            phonenumber:$("#PIb_phone").val(),
            department:$("#PIb_depart").val(), 
            jobtitle:$("#PIb_jobTitle").val(),
            reportingmanager:$("#PIb_report").val(),
            branch:$("#PIb_branch").val(),
            empolyeestatus:$("#PIb_employ").val(),
            maritalstatus:$("#PIb_marital").val(),
            role:$("#PIb_role").val(),
            }
            const mailingaddress={
            line1:$("#b_MA_LINE1").val(),
            line2:$("#b_MA_LINE2").val(),
            city:$("#b_MA_CITY").val(),
            state:$("#b_MA_STATE").val(),
            zip:$("#b_MA_ZIP").val(),
            country:$("#b_MA_COUNTRY").val(),
            from:$("#b_MA_FROM").val(),
            to:$("#b_MA_TO").val(),
            }
            const emergencycontact={
            name:$("#EMCe_name").val(),
            phone:$("#EMCe_phone").val(),
            emailid:$("#EMCe_mail").val(),
            }
            const employmenthistory={
            client:$("#b_EH_CLIENT").val(),
            clientaddress:$("#b_EH_CLIENTADD").val(),
            yourworkingmailid:$("#b_EH_CLIENTMAIL").val(),
            vendorname:$("#b_EH_VENDORNAME").val(),
            vendorphone:$("#b_EH_VENDORPHONE").val(),
            vendoremail:$("#b_EH_VENDORMAIL").val(),
            from:$("#b_EH_FROM").val(),
            to:$("#b_EH_TO").val(),
            }
            var date = new Date($('#b_WAb_issuedate').val());
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let issueDate=[day,month,year].join('/')
            var date2 = new Date($('#b_WAb_expdate').val());
            let day2 = date2.getDate();
            let month2 = date2.getMonth() + 1;
            let year2 = date2.getFullYear();
            let ExpDate=[day2,month2,year2].join('/')
            const workauth={
                work_type:$("#b_WAtype").val(),
                work_number:$("#b_WAnum").val(),
                work_issue:issueDate,
                work_exp:ExpDate,
                work_vendorphone:$("#b_WAvendorphone").val(),
                work_vendormail:$("#b_WAvendormail").val(),
                work_from:$("#b_WAfrom").val(),
                work_to:$("#b_WAto").val(),
                work_type:$("#b_WAtype").val(),

            }
            
      

            function AssignAsUser(usermail){
                const addManager=fire.functions().httpsCallable("addAdminRole");
            addManager({email:usermail}).then(res=>{
                console.log(res)
            })
            }
       
        fire.auth().createUserWithEmailAndPassword(this.props.email,this.state.password).then(
            //status to true
            fire.firestore().collection("sendEmailVerify").doc(this.props.email).set({
                status:true
            }),
            //getting user info
            fire.firestore().collection("Users").doc(this.props.email).set({
                veridicID:"",
                imageURL:"",
                employeestatus:"bench",
                useremail:this.props.email,
                workauth,
                employmenthistory,
                emergencycontact,
                mailingaddress,
                personal,
            }).then(
               console.log("user info updated")
            ),
            //assigning as user
            AssignAsUser(this.props.email)
           ,

            
            //getting veridicID
            fire.firestore().collection("IDstatus").doc("id").get().then(snap=>{
                console.log(snap.data().veridicID)
                let id=snap.data().veridicID.slice(3);
                let spare=(parseInt(id)+1).toString();
                let length=6-spare.length
                for(let i=1;i<=length;i++){
                    spare='0'+spare;
                }
                console.log(spare.toString())
                localStorage.setItem("veridicID","VER"+spare)
                fire.firestore().collection("IDstatus").doc("id").update({
                    veridicID:localStorage.getItem("veridicID")
                })
     
            }),
            //updating veridicID to user
            fire.firestore().collection("Users").doc(this.props.email).update({
                veridicID:localStorage.getItem("veridicID")
            }),
            //updating picture to the user
            fire.firestore().collection("Users").doc(this.props.email).update({
                imageURL:this.state.avatarURL
            }).then(console.log("Image is added to the user")),
            console.log("User Created successfully")
        )
        .catch((error)=>console.log(error))  
       
    }   
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
      this.setState({ isUploading: false });
      console.error(error);
    };
    handleUploadSuccess = filename => {
      this.setState({ avatar: filename, progress: 100,isUploading:false});
      fire
        .storage()
        .ref("images")
        .child(filename)
        .getDownloadURL()
        .then(url => {
            this.setState({ avatarURL: url,upload:true});
           
    });
    };
    render(){
        return(
             <Form className="widthsetter p-4 bg-light m-5 rounded shadow ml-auto mr-auto" onSubmit={this.Register}>
                 <div className="text-center">
                 {this.state.isUploading?<Progress animated striped color="success" className="" value={this.state.progress} />:<p></p>}
                 <div>
                 {this.state.avatarURL && <img height="150" className="rounded" src={this.state.avatarURL} />}
                 </div>
               
                <FileUploader
                    accept="image/*"
                    name={this.props.email}
                    randomizeFilename
                    storageRef={fire.storage().ref("images")}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                />
                 </div>
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
                <button className="btn btn-primary w-50"  type="submit">Register</button>
             </Form>
        )
    }
    
}

export default UserForm