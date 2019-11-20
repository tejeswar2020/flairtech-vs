import React from 'react'
import $ from 'jquery'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {Link} from 'react-router-dom'
import SendModal from '../../UsefulComp/Modal/sendTemp'
function Presentation(props){
    const {handleChange,handleSubmit,htmlContent}=props
    
    return(
        <div>
            
            <div id="placeit" className="w-75 ml-auto mr-auto">
                
            </div>
            <div className="ml-auto">
            <button className="btn btn-primary" style={{marginLeft:"500px"}} onClick={handleSubmit}>Submit</button>
            </div>
            
           
        </div>
    )
}

export default Presentation