import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(74, 25, 82, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalDiv = styled.div`
  width: 30%;
  height: 70%;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
`;
const Title = styled.div`
  border-bottom: black 1px solid;
  text-align: center;
  padding: 20px 0;
  font-size: 35px;
  font-weight: light;
`;
const Cancel = styled.h1``;

const Logo = styled.img`
  width: 40%;
  height: 40%;
  text-align: center;
`;
const LoginButton = styled.button`
  width: 10vw;
  height: 7vh;
  background-color: #3ac693;
  border-radius: 15px;
  color: white;
  font-size: 20px;
  margin-top: 10px;
`;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
`;

function Modal() {
  return (
    <Div>
      <ModalDiv>
        <Title>로그인</Title>
        <Contents>
          <Logo src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
          <LoginButton>Login</LoginButton>
        </Contents>
      </ModalDiv>
    </Div>
  );
}

export default Modal;
