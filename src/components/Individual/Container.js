import React, { Component } from 'react'
import Presentation from './Presentation'
import fire from '../Firebase/firebase'
 class Container extends Component {
    state={
        imageURL:"",
        email:"",
        personal:{},
        emergencycontact:{},
        employementhistory:{},
        workauth:{},
        mailingaddress:{},
        veridicId:"",
        userstatus:""
    }
    componentDidMount=()=>{
        console.log(this.props.match.params.email)
        let email=this.props.match.params.email;
        this.setState({email})
        fire.firestore().collection("Users").doc(email).onSnapshot(snap=>{
            console.log(snap.data())
            this.setState({personal:snap.data().personal})
            this.setState({emergencycontact:snap.data().emergencycontact})
            this.setState({employementhistory:snap.data().employmenthistory})
            this.setState({mailingaddress:snap.data().mailingaddress})
            this.setState({workauth:snap.data().workauth})
            this.setState({veridicId:snap.data().veridicID})
            this.setState({userstatus:snap.data().userstatus})
            this.setState({imageURL:snap.data().imageURL})
        })

    }
    render() {
        return (
            <div>
                <Presentation {...this.state}/>
            </div>
        )
    }
}

export default Container
