import React from 'react';
import {useDispatch} from "react-redux";
import {login} from "../store/slices/authSlice";
import GoogleLogin from "react-google-login";
import {ImGoogle} from "react-icons/im";
import styled from "styled-components";

const GoogleButton = styled.button`
  width: 90%;
  height: 30px;
  border-radius: 20px;
  border: none;
  background-color: #7952b3;
  color: white;
  font-family: 'Rubik', sans-serif;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    margin-right: 5px;
  }

  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`

const GoogleLoginButton = () => {
    const dispatch = useDispatch();

    const handleLogin = async (googleData) => {
        const {name: userName, email, imageUrl} = googleData.profileObj;

        dispatch(login({userName, email, imageUrl}))
    };


    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={renderProps => (
                <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}><ImGoogle/>Log in with Google</GoogleButton>
            )}
            onSuccess={handleLogin}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleLoginButton;