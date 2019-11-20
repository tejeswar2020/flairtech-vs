import React,{useState} from 'react'
import CustomProfile from './CustomProfile'
import {
  FormGroup,
  Form,
  Input,
  Label,
  Button,
  Collapse,
  Row,
  Col
} from "reactstrap";
function Profile(){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const handleChange=()=>{

  }
  return (
    <div>
      <Button color="secondary" onClick={toggle} className="w-100 m-1">
        Emergency Contact
      </Button>
      <Collapse isOpen={isOpen} className="m-1">
      <div id="emergencyform">
      <Form>
          <Row>
            <Col>
              <CustomProfile
                label="Name"
                id="e_name"
                placeholder=""
                name="EMC_name"
                handleChange={handleChange}
              />
            </Col>
            <Col>
              <CustomProfile
                label="Phone"
                id="e_phone"
                placeholder=""
                name="EMC_phone"
                handleChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomProfile
                label="Mail Id"
                id="e_mail"
                placeholder=""
                name="EMC_mail"
                handleChange={handleChange}
              />
            </Col>
            <Col>
             
            </Col>
          </Row>
          <div id="contactAppendBlock">

          </div>
        </Form>
      </div>
      </Collapse>
    </div>
  );
 
}

export default Profile