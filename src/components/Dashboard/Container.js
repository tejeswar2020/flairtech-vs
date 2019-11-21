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

 
    render() {
        
        return (
            <div>
                <Presentation />
               
            </div>
        )
    }
}

export default Container
