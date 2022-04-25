/* node-modules */
import moment from "moment";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";

/* hooks */
import useMediaQuery from "../../hooks/useMediaQuery";

/* components */
import Avatar from "../common/Avatar";
import ChatItemText from "./ChatItemText";
import ChatItemInfo from "./ChatItemInfo";
import UnreadMessages, {UnreadMessagesContainer} from "../message/UnreadMessages";

const ChatItemContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({isActive}) => isActive ? "#f5f5f5" : "white"};
  border-bottom: 2px solid #ebebeb;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

  &:hover ${UnreadMessagesContainer} {
    background-color: white;
  }

  &:last-child {
    border: none;
  }
`


const ChatItem = ({chatInfo, setIsOpen}) => {
    const navigate = useNavigate();
    let {chatId} = useParams();
    const isDesktop = useMediaQuery('(min-width: 898px)');

    const {id, contactInfo, unreadMessages, lastMessage} = chatInfo
    const {userName, imageUrl} = contactInfo;


    const redirectToChat = () => {
        if(chatId && !isDesktop) {
            setIsOpen(false)
        }
        navigate(`/chat/${id}`);
    }

    return (
        <ChatItemContainer
            isActive={chatId === id}
            onClick={redirectToChat}
            unreadMessages={unreadMessages}
        >
            <Avatar src={imageUrl} alt="avatar"/>
            <ChatItemText>
                <p>{userName}</p>
                <p>{
                    lastMessage
                        ? lastMessage.value
                        : `Start chat with ${userName}`
                }</p>
            </ChatItemText>
            <ChatItemInfo>
                <p className="message-time">{moment().format('ll')}</p>
                {
                    unreadMessages
                        ? <UnreadMessages unreadMessages={unreadMessages}/>
                        : null
                }
            </ChatItemInfo>
        </ChatItemContainer>
    );
};

export default ChatItem;