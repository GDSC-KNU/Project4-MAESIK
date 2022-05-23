import React from "react";
import styled from "styled-components";

const RefreshButton = styled.button`
  background-color: #94d8c4;
  width: 120px;
  height: 50px;
  font-size: 1.2rem;
  border-radius: 10px;
  position: fixed;
  right: 13%;
  box-shadow: 1px 1px 1px 1px gray;
  cursor: pointer;
  :hover {
    background-color: #679789;
    color: white;
  }
`;

const RefreshBtn = () => {
  return <RefreshButton>Refresh</RefreshButton>;
};

export default RefreshBtn;
