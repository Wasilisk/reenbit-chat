import styled from "styled-components";

const ChatItemText = styled.div`
  width: 100%;
  margin-left: 10px;

  p {
    margin: 2px;
    font-size: 14px;
  }

  p:last-child {
    text-overflow: ellipsis;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 3.6em;
    line-height: 1.8em;
    max-width: 365px;
    color: ${({unreadMessages}) => unreadMessages ? "black" : "#757575"};
  }
`

export default ChatItemText;