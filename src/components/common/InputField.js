import styled from "styled-components";

const InputField = styled.input`
  width: 90%;
  border: none;
  outline: none;
  padding-left: 10px;
  margin-right: 10px;

  &::placeholder {
    color: #a6a6a6;
  }
  &:focus {
    outline: none;
  }
`

export default InputField;
