/* node-modules */
import styled from "styled-components";

/* components */
import Avatar from "./Avatar";

const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 10px 20px;
  
  .username {
    margin-left: 10px;
  }
`

const ProfileInfo = ({userName, imageUrl}) => {

    return (
        <ProfileInfoContainer>
            <Avatar src={imageUrl} alt="userAvatar"/>
            <p className="username">{userName}</p>
        </ProfileInfoContainer>
    );
};

export default ProfileInfo;