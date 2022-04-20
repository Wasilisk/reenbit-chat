import { useFormik } from 'formik';
import React from 'react';
import {login} from "../store/slices/authSlice";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import Input from "./Input";
import LoginButton from "./LoginButton";
import {useNavigate} from "react-router-dom";

const Form = styled.form`
  width: 100%;
display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
        },
        onSubmit: values => {
            dispatch(login({...values, imageUrl: "http://www.rosglasrecovery.com/wp-content/uploads/2018/03/male.jpg"}))
            navigate("/chat");
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Input
                name="userName"
                type="text"
                placeholder="Enter username"
                onChange={formik.handleChange}
                value={formik.values.userName}
            />
            <Input
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <LoginButton type="submit">Login</LoginButton>
        </Form>
    );
};

export default LoginForm;