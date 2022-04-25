import styled from "styled-components";

const Drawer = styled.div`
  height: 100vh;
  width: 100%;
  transition: all 0.3s ease-in-out;
  transform: ${({isOpen,isChatSelected}) => isOpen || !isChatSelected ? "translate(0)" : "translate(-100%)"};
  position:absolute;
`
export default Drawer;