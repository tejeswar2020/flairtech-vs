import React from 'react'
import PostData from '../CreateTemplate/PostForm'
import {Card,CardTitle,Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import SendModal from '../../UsefulComp/Modal/sendTemp'
import $ from 'jquery'
function Presentation(props) {
    const {handleChange,handleClick,placeHtml}=props
    const placeOld=()=>{
        
        $("#placeHtml").html(placeHtml);
        $("#createbtn").fadeIn(1000);
        }
    return (
        <div>
            <div>
            <Card body className="text-center w-75 ml-auto mr-auto mt-4">
            <CardTitle>Do you want to send previous template or create a new one?</CardTitle>
            <Button onClick={placeOld} className="w-50 ml-auto mr-auto">Old Template</Button>
            <Link to="/dashboard/adminconsole/createtemplate"><Button className="w-50">Create New template</Button></Link>
             </Card>
            </div>
            <div id="createbtn" className="ml-auto">
                <SendModal buttonLabel="Create New User" handleChange={handleChange} handleClick={handleClick}/>
            </div>
            <div id="placeHtml" className="w-75 ml-auto mr-auto">
                
            </div>
        </div>
    )
}

export default Presentation
