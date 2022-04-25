/* node-modules */
import {useFormik} from 'formik';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import * as Yup from 'yup';

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

const LoginSchema = Yup.object().shape({
    userName: Yup.string()
        .min(6, 'Too short username!')
        .required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
});

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
        },
        validationSchema: LoginSchema,
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
                placeholder={
                    formik.errors.userName ?
                        formik.errors.userName
                        : "Enter username"
                }
                error={formik.errors.userName}
                onChange={formik.handleChange}
                value={formik.values.userName}
            />
            <FormInput
                name="email"
                type="email"
                placeholder={
                    formik.errors.email ?
                        formik.errors.email
                        : "Enter email"
                }
                error={formik.errors.email}
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <LoginButton type="submit">Login</LoginButton>
        </Form>
    );
};

export default LoginForm;