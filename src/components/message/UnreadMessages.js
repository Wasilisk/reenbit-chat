/* node-modules */
import styled from "styled-components";
import {BiMessageDetail} from "react-icons/bi";


export const UnreadMessagesContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
  margin-top: 5px;
  background-color: #f5f5f5;

  svg {
    margin-right: 5px;
  }
  p {
    margin: 0;
  }
`

const UnreadMessages = ({unreadMessages}) => {
    return (
        <UnreadMessagesContainer>
            <BiMessageDetail/>
            <p>{unreadMessages}</p>
        </UnreadMessagesContainer>
    );
};

export default UnreadMessages;