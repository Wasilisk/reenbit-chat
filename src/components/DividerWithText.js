import styled from "styled-components";

const DividerWithText = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  --text-divider-gap: 1rem;

  &::before, &::after {
    content: '';
    height: 1px;
    background-color: silver;
    flex-grow: 1;
  }

  &::before {
    margin-right: var(--text-divider-gap);
  }

  &::after {
    margin-left: var(--text-divider-gap);
  }
`

export default DividerWithText;