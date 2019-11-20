import React from 'react';
import NavBar from './components/NavBar'
import fire from './components/Firebase/firebase'
import AdminMan from './components/AdminMan/AdminMan'
// import CreateUser from './components/CreateUser'
import CreateTemplate from './components/CreateTemplate'
import Login from './AuthComponents/Login'
import PostData from './components/CreateTemplate/PostForm'
import CreateUser from './components/CreateUser'
import { BrowserRouter, Route , Switch,Redirect} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import PostForm from './components/PostForm'
class App extends React.Component {
  state={
    user:null
  }
  componentDidMount(){
    fire.auth().onAuthStateChanged((user)=>{
        if(user){
        this.setState({user:user})
        }
        else{
          
            this.props.history.push("/login")
          this.setState({user:null});
        }
      })
    }
  render(){
   
  return (
    <div className="App">
      
      <div>
      <BrowserRouter>
          <div>
          <NavBar/>
          
          </div>
          <Switch>
            <Route exact path="/" component={()=> <Redirect to="/login"/>}/>
            <Route path="/login" component={Login}/>
            <Route path="/PostForm" component={PostForm}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/dashboard/adminmanagement" component={AdminMan}/>
            <Route exact path="/dashboard/adminmanagement/createtemplate" component={CreateTemplate}/>
            <Route path="/dashboard/adminmanagement/createuser" component={CreateUser}/>
            <Route path="/dashboard/adminmanagement/postform/:email" component={PostData}/>

           
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
   
}
}

export default App;
