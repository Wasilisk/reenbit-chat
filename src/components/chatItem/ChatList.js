import styled from "styled-components";

const ChatList = styled.div`
  width: auto;
  height: 80vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  h2 {
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 20px;
    text-align: left;
    background-color: white;
    color: #3fc0f6;
  }
`

export default ChatList;