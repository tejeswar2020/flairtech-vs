import React,{useState} from 'react'
import PersonalData from "./PersonalData";
import {
  FormGroup,
  Form,
  Input,
  Label,
  Button,
  Collapse,
  CustomInput,
  Row,
  Col
} from "reactstrap";
function TogglePersonal(props){
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleChange=()=>{

  }
  return (
    <div>
      <Button color="secondary" onClick={toggle} className="w-100 m-1">
        Personal Information
      </Button>
      <Collapse isOpen={isOpen} className="m-1">
      <div id="personalForm">
      <Form>
          <Row>
            <Col>
              <PersonalData
                label="FirstName"
                id="b_fname"
                extra="PI"
                name="PI_fname"
                placeholder="Enter First Name"
                handleChange={handleChange}
              />
            </Col>
            <Col>
              <PersonalData
                label="MiddleName"
                id="b_mname"
                extra="PI"
                name="PI_mname"
                placeholder="Enter Middle Name"
                handleChange={handleChange}

              />
            </Col>
          </Row>
          <Row>
            <Col>
              <PersonalData
                label="LastName"
                id="b_lname"
                extra="PI"
                name="PI_lname"
                placeholder="Enter Last Name"
                handleChange={handleChange}

              />
            </Col>
            <Col>
              <PersonalData
                label="Email"
                id="b_mail"
                extra="PI"
                name="PI_email"
                placeholder="Enter mail id"
                handleChange={handleChange}

              />
            </Col>
          </Row>
          <Row>
            <Col>
              <PersonalData
                label="Phone"
                id="b_phone"
                extra="PI"
                name="PI_phone"
                placeholder="Enter Phone No"
                handleChange={handleChange}

              />
            </Col>
            <Col>
              <FormGroup>
                <Label for="b_depart">Department</Label>
                <Input type="select" name="PI_department"  id="PIb_depart" onChange={handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <FormGroup id="job">
            <Label htmlFor="PIb_jobTitle">Job Title:</Label>
            <Input
              type="text"
              placeholder="Job Title"
              id="PIb_jobTitle"
              name="PI_job"
              onChange={handleChange}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
          </FormGroup>
          <Row>
            <Col>
              <FormGroup id="b_reportM">
                <Label for="b_report">Reporting Manager</Label>
                <Input type="select" name="PI_report"   id="PIb_report" onChange={handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup id="b_branch">
                <Label for="b_branch">Branch</Label>
                <Input type="select" name="PI_branch"   id="PIb_branch" onChange={handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup id="b_emp">
                <Label for="b_employ">Branch</Label>
                <Input type="select" name="PI_employment"   id="PIb_employ" onChange={handleChange}>
                  <option>Active</option>
                  <option>Inactive</option>
                </Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup id="marital">
                <Label for="b_marital">Marital Status</Label>
                <Input type="select" name="PI_marital"   id="PIb_marital" onChange={handleChange}>
                  <option>Married</option>
                  <option>Unmarried</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <FormGroup id="role">
            <Label for="b_role">Role</Label>
            <Input type="select" name="PI_role"   id="PIb_role" onChange={handleChange}>
              <option>Manager</option>
              <option>User</option>
            </Input>
          </FormGroup>
          
          <div id="personalAppendBlock">

          </div>
          <FormGroup>
          <CustomInput type="checkbox" id="promoteManager" label="Promote as Manager"/>
          </FormGroup>
        </Form>
        </div>
      </Collapse>
    </div>
  );
 
}

export default TogglePersonal