import React, { useState } from "react";
import CustomProfile from "./CustomProfile";
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
function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const handleChange=()=>{

  }
  return (
    <div>
      <Button color="secondary" onClick={toggle} className="w-100 m-1">
        Employment History
      </Button>
      <Collapse isOpen={isOpen} className="m-1">
        <div id="employmentform">

        <Form>
          <Row>
            <Col>
              <CustomProfile label="Client" id="client" placeholder="" name="EH_CLIENT" handleChange={handleChange}/>
            </Col>
            <Col>
              <CustomProfile
                label="Client Address"
                id="clientaddress"
                name="EH_CLIENTADD"
                placeholder=""
                handleChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomProfile
                label="Your working Client Email"
                id="clientmail"
                name="EH_CLIENTMAIL"
                placeholder=""
                handleChange={handleChange}
              />
            </Col>
            <Col>
              <CustomProfile
                label="Vendor Name"
                id="vendorname"
                name="EH_VENDORNAME"
                placeholder=""
                handleChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomProfile
                label="Vendor Phone"
                id="vendorphone"
                name="EH_VENDORPHONE"
                placeholder=""
                handleChange={handleChange}
              />
            </Col>
            <Col>
              <CustomProfile
                label="Vendor Mail"
                id="vendormail"
                name="EH_VENDORMAIL"
                placeholder=""
                handleChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomProfile label="From" id="vendorfrom" name="EH_VENDORFROM" placeholder="" handleChange={handleChange}/>
            </Col>
            <Col>
              <CustomProfile label="To" id="vendorto" name="EH_VENDORTO" placeholder="" handleChange={handleChange}/>
            </Col>
          </Row>
          <div id="employmentAppendBlock">

          </div>
        </Form>
        </div>
      </Collapse>
    </div>
  );
}

export default Profile;
