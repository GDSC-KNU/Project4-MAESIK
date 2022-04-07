import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #8f6da6;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ContentDiv = styled.div`
	width: 90%;
	height: 90%;
	background-color: white;
	border-radius: 12px;
	display: flex;
	align-items: center;
	border-radius: 15px;
	box-shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0.25);
`;
const WhiteStrike = styled.div`
	margin: 0 auto;
	width: 80%;
	height: 2px;
	background-color: #ffffff;
	box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
`;
const NavigationDiv = styled.div`
	width: 34%;
	height: 100%;
	display: flex;
	background-color: #535353;
	border-radius: 12px;
	box-shadow: 0px 8px 8px 0 rgba(0, 0, 0, 0.25);
`;
const HeaderDiv = styled.div`
	width: 100%;
	height: 100%;
`;
const Logo = styled.div`
	margin: 0 auto;
	width: 70%;
	height: 10%;
	color: white;
	font-weight: bold;
	font-size: 1.8rem;
	margin-top: 25px;
	background-color: green;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Profile = styled.div`
	border-radius: 50%;
	width: 13vh;
	height: 13vh;
	background-color: lavender;
	margin: 20px auto;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
	cursor: pointer;
`;
const GroudDiv = styled.div`
	height: 48%;
	width: 100%;
	overflow: scroll;
`;
const GroupProfile = styled.div`
	border-radius: 50%;
	width: 13vh;
	height: 13vh;
	background-color: #f4f4c0;
	margin: 10px auto;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
`;
const AddButton = styled.div`
	border-radius: 50%;
	background-color: #3c3c3c;
	border: solid 2px white;
	width: 13vh;
	height: 13vh;
	color: white;
	margin: 10px auto;
	font-size: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);

	:hover {
		background-color: #1c1c1c;
	}
`;
const FriendDiv = styled.div`
	width: 100%;
	height: 100%;
	border-left: solid 1px white;
`;
const FriendDivTitle = styled.div`
	height: 10%;
	color: white;
	font-size: 22px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const FriendNameDiv = styled.div`
	color: #b5b5b5;
	font-size: 18px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
`;
const FriendProfile = styled.div`
	margin: 15px 0;
	cursor: pointer;
	:hover {
		color: white;
	}
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
	display: flex;
	margin: 0 auto;
	justify-content: space-between;
`;
const MyProfilePic = styled.div`
	width: 13vh;
	height: 13vh;
	border-radius: 50%;
	margin: 5vh 0;
	background-color: lightgrey;
`;
const MyProfileName = styled.div`
	width: 60%;
	height: 30%;
	margin: 10vh 0 0 0;
	h1 {
		font-size: 20px;
	}
	p {
		font-size: 18px;
		color: #7b7b7b;
	}
`;
const RefreshBtn = styled.div`
	width: 8vw;
	height: 6vh;
	border-radius: 15px;
	background-color: #94d8c4;
	font-weight: bold;
	font-size: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	margin: 9vh 0;
	box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
	:hover {
		background-color: #679789;
		color: white;
	}
`;

const ProfileInfo = styled.div`
	width: 80%;
	height: 8%;
	margin: 0 auto;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const MyRank = styled.div``;
const MyCommit = styled.div`
	display: flex;
	p {
		color: red;
	}
`;
const GithubContribution = styled.div`
	height: 30%;
	width: 80%;
	margin: 0vh auto;
	background-color: lightgrey;
`;

function MyPage() {
	return (
		<Div className="Home">
			<ContentDiv>
				<NavigationDiv>
					<HeaderDiv>
						<Logo>Logo</Logo>
						<Profile>프로필</Profile>
						<WhiteStrike />
						<GroudDiv>
							<GroupProfile>그룹</GroupProfile>
							<GroupProfile>그룹</GroupProfile>
							<GroupProfile>그룹</GroupProfile>
							<GroupProfile>그룹</GroupProfile>
							<GroupProfile>그룹</GroupProfile>
						</GroudDiv>
						<AddButton>+</AddButton>
					</HeaderDiv>
					<FriendDiv>
						<FriendDivTitle>친구 목록</FriendDivTitle>
						<WhiteStrike />
						<FriendNameDiv>
							<FriendProfile>강종연</FriendProfile>
							<FriendProfile>권용준</FriendProfile>
						</FriendNameDiv>
					</FriendDiv>
				</NavigationDiv>
				<MainDiv>
					<MainTitle>내 정보</MainTitle>
					<MainUpperDiv>
						<MyProfilePic></MyProfilePic>
						<MyProfileName>
							<h1>Kim Nahyeong</h1>
							<p>lamknh</p>
						</MyProfileName>
						<RefreshBtn>Refresh</RefreshBtn>
					</MainUpperDiv>
					<BlackStrike />
					<ProfileInfo>
						<MyRank>🏆 GOLD lll</MyRank>
						<MyCommit>
							🥉 연속&nbsp;<p>0</p>일째 커밋 중!
						</MyCommit>
					</ProfileInfo>
					<GithubContribution />
				</MainDiv>
			</ContentDiv>
		</Div>
	);
}

export default MyPage;
