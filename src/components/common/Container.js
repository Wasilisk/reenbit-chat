import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: ${({width}) => width || "100%"};
  height: ${({height}) => height || "auto"};
  max-width: ${({maxWidth}) => maxWidth || "auto"};
  min-width: ${({minWidth}) => minWidth || "auto"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-bottom: ${({borderBottom}) => borderBottom ? "2px solid #ebebeb " : "none"};
  border-left: ${({borderLeft}) => borderLeft ? "2px solid #ebebeb " : "none"};
  border-top: ${({borderTop}) => borderTop ? "2px solid #ebebeb " : "none"};
  border-right: ${({borderRight}) => borderRight ? "2px solid #ebebeb " : "none"};
  box-sizing: border-box;
`
export default Container;