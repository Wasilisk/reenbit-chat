import styled from "styled-components";

const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  p {
    text-align: center;
    padding: 10px;
    border-radius: 30px;
    background-color: white;
    color: #757575;
    margin: 0;
  }
`

const NewChatLabel = ({userName}) => {
    return (
        <LabelContainer>
            <p>Start new chat with {userName}</p>
        </LabelContainer>
    );
};

export default NewChatLabel;