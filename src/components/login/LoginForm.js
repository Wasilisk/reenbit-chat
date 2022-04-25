/* node-modules */
import { useFormik } from 'formik';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import styled from "styled-components";

/* store */
import {login} from "../../store/slices/authSlice";

/* components */
import FormInput from "./FormInput";
import LoginButton from "./LoginButton";

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
            dispatch(login(values))
            navigate("/chat");
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <FormInput
                name="userName"
                type="text"
                placeholder="Enter username"
                onChange={formik.handleChange}
                value={formik.values.userName}
            />
            <FormInput
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