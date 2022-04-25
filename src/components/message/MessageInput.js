/* node-modules */
import {useState} from 'react';
import {MdOutlineSend} from "react-icons/md";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

/* store */
import {selectUserId} from "../../store/slices/authSlice";
import {addNewMessage, getNewMessage} from "../../store/slices/chatsSlices";

/* components */
import InputField from "../common/InputField";

const MessageInputContainer = styled.div`
  height: 40px;
  background-color: white;
  border: 2px solid #dbddec;
  border-radius: 30px;
  margin: auto 20px auto 20px;

  form {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 20px;

    button {
      background: none;
      outline: none;
      border: none;
      cursor: pointer;

      svg {
        height: 20px;
        width: 20px;
        fill: #a6a6a6;
      }
    }
  }
`

const MessageInput = ({contactId}) => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);

    const onHandleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewMessage({
            from: userId,
            to: contactId,
            value: value,
        }))
        setTimeout( () => {
            dispatch(getNewMessage({
                from: contactId,
                to: userId,
            }))
        }, 12000)
        setValue('');
    }
    return (
        <MessageInputContainer>
            <form onSubmit={handleSubmit}>
                <InputField value={value} onChange={onHandleChange} placeholder="Type your message" required/>
                <button type="submit">
                    <MdOutlineSend/>
                </button>
            </form>
        </MessageInputContainer>
    );
};

export default MessageInput;