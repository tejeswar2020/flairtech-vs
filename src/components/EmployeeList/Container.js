import React, { Component } from 'react'
import Presentation from './Presentation'
import fire from '../Firebase/firebase'
class Container extends Component {
    state={
        userData:[]
    }
    componentDidMount=()=>{
        fire.firestore().collection("Users").onSnapshot(suc=>{  
            let users=suc.docs.map(doc=>doc.data())
            
            let userData=users.map(user=>{
                return {
                    name:user.personal.firstname+" "+user.personal.middlename,
                    mail:user.useremail,
                    phone:user.personal.phonenumber,
                    branch:user.personal.branch,
                    employeeId:user.veridicID,
                    project:user.project,
                    reportingmanager:user.personal.reportingmanager,
                    employeestatus:user.employeestatus,
                    usertype:user.usertype,
                    jobtitle:user.personal.jobtitle,
                    employeetype:user.workauth.work_type,
                    department:user.personal.department,
                    userstatus:user.userstatus
                }
            })
            this.setState({userData:userData})
            console.log(userData)
              
        })
        
    }
    render() {
        return (
            <div>
                <Presentation userData={this.state.userData}/>
            </div>
        )
    }
}

export default Container
