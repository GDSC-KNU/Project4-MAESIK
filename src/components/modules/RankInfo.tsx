import React from "react";
import styled from "styled-components";

const ProfileInfo = styled.div`
  width: 80%;
  margin: 25px auto;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MyRank = styled.div`
  font-size: 1.2rem;
`;
const MyCommit = styled.div`
  font-size: 1.2rem;
  display: flex;
  p {
    color: red;
  }
`;

const RankInfo = () => {
  return (
    <ProfileInfo>
      <MyRank>🏆 GOLD lll</MyRank>
      <MyCommit>
        🥉 연속&nbsp;<p>0</p>일째 커밋 중!
      </MyCommit>
    </ProfileInfo>
  );
};

export default RankInfo;
