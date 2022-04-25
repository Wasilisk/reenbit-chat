import styled from "styled-components";

const Avatar = styled.img`
  width: ${({size}) => size || "50px"};
  height: ${({size}) => size || "50px"};
  border-radius: 100%;
  
`

export default Avatar;