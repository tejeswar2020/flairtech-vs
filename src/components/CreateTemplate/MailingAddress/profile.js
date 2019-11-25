import React,{useState} from 'react'
import CustomProfile from './customProfile'
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
function TogglePersonal(){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const handleChange=()=>{

  }
  return (
    <div>
      <Button color="secondary" onClick={toggle} className="w-100 m-1">
        Mailing Address
      </Button>
      <Collapse isOpen={isOpen} className="m-1">
      <div id="mailingform">

      <Form>
          <Row>
            <Col>
              <CustomProfile
                label="Line1"
                id="MA_LINE1"
                placeholder=""
                name="MA_LINE1"
              />
            </Col>
            <Col>
              <CustomProfile
                label="Line2"
                id="MA_LINE2"
                placeholder=""
                name="MA_LINE2"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomProfile
                label="City"
                id="MA_CITY"
                placeholder=""
                name="MA_CITY"
              />
            </Col>
            <Col>
              <CustomProfile
                label="State"
                id="MA_STATE"
                placeholder=""
                name="MA_STATE"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomProfile
                label="Zip"
                id="MA_ZIP"
                placeholder=""
                name="MA_ZIP"
              />
            </Col>
            <Col>
              <CustomProfile
                label="Country"
                id="MA_COUNTRY"
                placeholder=""
                name="MA_COUNTRY"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomProfile
                label="From"
                id="MA_FROM"
                placeholder=""
                name="MA_FROM"
              />
            </Col>
            <Col>
              <CustomProfile
                label="To"
                id="MA_TO"
                placeholder=""
                name="MA_TO"
              />
            </Col>
          </Row>
          <div id="mailAppendBlock">

          </div>
        </Form>
        
        </div>
      </Collapse>
    </div>
  );
 
}

export default TogglePersonal