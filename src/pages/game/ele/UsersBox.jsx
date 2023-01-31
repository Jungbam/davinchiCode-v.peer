import otherUserBackground from "../../../assets/images/otherUserBackground.png";
import styled from "styled-components";
import DavinchiCard from "./DavinchiCard";
import { useDispatch, useSelector } from "react-redux";
import { setIndicater } from "../../../redux/modules/gameSlice";
import { IMG } from "../../../helpers/image";

const UsersBox = ({ user }) => {
  const { initBtn, initReady } = useSelector((state) => state.gameSlice);
  const dispatch = useDispatch();
  //버튼 StAbsoluteBtn으로 내려서써주세요! color
  //모달화시키기 예정 indicate 에 있는거 스타일컴포넌트 StText (StBtnList StBtn) StTitle

  return (
    <StOtherUsers>
      <StOnGoingStatus>진행중</StOnGoingStatus>
      {initBtn && (
        <StAbsoluteBtn
          background="#009320"
          onClick={() => dispatch(setIndicater(user.userId))}
        >
          {user ? "지목하기" : "..."}
        </StAbsoluteBtn>
      )}
      <StUserProfile>
        <img src={user?user?.userProfileImg : IMG.userProfile} alt="유저 프로필 사진"/>
        <div>{user ? user?.userName : "빈자리"}</div>
      </StUserProfile>
      {initReady && user?.hasOwnProperty("isReady") && user.isReady && (
        <StAbsoluteBtn>준비완료</StAbsoluteBtn>
      )}
      <StCardArea>
        {user?.hand?.map((card, i) => (
          <DavinchiCard key={`${user.userName}${i}`} card={card} />
        ))}
      </StCardArea>
    </StOtherUsers>
  );
};
export default UsersBox;

const StOtherUsers = styled.div`
  border: 1px solid green;
  position: relative;
  width: 356px;
  height: 100%;
  background-image: url(${otherUserBackground});
  padding: 14px;
  border-radius: 6px;
  border: solid 1px #111;
  background-color: #eee;
`;

const StAbsoluteBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 93px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background || "#FFDF24"};
  border: 1px solid #000000;
  box-shadow: 0px 3px 0px ${({ color }) => color || "#000"};
  border-radius: 6px;

  //
  font-family: Pretendard;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: ${({ color }) => color || "#000"};
`;

const StCardArea = styled.div`
  width: 100%;
  height: 32px;
  gap: 2px;
  display: flex;
  margin: 6px 7px;
`;

const StOnGoingStatus = styled.div`
  background: #111111;
  border-radius: 999px;
  position: absolute;
  width: 52px;
  height: 32px;
  color: #ffdf24;

  font-weight: 600;
  font-size: 12px;
  line-height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StUserProfile = styled.div`
  height: 130px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: #111;

  display: flex;
  flex-direction: column;
  align-items: center;
  & div {
    margin-top: 7px;
  }
`;

const StConfirmBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 32px;
  background: #ffdf24;
  border: 1px solid #000000;
  box-shadow: 0px 3px 0px #000000;
  border-radius: 6px;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  margin-top: 14px;
`;
