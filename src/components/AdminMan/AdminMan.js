import React from 'react'
import AddUser from "../../assets/flair-img/add_user.png"
import Activate from "../../assets/flair-img/activate.png"
import InActivate from "../../assets/flair-img/inactivate.png"
import Update from "../../assets/flair-img/update.png"
import User from "../../assets/flair-img/user.png"
import ChangePass from "../../assets/flair-img/changepass.png"
import Template from "../../assets/flair-img/template.png"
import {Link} from 'react-router-dom'
class AdminMan extends React.Component{
    render(){
        
    const options=[
        {
            text:"Create Template",
            img:Template,
            linkTo:"/dashboard/adminmanagement/createtemplate"  
        },
        {
          text:"Create User",
          img:AddUser  ,
          linkTo:"/dashboard/adminmanagement/createuser"  
      },
      {
          text:"Activate User",
          img:Activate  ,
          linkTo:"/dashboard/adminmanagement/activateuser"  
      },
      {
          text:"Inactivate User",
          img:InActivate ,
          linkTo:"/dashboard/adminmanagement/inactivateuser"  
      },
      {
          text:"Update User",
          img:Update  ,
          linkTo:"/dashboard/adminmanagement/updateuser"  
      },
      {
          text:"Change Password",
          img:ChangePass  ,
          linkTo:"/dashboard/adminmanagement/changepassword"  
      }
    ]

    const placeItems=options.map(action=>{
        return (
        
            <div className="m-4 rounded">
                <div className="create-user row p-4 rounded">
                    <div className="col m-1">
                        <img src={action.img} height="200"/>
                    </div>
                    <div className="col text-center m-1">
                        <Link to={action.linkTo}><button className="btn btn-outline-dark p-4 w-75">{action.text}</button></Link>
                    </div>
                </div>
            </div>
     
        )
    })
    return (
        <div className="admin-man-items mt-5 ml-auto mr-auto border rounded">
            {placeItems}
        </div>
        
    )
    
}
}

export default AdminMan
