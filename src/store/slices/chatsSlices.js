import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit'
import {v4 as uuid} from 'uuid';
import answerApi from "../../api";

export const getNewMessage = createAsyncThunk(
    "chats/getNewMessage",
    async ({from, to}, thunkApi) => {
        const {data} = await answerApi.getContactAnswer()
        return {
            from,
            to,
            value: data.value
        }
    }
)

export const chatsSlice = createSlice({
    name: 'chats',
    initialState: [
        {
            id: "94a9d11e-b7f9-4b43-93e1-97cc8a5d3612",
            contactInfo: {
                id: "1f2a0548-a83f-423f-aad6-b00f543b8773",
                userName: "Denys Vekeryk",
                imageUrl: "https://i.pinimg.com/originals/35/cc/60/35cc6077af03da9d88bf14d5de6004f5.jpg"
            },
            unreadMessages: 0,
            messages: [
                {
                    id: 1,
                    from: "05442134-6f0c-4ae6-b0b4-bc76a82e3e91",
                    to: "1f2a0548-a83f-423f-aad6-b00f543b8773",
                    value: "It's a skateboarding penguin with a sunhat!",
                    createdAt: Date()
                },
                {
                    id: 2,
                    from: "1f2a0548-a83f-423f-aad6-b00f543b8773",
                    to: "05442134-6f0c-4ae6-b0b4-bc76a82e3e91",
                    value: "Green should have smelled more tranquil, but somehow it just tasted rotten.",
                    createdAt: Date()
                },
                {
                    id: 3,
                    from: "05442134-6f0c-4ae6-b0b4-bc76a82e3e91",
                    to: "1f2a0548-a83f-423f-aad6-b00f543b8773",
                    value: "The bug was having an excellent day until he hit the windshield",
                    createdAt: Date()
                },
                {
                    id: 4,
                    from: "1f2a0548-a83f-423f-aad6-b00f543b8773",
                    to: "05442134-6f0c-4ae6-b0b4-bc76a82e3e91",
                    value: "Every manager should be able to recite at least ten nursery rhymes backward.",
                    createdAt: Date()
                }

            ]
        },
        {
            id: "be7b9860-cdf9-43eb-a30e-3efc147c7ebd",
            contactInfo: {
                id: "45627d58-4843-4eb0-b847-24fe22705192",
                userName: "Andriy Zub",
                imageUrl: "https://thypix.com/wp-content/uploads/2021/10/grey-anime-profile-picture-thypix-114-700x700.jpg"
            },
            unreadMessages: 0,
            messages: [
                {
                    id: 5,
                    from: "05442134-6f0c-4ae6-b0b4-bc76a82e3e91",
                    to: "45627d58-4843-4eb0-b847-24fe22705192",
                    value: "Today I bought a raincoat and wore it on a sunny day.",
                    createdAt: Date()
                },
                {
                    id: 6,
                    from: "45627d58-4843-4eb0-b847-24fe22705192",
                    to: "05442134-6f0c-4ae6-b0b4-bc76a82e3e91",
                    value: "The thick foliage and intertwined vines made the hike nearly impossible",
                    createdAt: Date()
                },
                {
                    id: 7,
                    from: "05442134-6f0c-4ae6-b0b4-bc76a82e3e91",
                    to: "45627d58-4843-4eb0-b847-24fe22705192",
                    value: "Never underestimate the willingness of the greedy to throw you under the bus",
                    createdAt: Date()
                },
            ]
        },
        {
            id: "d673b86e-a35f-4ef8-b480-00aad5686df4",
            contactInfo: {
                id: "ff02d081-3feb-4664-b0cd-7d70831a6b8f",
                userName: "Ilona Maksymenko",
                imageUrl: "https://i.pinimg.com/originals/a9/73/ec/a973ecbae88a986061c51afa1f9a4d2f.jpg"
            },
            unreadMessages: 0,
            messages: []
        },
        {
            id: "e08eb0e2-6041-4002-a6f4-84ad12daa11d",
            contactInfo: {
                id: "34c12a87-fbc6-466b-9998-24570364061f",
                userName: "Vasyl Petryna",
                imageUrl: "https://pictures.telegram-store.com/channels/feiaqrcz18ttfdrjjfdergcjjl/1569_2021_06_24_1_.jpg"
            },
            unreadMessages: 0,
            messages: []
        },
        {
            id: "a326b0b8-1a33-459e-9d5c-c22331578c24",
            contactInfo: {
                id: "d906e03e-b119-4176-a842-df03cba625bb",
                userName: "Anatoliy Machkaniuk",
                imageUrl: "https://add-groups.com/uploads/mini/short/de/1644002174_img_20220204_211542_119.jpg",
            },
            unreadMessages: 0,
            messages: [
                {
                    id: 8,
                    from: "05442134-6f0c-4ae6-b0b4-bc76a82e3e91",
                    to: "d906e03e-b119-4176-a842-df03cba625bb",
                    value: "Today I bought a raincoat and wore it on a sunny day.",
                    createdAt: Date()
                },
                {
                    id: 9,
                    from: "d906e03e-b119-4176-a842-df03cba625bb" ,
                    to: "05442134-6f0c-4ae6-b0b4-bc76a82e3e91",
                    value: "The thick foliage and intertwined vines made the hike nearly impossible",
                    createdAt: Date()
                },
            ]
        },
        {
            id: "940d34df-3b5d-4a55-8e8e-186cdea11d02",
            contactInfo: {
                id: "536430c3-d039-4c7f-a30f-d84b61d8f62a",
                userName: "Stepan Kozych",
                imageUrl: "https://tengyart.ru/wp-content/uploads/2022/01/khazbando-v-nejroseti.jpg"
            },
            unreadMessages: 0,
            messages: []
        },
        {
            id: "611a4a33-ca48-437b-97fd-f14b94aa5b37",
            contactInfo: {
                id: "022cf55d-a222-4d50-a92d-739cccd7c675",
                userName: "Anya Yaremii",
                imageUrl: "https://cs14.pikabu.ru/post_img/2021/06/14/8/1623673435184039095.jpg"
            },
            unreadMessages: 0,
            messages: []
        },
        {
            id: "c9d4b120-cf3e-4808-9f46-eb77c98d730e",
            contactInfo: {
                id: "bb65ba8b-61a0-4021-9688-962a86f582a6",
                userName: "Arsen Mironov",
                imageUrl: "https://i.pinimg.com/736x/79/b8/6f/79b86fd6dbcccb640c372d0993e3083e.jpg"
            },
            unreadMessages: 0,
            messages: []
        },
    ],
    reducers: {
        addNewMessage: {
            reducer: (state, action) => {
                const receiverChat = state.filter(chat => chat.contactInfo.id === action.payload.to)[0]
                receiverChat.messages.push(action.payload);
            },
            prepare: (messageData) => {
                return {
                    payload: {
                        id: uuid(),
                        createdAt: Date(),
                        ...messageData
                    }
                }
            },
        },
        resetUnreadMessages: (state, action) => {
            const viewedChat = state.filter(chat => chat.id === action.payload.chatId)[0]
            viewedChat.unreadMessages = 0;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getNewMessage.fulfilled, (state, action) => {
            const senderChat = state.filter(chat => chat.contactInfo.id === action.payload.from)[0]
            senderChat.messages.push({
                ...action.payload,
                id: uuid(),
                createdAt: Date(),
            });
            senderChat.unreadMessages += 1;
        })
    },
})


export const selectAllContacts = (state) => state.chats.map(chat => {
    return {
        id: chat.id,
        contactInfo: chat.contactInfo,
        unreadMessages: chat.unreadMessages,
        lastMessage: chat.messages.slice(-1)[0]
    }
}).sort((a, b) => {
    return b.unreadMessages - a.unreadMessages;
}).sort((a, b) => {
    const dateA = new Date(a.lastMessage?.createdAt).getTime();
    const dateB = new Date(b.lastMessage?.createdAt).getTime();
    return dateB - dateA;
});
export const selectChatById = (state, chatId) => state.chats.filter(chat => chat.id === chatId)[0];

export const {addNewMessage, receiveMessage, resetUnreadMessages} = chatsSlice.actions;

export default chatsSlice.reducer