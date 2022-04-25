import styled from "styled-components";

const FormInput = styled.input`
  width: 80%;
  height: 30px;
  border-radius: 20px;
  font-family: 'Rubik', sans-serif;
  padding-left: 20px;
  padding-right: 20px;
  border: 2px solid #dbddec;
  outline: none;
  margin-bottom: 10px;
  &::placeholder {
    text-align: center;
  }
  &:focus {
    outline: none;
  }
`

export default FormInput;