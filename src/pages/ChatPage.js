/* node-modules */
import {useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

/* hooks */
import useMediaQuery from "../hooks/useMediaQuery";

/* components */
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import LeftColumn from "../components/LeftColumn";
import Drawer from "../components/drawer/Drawer";

const ChatPage = () => {
    const {chatId} = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 898px)');

    return (
        <Flex>
            <Flex flexDirection="row">
                {
                    isDesktop
                        ? <LeftColumn/>
                        : <Drawer isOpen={isOpen} isChatSelected={chatId}>
                            <LeftColumn setIsOpen={setIsOpen}/>
                            <Container height="5vh" borderTop/>
                        </Drawer>
                }
                {
                    chatId
                        ? <Outlet context={[isOpen, setIsOpen]}/>
                        : <Container height="95hv" minWidth="65vw"/>
                }
            </Flex>
            <Container height="5vh" borderTop/>
        </Flex>
    );
};

export default ChatPage;