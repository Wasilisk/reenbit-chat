/* node-modules */
import {useDeferredValue, useState} from 'react';
import {useSelector} from "react-redux";
import {filter} from "lodash";

/* store */
import {selectAllContacts} from "../store/slices/chatsSlices";
import {selectUserInfo} from "../store/slices/authSlice";

/* components */
import Container from "./common/Container";
import ProfileInfo from "./common/ProfileInfo";
import Search from "./common/Search";
import ChatList from "./chatItem/ChatList";
import ChatItem from "./chatItem/ChatItem";

const LeftColumn = ({setIsOpen}) => {
    const [searchValue, setSearchValue] = useState("");
    const deferredValue = useDeferredValue(searchValue);
    const contacts = useSelector(selectAllContacts)
    const {userName, imageUrl} = useSelector(selectUserInfo);
    const filteredChats = filter(contacts,contact => contact.contactInfo.userName.toLowerCase().includes(deferredValue.toLowerCase()))

    return (
        <Container height="95vh" borderRight>
            <Container borderBottom>
                <ProfileInfo userName={userName} imageUrl={imageUrl}/>
                <Search value={searchValue} setValue={setSearchValue}/>
            </Container>
            <ChatList>
                <h2>Chats</h2>
                {
                    filteredChats.map(chat => <ChatItem
                        key={chat.id}
                        chatInfo={chat}
                        setIsOpen={setIsOpen}
                    />)
                }
            </ChatList>
        </Container>
    );
};

export default LeftColumn;