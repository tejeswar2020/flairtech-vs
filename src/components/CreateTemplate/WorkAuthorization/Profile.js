import React,{useState} from 'react'
import CustomProfile from './CustomProfile'
import {
  FormGroup,
  Form,
  CustomInput,
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
        Work Authorization
      </Button>
      <Collapse isOpen={isOpen} className="m-1">
        <div id="workauthform">
      <Form>
          <Row>
            <Col>
              <CustomProfile
                label="Type"
                id="WAtype"
                extra="WA"
                name="WA_TYPE"
                placeholder=""
                handleChange={handleChange}
              />
            </Col>
            <Col>
              <CustomProfile
                label="Number"
                id="WAnum"
                extra="WA"
                name="WA_NUMBER"
                placeholder=""
                handleChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
            <FormGroup id="WA_issuedate">
            <Label htmlFor="WAb_issuedate">Issue Date:</Label>
            <input type="date" className="rounded" name="WA_ISSUEDATE" handleChange={handleChange} id="WAb_issuedate"/>   
            </FormGroup>
            </Col>
            <Col>
            <FormGroup id="WA_expdate">
            <Label htmlFor="WAb_expdate">Exp Date:</Label>
            <input type="date" className="rounded" name="WA_EXPDATE" handleChange={handleChange} id="WAb_expdate"/>   
            </FormGroup>

            </Col>
          </Row>
          <Row>
            <Col>
              <CustomProfile
                label="Vendor Phone"
                id="WAvendorphone"
                extra="WA"
                name="WA_VENDORPHONE"
                placeholder=""
                handleChange={handleChange}
              />
            </Col>
            <Col>
            <CustomProfile
                label="Vendor Mail:"
                id="WAvendormail"
                extra="WA"
                name="WA_VENDORMAIL"
                placeholder=""
                handleChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
          <Col>
              <CustomProfile
                label="From"
                id="WAfrom"
                name="WA_FROM"
                placeholder=""
                handleChange={handleChange}
              />
            </Col>
            <Col>
              <CustomProfile
                label="To"
                id="WAto"
                name="WA_TO"
                placeholder=""
                handleChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col>
            <FormGroup id="WAfile">
            <Label for="file">File Browser</Label>
            <CustomInput type="file" id="file" handleChange={handleChange} name="WA_FILE" />
            </FormGroup>
            </Col>
            <Col>
            </Col>
          </Row>
          <div id="workAuthAppendBlock">

        </div>
        </Form>
          
          </div>
      </Collapse>
    </div>
  );
 
}

export default Profile