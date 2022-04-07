import React from 'react';
import styled from 'styled-components'
// import {faRotateRight} from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Div=styled.div`
  width:100vw;
  height:100vh;
  background-color:#8F6DA6;
  display:flex;
  justify-content:center;
  align-items:center;
`
const ContentDiv=styled.div`
  width:95%;
  height:85%;
  background-color:white;
  border-radius:12px;
  display:flex;
  overflow:hidden;
`
const HeaderDiv=styled.div`
  width:12%;
  height:100%;
  background-color:#535353;
`
const MemberDiv=styled.div`
  width:12%;
  height:100%;
  border-left:solid 1px white;
  background-color:#535353;
  border-radius:0 12px 12px 0;
  text-align:center;
`
const Logo=styled.div`
  margin: 0 auto;
  width:70%;
  color:white;
  font-weight:bold;
  font-size:1.8rem;
  margin-top:10px;
`
const Profile=styled.div`
  border-radius:50%;
  width:90px;
  height:90px;
  background-color:lavender;
  margin:20px auto;
  display:flex;
  align-items:center;
  justify-content:center;
`
const GroudDiv=styled.div`
  height:50%;
  width:85%;
  margin:0 auto;
  overflow:scroll;
  border-top:solid 1px white;
`
const GroupProfile=styled.div`
  border-radius:50%;
  width:90px;
  height:90px;
  background-color:#f4f4c0;
  margin:20px auto;
  display:flex;
  align-items:center;
  justify-content:center;
`
const AddButton=styled.div`
  border-radius:50%;
  background-color:black;
  border:solid 1px black;
  width:90px;
  color:white;
  height:90px;
  margin:35px auto;
  display:flex;
  align-items:center;
  justify-content:center;
`

const MemberList=styled.div`
  color:white;
  font-size:1.5rem;
  padding-top:35px;
  padding-bottom:35px;
  border-bottom:solid 1px white;
  width:85%;
  margin:0 auto;
`

const Member=styled.div`
  color:#B5B5B5;
  font-size:1.3rem;
  padding-top:20px;
`
const InfoDiv=styled.div`
  width:76%;
`
const InfoTitle=styled.div`
  text-align:center;
  font-size:1.7rem;
  padding:35px 0;
`
const InfoContent=styled.div`
  width:85%;
  margin:0 auto;
  display:flex;
  align-items:center;
  border-bottom:solid 2px black;
  padding-bottom:30px;
`
const GroupProfile_=styled.div`
  border-radius:50%;
  background-color:green;
  width:90px;
  height:90px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
`
const GroupName=styled.div`
  font-size:1.2rem;
  margin-left:15px;
`
const RefreshButton=styled.button`
  background-color:#94D8C4;
  width:120px;
  height:50px;
  font-size:1.2rem;
  border-radius:10px;
  position:fixed;
  right:10%;
  box-shadow:1px 1px 1px 1px gray;
`
const Ranking=styled.div`
  margin:25px auto;
  width:85%;
  display:flex;
  align-items:center;
`
const Rank=styled.div`
  font-size:1.2rem;
`
const CommitDays=styled.div`
  position:fixed;
  right:10%;
  font-size:1.2rem;
`
const CommitDatas=styled.div`
  width:85%;
  height:300px;
  background-color:#535353;
  margin:0 auto;
  border-radius:10px;
  overflow:scroll;
`
const CommitData=styled.div`
  color:white;
  font-size:1.2rem;
  width:90%;
  margin:15px auto;
`
function GroupPage() {
  return (
    <Div className="App">
      <ContentDiv>
        <HeaderDiv>
          <Logo>🌲매일이 식목일</Logo>
          <Profile>프로필</Profile>
          <GroudDiv>
            <GroupProfile>그룹</GroupProfile>
            <GroupProfile>그룹</GroupProfile>
            <GroupProfile>그룹</GroupProfile>
            <GroupProfile>그룹</GroupProfile>
            <GroupProfile>그룹</GroupProfile>
          </GroudDiv>
          <AddButton>그룹 생성</AddButton>
        </HeaderDiv>
        <MemberDiv>
          <MemberList>그룹원 목록</MemberList>
          <Member style={{color:'white'}}>강종연</Member>
          <Member>권용준</Member>
          <Member>김나형</Member>
          <Member>김은혜</Member>
          <Member>김현지</Member>
          <Member>이현지</Member>
          <Member>주지호</Member>
        </MemberDiv>
        <InfoDiv>
          <InfoTitle>그룹 정보</InfoTitle>
          <InfoContent>
            <GroupProfile_>그룹 프로필</GroupProfile_>
            <GroupName><span style={{color:'black'}}>그룹명</span><br/><span style={{color:'#7B7B7B'}}>그룹소개</span></GroupName>
            <RefreshButton>Refresh</RefreshButton>
          </InfoContent>
          <Ranking>
            <Rank>🏆 GOLD lll</Rank>
            <CommitDays>🥉 연속 <span style={{color:'red'}}>0</span>일째 커밋 중!</CommitDays>
          </Ranking>
          <CommitDatas>
            <CommitData>이현지(hyunji-lee99)님이 TIL 레포에 커밋을 올렸습니다. </CommitData>
            <CommitData>김나형(lamknh)님이 KNU GDSC 레포에 커밋을 올렸습니다. </CommitData>
            <CommitData>이현지(hyunji-lee99)님이 TIL 레포에 커밋을 올렸습니다. </CommitData>
            <CommitData>김나형(lamknh)님이 KNU GDSC 레포에 커밋을 올렸습니다. </CommitData>
            <CommitData>이현지(hyunji-lee99)님이 TIL 레포에 커밋을 올렸습니다. </CommitData>
            <CommitData>김나형(lamknh)님이 KNU GDSC 레포에 커밋을 올렸습니다. </CommitData>
            <CommitData>이현지(hyunji-lee99)님이 TIL 레포에 커밋을 올렸습니다. </CommitData>
            <CommitData>김나형(lamknh)님이 KNU GDSC 레포에 커밋을 올렸습니다. </CommitData>
            <CommitData>이현지(hyunji-lee99)님이 TIL 레포에 커밋을 올렸습니다. </CommitData>
            <CommitData>김나형(lamknh)님이 KNU GDSC 레포에 커밋을 올렸습니다. </CommitData>
            <CommitData>이현지(hyunji-lee99)님이 TIL 레포에 커밋을 올렸습니다. </CommitData>
            <CommitData>김나형(lamknh)님이 KNU GDSC 레포에 커밋을 올렸습니다. </CommitData>
            <CommitData>이현지(hyunji-lee99)님이 TIL 레포에 커밋을 올렸습니다. </CommitData>
            <CommitData>김나형(lamknh)님이 KNU GDSC 레포에 커밋을 올렸습니다. </CommitData>
            <div style={{textAlign:'right'}}>
              {/* <FontAwesomeIcon style={{color:'white',margin:'0 20px 15px 0'}} icon={faRotateRight} /> */}
            </div>
          </CommitDatas>
        </InfoDiv>
      </ContentDiv>
    </Div>
  );
}

export default GroupPage;
