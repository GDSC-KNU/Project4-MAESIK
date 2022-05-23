import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

const NavigationDiv = styled.div`
  width: 13%;
  height: 100%;
  display: flex;
  background-color: #535353;
  border-radius: 12px;
  box-shadow: 0px 8px 8px 0 rgba(0, 0, 0, 0.25);
  a {
    text-decoration: none;
    color: #000;
  }
`;
const HeaderDiv = styled.div`
  width: 100%;
  height: 100%;
`;
const Logo = styled.div`
  margin: 0 auto;
  width: 70%;
  color: white;
  font-weight: bold;
  font-size: 1.8rem;
  margin-top: 10px;
`;
const Profile = styled.div`
  border-radius: 50%;
  width: 13vh;
  height: 13vh;
  background-color: lavender;
  margin: 20px auto;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
const GroudDiv = styled.div`
  height: 45%;
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
const WhiteStrike = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 2px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const SideBar = () => {
  return (
    <NavigationDiv>
      <HeaderDiv>
        <Logo>
          <img
            style={{ width: "100%", height: "100%" }}
            src={require("../../image/logo.png")}
          />
        </Logo>

        <Link to="/">
          <Profile>프로필</Profile>
        </Link>
        <WhiteStrike />
        <GroudDiv>
          <Link to="/group">
            <GroupProfile>그룹</GroupProfile>
          </Link>
          <Link to="/group">
            <GroupProfile>그룹</GroupProfile>
          </Link>
          <Link to="/group">
            <GroupProfile>그룹</GroupProfile>
          </Link>
          <Link to="/group">
            <GroupProfile>그룹</GroupProfile>
          </Link>
        </GroudDiv>
        <AddButton>+</AddButton>
      </HeaderDiv>
      {/* <FriendDiv>
        <FriendDivTitle>친구 목록</FriendDivTitle>
        <WhiteStrike />
        <FriendNameDiv>
          <FriendProfile>강종연</FriendProfile>
          <FriendProfile>권용준</FriendProfile>
        </FriendNameDiv>
      </FriendDiv> */}
    </NavigationDiv>
  );
};
export default SideBar;
