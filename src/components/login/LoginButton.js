import styled from "styled-components";

const LoginButton = styled.button`
  width: 90%;
  height: 30px;
  border-radius: 20px;
  border: none;
  background-color: #7952b3;
  color: white;
  font-family: 'Rubik', sans-serif;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`

export default LoginButton;