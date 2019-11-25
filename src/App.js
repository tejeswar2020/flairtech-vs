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
import EmployeeList from './components/EmployeeList'
import Individual from './components/Individual'
class App extends React.Component {
  state={
    user:null
  }
  componentDidMount(){
    fire.auth().onAuthStateChanged((user)=>{
        if(user){
        this.setState({user:user})
        user.getIdTokenResult().then(idTokenResult=>{
          console.log(idTokenResult.claims)
         if(idTokenResult.claims.admin){
            
         }
         else{
          
         }
        })
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
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/dashboard/adminconsole" component={AdminMan}/>
            <Route exact path="/dashboard/adminconsole/createtemplate" component={CreateTemplate}/>
            <Route path="/dashboard/adminconsole/createuser" component={CreateUser}/>
            <Route path="/dashboard/adminconsole/postform/:email" component={PostData}/>
            <Route exact path="/dashboard/adminconsole/employeelist" component={()=><EmployeeList />}/>
            <Route exact path="/dashboard/adminconsole/employeelist/:email" component={Individual}/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
   
}
}

export default App;
