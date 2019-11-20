import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FormGroup, Label, Input } from "reactstrap";
const ModalExample = props => {
  const { buttonLabel, className , handleLabel,newLabelIdMention,handleChange} = props;

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const toggle2=()=>{
    setModal(!modal);
    handleLabel(newLabelIdMention);
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Create New Label
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Create a new field</ModalHeader>
        <ModalBody>
          <React.Fragment >
          <FormGroup>
            <Label for="newLabel">Enter Name of the Label:</Label>
            <Input
              type="text"
              name="text"
              id="newLabel"
              placeholder=""
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="newLabelType">Select Type of the Label</Label>
            <Input type="select" name="select" id="newLabelType">
              <option>Text</option>
              <option>Email</option>
              <option>Number</option>
              <option>Date</option>
              <option>Reference Link</option>
            </Input>
          </FormGroup>
          </React.Fragment>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" id={newLabelIdMention} onClick={toggle2}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
