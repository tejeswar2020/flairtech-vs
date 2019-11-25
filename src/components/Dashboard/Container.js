import React, { Component } from 'react'
import Presentation from './Presentation'
import firebase from '../Firebase/firebase'
import FileUploader from "react-firebase-file-uploader";
class Container extends Component {
    state = {
        avatar: "",
        isUploading: false,
        progress: 0,
        avatarURL: ""
      };
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
            
            }
            else{
                this.props.history.push("/login")
            }
          })
    }

    clickFun=()=>{
        const addManager=firebase.functions().httpsCallable("addAdminRole");
        addManager({email:"eshwarnadh345@gmail.com"}).then(res=>{
            console.log(res)
        })
    }

 
    render() {
        
        return (
            <div>
                <Presentation />
                <button className="btn btn-primary" onClick={this.clickFun}>Token</button>
            </div>
        )
    }
}

export default Container
