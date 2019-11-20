import React, { Component } from 'react'
import Presentation from './Presentation'
import fire from '../../components/Firebase/firebase'
class Container extends Component {
    state={
        email:"",
        pass:""
      }
        handleChange=(e)=>{
          this.setState({
            [e.target.id]:e.target.value
          })
        }
        componentDidMount(){
          fire.auth().onAuthStateChanged((user)=>{
              if(user){
              this.props.history.push("/dashboard");
              }
              else{
                  this.props.history.push("/login")
                this.setState({user:null});
              }
            })
          }
      
        login=(e)=>{
          e.preventDefault();
          console.log(this.state)
          fire.auth().signInWithEmailAndPassword(this.state.email,this.state.pass).then(()=>{
           return  this.props.history.push("/dashboard")
          })
          .catch((error=>{
            console.log(alert(error))
          }))
        }

        
    render() {
        return (
            <div>
                <Presentation
                handleChange={this.handleChange}
                login={this.login}
                />
            </div>
        )
    }
}

export default Container
