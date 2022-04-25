import styled from "styled-components";

const ChatItemInfo = styled.div`
  height: 60px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  .message-time {
    color: #757575;
    font-size: 11px;
    margin: 0;
  }

  @media (max-width: 1024px) {
    .message-time {
      font-size: 9px;
    }
  }
`

export default ChatItemInfo;