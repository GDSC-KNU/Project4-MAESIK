import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../modal";
import SideBar from "../modules/SideBar";
import RankInfo from "../modules/RankInfo";
import RefreshBtn from "../modules/RefreshBtn";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #8f6da6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentDiv = styled.div`
  width: 95%;
  height: 90%;
  background-color: white;
  border-radius: 12px;
  display: flex;
  overflow: hidden;
`;

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
const MainTitle = styled.div`
  width: 100%;
  height: 15%;
  font-size: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BlackStrike = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 2px;
  background-color: #000000;
`;

const MainUpperDiv = styled.div`
  width: 80%;
  height: 24%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const MyProfilePic = styled.div`
  width: 13vh;
  height: 13vh;
  border-radius: 50%;
  background-color: lightgrey;
`;
const MyProfileName = styled.div`
  font-size: 1.2rem;
  margin-left: 15px;
  // margin: 10vh 0 0 0;
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 18px;
    color: #7b7b7b;
  }
`;

const GithubContribution = styled.div`
  height: 30%;
  width: 80%;
  margin: 0vh auto;
  background-color: lightgrey;
`;

function MyPage() {
  const [ModalState, setModalState] = useState(true);
  function onModalClose() {
    setModalState(false);
  }
  return (
    <Div className="Home">
      <ContentDiv>
        <SideBar />
        <MainDiv>
          <MainTitle>내 정보</MainTitle>
          <MainUpperDiv>
            <MyProfilePic></MyProfilePic>
            <MyProfileName>
              <h1>Kim Nahyeong</h1>
              <p>lamknh</p>
            </MyProfileName>
            <RefreshBtn />
          </MainUpperDiv>
          <BlackStrike />
          <RankInfo />
          <GithubContribution />
        </MainDiv>
      </ContentDiv>
      {ModalState ? (
        <div
          style={{ zIndex: "1000", position: "absolute", top: 0 }}
          onClick={onModalClose}
        >
          <Modal></Modal>
        </div>
      ) : null}
    </Div>
  );
}

export default MyPage;
