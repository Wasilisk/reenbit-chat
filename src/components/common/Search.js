/* node-modules */
import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai";

/* components */
import InputField from "./InputField";

const SearchContainer = styled.div`
  height: 40px;
  background-color: white;
  border: 2px solid #dbddec;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin: 10px;

  svg {
    margin-left: 20px;
    fill: #a6a6a6;
  }
`

const Search = ({value, setValue}) => {
    const OnChangeValue = (e) => {
        setValue(e.target.value);
    }

    return (
        <SearchContainer>
            <AiOutlineSearch/>
            <InputField type="text" value={value} onChange={OnChangeValue} placeholder="Search or start new chat"/>
        </SearchContainer>
    );
};

export default Search;