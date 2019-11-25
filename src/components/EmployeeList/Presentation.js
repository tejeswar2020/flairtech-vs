import React from 'react'
import { Button,Row,Col,Table,CustomInput } from 'reactstrap';
import {Link} from 'react-router-dom'
function Presentation(props) {
    const {userData}=props
    const placeUsers=userData.map(user=>{
        return(
                     <tbody>
                        <tr>
                        <td><span id="emplist_name">{user.name}</span></td>
                        <td><span id="emplist_mail">{user.mail}</span></td>
                        <td><span id="emplist_phone">{user.phone}</span></td>
                        <td><span id="emplist_branch">{user.branch}</span></td>
                        <td><span id="emplist_id"><Link to={"/dashboard/adminconsole/employeelist/"+user.mail}>{user.employeeId}</Link></span></td>
                        <td><span id="emplist_project">{user.project}</span></td>
                        <td><span id="emplist_reportingmanager">{user.reportingmanager}</span></td>
                        <td><span id="emplist_status">{user.employeestatus}</span></td>
                        <td><span id="emplist_usertype">{user.usertype}</span></td>
                        <td><span id="emplist_jobtitle">{user.jobtitle}</span></td>
                        <td><span id="emplist_employeetype">{user.employeetype}</span></td>
                        <td><span id="emplist_department">{user.department}</span></td>
                        <td><span id="emplist_userstatus">{user.userstatus}</span></td>
                        <td><CustomInput type="checkbox" label=""/></td>
                        </tr>
                    </tbody>
        )
    })
    return (
        <div>
            <div className="employeebox">
                
                <div className="employeenav m-1">
                    <div className="employeestatus d-flex justify-content-around">
                        <span>Active:</span>
                        <span>In Active:</span>
                        <span>Suspended:</span>
                    </div>
                    <div className="employeeconsole row m-2">

                        <div className="employeeselect col-4">
                           <span>6</span> <span className="m-1">selected</span>
                        </div>
                        <div className="col-8">
                            <Row className="">
                                <Col><Button color="primary" className="w-100">Hold Timesheets</Button></Col>
                                <Col><Button color="primary" className="w-100">Send Announcement</Button></Col>
                                <Col><Button color="primary" className="w-100">Send Text Message</Button></Col>
                                <Col><Button color="primary" className="w-100">Send Email</Button></Col>
                            </Row>
                        </div>
                    
                    </div>
                </div>
                
                <div className="employeelist border p-3">
                    <Table bordered className="rounded">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Mail ID</th>
                        <th>Phone</th>
                        <th>Branch</th>
                        <th>Employee ID</th>
                        <th>Project</th>
                        <th>Reporting Manager</th>
                        <th>Employee Status</th>
                        <th>User type</th>
                        <th>Job Title</th>
                        <th>Employee Type</th>
                        <th>Department</th>
                        <th>User Status</th>
                        <th><CustomInput type="checkbox" label="Select all"/></th>
                        </tr>
                    </thead>
                    {placeUsers}
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Presentation
