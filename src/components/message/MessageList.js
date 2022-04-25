/* node-modules */
import React, {useEffect, useRef} from 'react';
import styled from "styled-components";

/* components */
import Message from "./Message";
import NewChatLabel from "../common/NewChatLabel";

const MessageListContainer = styled.div`
  width: auto;
  height: 72vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  -ms-overflow-style: none;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  
  & > div {
    margin-bottom: 20px;
  }
  & > div:last-child {
    margin: 0;
  }
  
  .flex-end {
    flex: 1 1 auto;
  }
`

const MessageList = ({messages, contactInfo}) => {
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
    }

    useEffect(scrollToBottom, [messages])

    return (
        <MessageListContainer>
            <div className="flex-end"></div>
            {
                messages.length
                    ? messages.map(message => <Message
                        key={message.id}
                        contactId={contactInfo.id}
                        imageUrl={contactInfo.imageUrl}
                        message={message}
                    />)
                    : <NewChatLabel userName={contactInfo.userName}/>
            }
            <div ref={messagesEndRef}/>
        </MessageListContainer>
    );
};

export default MessageList;
