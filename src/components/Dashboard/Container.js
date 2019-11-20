import React, { Component } from 'react'
import Presentation from './Presentation'
import firebase from '../Firebase/firebase'
import FileUploader from "react-firebase-file-uploader";
class Container extends Component {
    state = {
        username: "",
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

    handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };
 
    render() {
        
        return (
            <div>
                <Presentation />
                <label>Avatar:</label>
                {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                {this.state.avatarURL && <img src={this.state.avatarURL} />}
                <FileUploader
                    accept="image/*"
                    name="avatar"
                    randomizeFilename
                    storageRef={firebase.storage().ref("images")}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
          />
            </div>
        )
    }
}

export default Container
