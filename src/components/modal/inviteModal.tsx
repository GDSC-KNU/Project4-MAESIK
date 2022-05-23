import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(74, 25, 82, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  position: absolute;
  top: 0;
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
const InviteButton = styled.button`
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

const Input = styled.input``;

interface CloseModal {
  close: Function;
}

function InviteModal(props: CloseModal) {
  const [githubId, setGithubId] = useState("");
  function onClose() {
    props.close();
  }
  return (
    <Div>
      <ModalDiv>
        <Title>그룹원 초대</Title>
        <Contents>
          <Input name="githubId"></Input>
          <InviteButton onClick={onClose}>Invite</InviteButton>
        </Contents>
      </ModalDiv>
    </Div>
  );
}

export default InviteModal;
