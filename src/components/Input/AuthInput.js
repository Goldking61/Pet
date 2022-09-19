
import React from "react";
import {Container, InputField, Label} from './styles'

const Input = ({
type,
name,
label,
placeholder
}) =>{
    return(
        <Container>
            <Label>{label}</Label>
            <InputField placeholder={placeholder} type={type} name={name} />
        </Container>
    )
};

export default Input;