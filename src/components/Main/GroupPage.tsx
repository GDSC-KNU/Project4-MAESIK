import React, { useState } from "react";
import styled from "styled-components";
import InviteModal from "../modal/inviteModal";
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

const InfoDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
const InfoTitle = styled.div`
  width: 100%;
  height: 15%;
  font-size: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

const MemberList = styled.div`
  color: white;
  font-size: 1.5rem;
  padding-top: 35px;
  padding-bottom: 35px;
  border-bottom: solid 1px white;
  width: 85%;
  margin: 0 auto;
`;

const Member = styled.div`
  color: #b5b5b5;
  font-size: 1.3rem;
  padding-top: 20px;
`;

const InfoContent = styled.div`
  width: 80%;
  height: 24%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const BlackStrike = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 2px;
  background-color: #000000;
`;

const GroupProfile_ = styled.div`
  border-radius: 50%;
  background-color: green;
  width: 13vh;
  height: 13vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
const GroupName = styled.div`
  font-size: 1.2rem;
  margin-left: 15px;
`;

const InviteButton = styled.button`
  background-color: #94d8c4;
  width: 120px;
  height: 50px;
  font-size: 1.2rem;
  border-radius: 10px;
  position: fixed;
  right: 25%;
  box-shadow: 1px 1px 1px 1px gray;
`;

const CommitDays = styled.div`
  position: fixed;
  right: 10%;
  font-size: 1.2rem;
  h1 {
    font-size: 20px;
  }
  p {
    font-size: 18px;
    color: #7b7b7b;
  }
`;
const CommitDatas = styled.div`
  width: 80%;
  height: 300px;
  background-color: #535353;
  margin: 0 auto;
  border-radius: 10px;
  overflow: scroll;
`;
const CommitData = styled.div`
  color: white;
  font-size: 1.2rem;
  width: 90%;
  margin: 15px auto;
`;

function GroupPage() {
  const [invite, setInvite] = useState(false);
  function onInviteModal() {
    setInvite(true);
  }
  function onCloseInviteModal() {
    setInvite(false);
  }
  return (
    <Div className="App">
      {invite ? <InviteModal close={onCloseInviteModal}></InviteModal> : null}
      <ContentDiv>
        <SideBar />
        <InfoDiv>
          <InfoTitle>그룹 정보</InfoTitle>
          <InfoContent>
            <GroupProfile_>그룹 프로필</GroupProfile_>
            <GroupName>
              <h1>그룹명</h1>
              <p>그룹소개</p>
            </GroupName>
            <InviteButton onClick={onInviteModal}>Invite</InviteButton>
            <RefreshBtn />
          </InfoContent>
          <BlackStrike />
          <RankInfo />
          <CommitDatas>
            <CommitData>
              이현지(hyunji-lee99)님이 TIL 레포에 커밋을 올렸습니다.{" "}
            </CommitData>
            <CommitData>
              김나형(lamknh)님이 KNU GDSC 레포에 커밋을 올렸습니다.{" "}
            </CommitData>
            <CommitData>
              이현지(hyunji-lee99)님이 TIL 레포에 커밋을 올렸습니다.{" "}
            </CommitData>
            <CommitData>
              김나형(lamknh)님이 KNU GDSC 레포에 커밋을 올렸습니다.{" "}
            </CommitData>
            <CommitData>
              이현지(hyunji-lee99)님이 TIL 레포에 커밋을 올렸습니다.{" "}
            </CommitData>
            <CommitData>
              김나형(lamknh)님이 KNU GDSC 레포에 커밋을 올렸습니다.{" "}
            </CommitData>
            <CommitData>
              이현지(hyunji-lee99)님이 TIL 레포에 커밋을 올렸습니다.{" "}
            </CommitData>
            <CommitData>
              김나형(lamknh)님이 KNU GDSC 레포에 커밋을 올렸습니다.{" "}
            </CommitData>
            <CommitData>
              이현지(hyunji-lee99)님이 TIL 레포에 커밋을 올렸습니다.{" "}
            </CommitData>
            <CommitData>
              김나형(lamknh)님이 KNU GDSC 레포에 커밋을 올렸습니다.{" "}
            </CommitData>
            <CommitData>
              이현지(hyunji-lee99)님이 TIL 레포에 커밋을 올렸습니다.{" "}
            </CommitData>
            <CommitData>
              김나형(lamknh)님이 KNU GDSC 레포에 커밋을 올렸습니다.{" "}
            </CommitData>
            <CommitData>
              이현지(hyunji-lee99)님이 TIL 레포에 커밋을 올렸습니다.{" "}
            </CommitData>
            <CommitData>
              김나형(lamknh)님이 KNU GDSC 레포에 커밋을 올렸습니다.{" "}
            </CommitData>
            <div style={{ textAlign: "right" }}></div>
          </CommitDatas>
        </InfoDiv>
      </ContentDiv>
    </Div>
  );
}

export default GroupPage;
