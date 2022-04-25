/* node-modules */
import styled from "styled-components";
import moment from "moment";

/* components */
import Flex from "../common/Flex";
import Avatar from "../common/Avatar";

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({isOwnMessage}) => isOwnMessage ? "flex-end" : "flex-start"};
  margin-right: 10px;
  .message-text {
    max-width: 600px;
    background-color: ${({isOwnMessage}) => isOwnMessage ? "#e0e0e0" : "#3c4153"};
    border-radius: 30px;
    padding: 10px 20px 10px 20px;
    margin-left: 10px;

    p {
      color: ${({isOwnMessage}) => isOwnMessage ? "black" : "white"};
      margin: 0;
    }
  }
  
  .message-time {
    margin: 5px 0 0 30px;
    font-size: 12px;
    text-align: ${({isOwnMessage}) => isOwnMessage ? "right" : "left"};
    color: #757575;
  }
`

const Message = ({message, imageUrl, contactId}) => {
    const isOwnMessage = message.from !== contactId;

    return (
        <Flex flexDirection="row">
            {
                !isOwnMessage
                    ? <Avatar size="40px" src={imageUrl}/>
                    : null
            }
                <Flex>
                    <MessageContainer isOwnMessage={isOwnMessage}>
                        <div className={"message-text"}>
                            <p>{message.value}</p>
                        </div>
                        <div className="message-time">
                            <p>
                                {
                                    moment(message.createdAt).format("MM/DD/YY LT")
                                }
                            </p>
                        </div>
                    </MessageContainer>
                </Flex>
        </Flex>
    );
};

export default Message;