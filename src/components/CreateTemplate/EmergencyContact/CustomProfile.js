import React from 'react'
import { FormGroup,Label,Input } from 'reactstrap'
function PersonalData(props){
  const {label,id,placeholder,name,handleChange}=props;
  return(
    <FormGroup id={id}>
    <Label htmlFor="firstName">{label}:</Label>
    <Input
      type="text"
      placeholder={placeholder}
      id={id}
      name={name}
      onChange={handleChange}
    />
    &nbsp;&nbsp;&nbsp;&nbsp;
  </FormGroup>
  )
}

export default PersonalData