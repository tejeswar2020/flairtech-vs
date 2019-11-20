import React, { useState } from "react";
import fire from '../Firebase/firebase'
import {
  FormGroup,
  Form,
  Input,
  Label,
  Button,
  CustomInput,
  Row,
  Col
} from "reactstrap";
import {Link} from 'react-router-dom'
import ChildSendTemp from '../../UsefulComp/Modal/ChildSendTemp'
// import ToggleCustom from "./templateCollapse";
import Profile from "./profile";
import ToggleCustom from "./ToggleCustom";
import MailingAddress from "./MailingAddress";
import EmergencyContact from "./EmergencyContact";
import EmploymentHistory from "./EmploymentHistory";
import WorkAuthorization from "./WorkAuthorization";
function Presentation(props) {
  const {
    handleChange,
    handleSubmit,
    handleCustomPersonal,
    handleCustomAddress,
    handleCustomHistory,
    handleCustomContact,
    handleCustomWorkAuth,
    personalCheck,
    empHistoryData,
    workAuthData,
    emContactData,
    mailAddressData,
    handleLabel,
    handleBoard,
    PostTemp,
    handleEmail,
    sendMail
  } = props;
  return (
    <div className="row p-4">
      <div className="col-sm-4">
        <h3>Customize Template</h3>
        <br />
        <div>
          <ToggleCustom
            btnText="Customize Personal"
            checkItems={personalCheck}
            handleCustom={handleCustomPersonal}
            handleLabel={handleLabel}
            newLabelIdMention="personalAppend"
          />
          <ToggleCustom
            btnText="Customize Mailing Address"
            checkItems={mailAddressData}
            handleCustom={handleCustomAddress}
            handleLabel={handleLabel}
            newLabelIdMention="mailAddressAppend"
            handleLabel={handleLabel}
          />
          <ToggleCustom
            btnText="Customize Emergency Contact"
            checkItems={emContactData}
            handleCustom={handleCustomContact}
            handleLabel={handleLabel}
            newLabelIdMention="contactAppend"
            handleLabel={handleLabel}
          />
          <ToggleCustom
            btnText="Customize Employment History"
            checkItems={empHistoryData}
            handleCustom={handleCustomHistory}
            handleLabel={handleLabel}
            newLabelIdMention="employmentAppend"

          />
          <ToggleCustom
            btnText="Customize Work Authorization"
            checkItems={workAuthData}
            handleCustom={handleCustomWorkAuth}handleLabel={handleLabel}
            newLabelIdMention="workAuthAppend"
            handleLabel={handleLabel}
          />
          
          <br />
        </div>
      </div>
      <div className="col-sm-8" id="onBoard">
        <Profile/>
        <MailingAddress />
        <EmergencyContact />
        <EmploymentHistory />
        <WorkAuthorization />
        <ChildSendTemp sendMail={sendMail} handleEmail={handleEmail} handleBoard={handleBoard}/>
      </div>
    </div>
  );
}

export default Presentation;
