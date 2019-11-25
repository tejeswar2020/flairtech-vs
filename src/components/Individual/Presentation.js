import React from 'react'
import {Table} from 'reactstrap'
function Presentation(props) {
    const {imageURL,userstatus,email,workauth,personal,veridicId,mailingaddress,emergencycontact,employementhistory}=props;
    return (
        <div>
            <div className="row m-2 rounded shadow mt-4">
                <div className="user-glance col-lg-3 mt-3">
                    <div className="user-image">
                        <img src={imageURL} alt="employeeimage" width="180" height="180"/>
                    </div>
                    <div className="user-glance-details">
                        <span><b>Employee ID: </b>{veridicId}</span><br/><br/>
                        <span><b>Name: </b>{personal.firstname+" "+personal.middlename}</span><br/>
                        <span><b>Mail ID: </b>{email}</span><br/>                        
                        <span><b>Phone: </b>{personal.phonenumber}</span><br/>
                        <span><b>Address: </b>{mailingaddress.line1+" "+mailingaddress.line2+","+mailingaddress.city+","+mailingaddress.state+","+mailingaddress.country+","+mailingaddress.zip}</span><br/>
                    </div>
                </div>
                <div className="user-data col-lg-9 mt-4">
                    <div className="row">
                        <span className="col-4"><b>Branch:</b>{personal.branch}</span>
                        <span className="col-4"><b>Department:</b>{personal.department}</span>
                        <span className="col-4"><b>Employee Status:</b>{userstatus}</span>
                        <span className="col-4"><b>Job title:</b>{personal.jobtitle}</span>
                        <span className="col-4"><b>Reporting Manager(Supervisor):</b>{personal.reportingmanager}</span>
                    </div>
                    <div className="user-emergencycontact mt-3">
                        <h3 className=""><u>Emergency Contact:</u></h3>
                            <Table bordered>
                                <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email Id</th>
                                    <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{emergencycontact.name}</td>
                                    <td>{emergencycontact.phone}</td>
                                    <td>{emergencycontact.emailid}</td>
                                    <td><a href="#">Edit</a>&nbsp;&nbsp;<a href="#">Delete</a></td>
                                    </tr>
                                </tbody>
                            </Table>
                    </div>
                    <div className="user-employementhistory mt-3">
                    <h3><u>Employement History:</u></h3>
                            <Table bordered>
                                <thead>
                                    <tr>
                                    <th>Client Name <br/>Address<br/>Working Client Email</th>
                                    <th>Vendor Name<br/>Vendor Phone<br/>Venfor Email</th>
                                    <th>From Date</th>
                                    <th>To Date</th>
                                    <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{employementhistory.client}<br/>{employementhistory.clientaddress}<br/>{employementhistory.yourworkingmailid}</td>
                                    <td>{employementhistory.vendorname}<br/> {employementhistory.vendorphone }<br/>{employementhistory.vendoremail}</td>
                                    <td>{employementhistory.from}</td>
                                    <td>{employementhistory.to}</td>
                                    <td><a href="#">Edit</a>&nbsp;&nbsp;<a href="#">Delete</a></td>
                                    </tr>
                                </tbody>
                            </Table>
                    </div>
                    <div className="user-workauth mt-3">
                    <h3><u>Work Authorization:</u></h3>
                            <Table bordered>
                                <thead>
                                    <tr>
                                    <th>Type</th>
                                    <th>Number</th>
                                    <th>Document</th>
                                    <th>issue Date</th>
                                    <th>Expiry Date</th>
                                    <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>{workauth.work_type}</td>
                                    <td>{workauth.work_number}</td>
                                    <td></td>
                                    <td>{workauth.work_issue}</td>
                                    <td>{workauth.work_exp}</td>
                                    <td><a href="#">Edit</a>&nbsp;&nbsp;<a href="#">Delete</a></td>
                                    </tr>
                                </tbody>
                            </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation
