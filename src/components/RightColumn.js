/* node-modules */
import {useEffect} from 'react';
import {useOutletContext, useParams} from "react-router-dom";
import styled from "styled-components";
import {MdMenu} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";

/* hooks */
import useMediaQuery from "../hooks/useMediaQuery";

/* store */
import {resetUnreadMessages, selectChatById} from "../store/slices/chatsSlices";

/* components */
import Container from "./common/Container";
import ProfileInfo from "./common/ProfileInfo";
import MessageInput from "./message/MessageInput";
import Flex from "./common/Flex";
import MessageList from "./message/MessageList";
import DrawerButton from "./drawer/DrawerButton";

const ChatContainer = styled.div`
  width: 100%;
  min-width: 65vw;
  height: auto;
  display: flex;
  flex-direction: column;
`

const RightColumn = () => {
    let {chatId} = useParams();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useOutletContext();
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const {contactInfo, messages} = useSelector((state) => selectChatById(state, chatId))

    const {userName, imageUrl, id} = contactInfo;

    useEffect(() => {
        dispatch(resetUnreadMessages({chatId}))
    }, [messages])

    return (
        <ChatContainer isOpen={isOpen}>
            <Container height="10vh" borderBottom>
                <Flex flexDirection="row">
                    {
                        isDesktop
                            ? null
                            : <DrawerButton onClick={() => setIsOpen(true)}><MdMenu/></DrawerButton>
                    }
                    <ProfileInfo userName={userName} imageUrl={imageUrl}/>
                </Flex>
            </Container>
            <MessageList
                messages={messages}
                contactInfo={contactInfo}
            />
            <Container height="10vh" borderTop>
                <MessageInput contactId={id}/>
            </Container>
        </ChatContainer>
    );
};

export default RightColumn;