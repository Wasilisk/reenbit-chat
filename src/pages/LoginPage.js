import React from 'react';
import LoginForm from "../components/LoginForm";
import GoogleLogin from "../components/GoogleLoginButton";
import DividerWithText from "../components/DividerWithText";
import styled from "styled-components";
import {FaUserAlt} from  "react-icons/fa";

const LoginContainer = styled.div`
  margin: 0 auto;
  width: 320px;
  height: 300px;
  background-color: white;
  border-radius: 20px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const LoginHeader = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  background-color: #7952b3;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  h2 {
    color: white;
  }
  
  svg {
    color: white;
    margin-right: 5px;
  }
`

const Center = styled.div`
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`

const LoginPage = () => {
    return (
        <Center>
            <LoginContainer>
                <LoginHeader>
                    <FaUserAlt/>
                    <h2>Login</h2>
                </LoginHeader>
                <LoginForm/>
                <DividerWithText>Or</DividerWithText>
                <GoogleLogin/>
            </LoginContainer>
        </Center>
    );
};

export default LoginPage;