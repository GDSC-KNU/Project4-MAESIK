import './App.css';
import styled from 'styled-components'

const Div=styled.div`
  width:100vw;
  height:100vh;
  background-color:#8F6DA6;
  display:flex;
  justify-content:center;
  align-items:center;
`
const ContentDiv=styled.div`
  width:90%;
  height:80%;
  background-color:white;
  border-radius:12px;
  display:flex;
  align-items:center;
  overflow:hidden;
`
const HeaderDiv=styled.div`
  width:12%;
  height:100%;
  background-color:#535353;
`
const FriendDiv=styled.div`
  width:12%;
  height:100%;
  border-left:solid 1px white;
  background-color:#535353;
  border-radius:0 12px 12px 0;
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
  width:60%;
  height:15%;
  background-color:lavender;
  margin:20px auto;
  display:flex;
  align-items:center;
  justify-content:center;
`
const GroudDiv=styled.div`
  height:45%;
  width:100%;
  overflow:scroll;
  border-top:solid 1px white;
`
const GroupProfile=styled.div`
  border-radius:50%;
  width:60%;
  height:33%;
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
  width:60%;
  color:white;
  height:15%;
  margin:0 auto;
  margin-top:20px;
  display:flex;
  align-items:center;
  justify-content:center;
`

function App() {
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
        <FriendDiv></FriendDiv>
      </ContentDiv>
    </Div>
  );
}

export default App;
