import styled from "styled-components";
import { useState } from "react";
import AuthInput from "../Input/AuthInput"
import AuthButton from "../Button/AuthButton"

const MainAuthArea1 = styled.div`
text-align: center;
background-color: grey;
padding: 1vw;
height: 70%;
width: 50%;
margin-left: 25vw;
margin-top: 10vh;

`

const AuthH = styled.div`
display: grid;
color: blueviolet;
`


const Auth = (props) => {
    function Authorizate()
{
    props.isAuth(true)
    window.location.href="/main"
}
    return(
        <MainAuthArea1>
        <AuthH>Authorization</AuthH>
        <AuthInput placeholder="Input login" label="Login" type="login"/>
        <AuthInput placeholder="Input password" label="Password" type="password"/>
        <button onClick={Authorizate}>Авторизация</button>
        </MainAuthArea1>
    );
}

export  {Auth};