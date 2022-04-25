import styled from "styled-components";

const Flex = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection || "column"};
  align-items: ${({alignItems}) => alignItems || "none"};
`

export default Flex;
