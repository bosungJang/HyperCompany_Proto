import React, { useState } from "react";
import { ComponentWrapper, MultiLayout } from "common/HcCommonLayout";
import { HcTitleTextField } from "common/HcTextField";
import styled from "styled-components";
import HcButton from "common/HcButton";
import { useLocation } from "react-router";
import { ToastContext } from "common/Toast";
import { HcContentPopup } from "common/HcPopup";
import { EditText, EditTextarea } from "react-edit-text";
const SubTitle = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  width: 140px;
  height: 30px;
  color: #303030;
`;
const MailContent = styled.div`
  height: 305px;
  width: 1320px;
  border-radius: 4px;
  border: 1px solid #cecece;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  text-transform: uppercase;
  color: #5d5d62;
  margin-top: 45px;
  padding: 20px 16px 20px 16px;
`;
const NewHRInfo = styled.div`
  width: 1320px;
  height: 178px;
`;
const MainSendContainer = styled.div`
  width: 1320px;
  height: 450px;
  margin-top: 311px;
`;
const HRCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(153, 153, 153, 0.75);
  border-radius: 4px;
  height: 110px;
  width: 424px;
  float: left;
  margin-top: 18px;
  margin-botto: 60px;
`;
export default function () {
  const location = useLocation();
  const [title, setTitle] = useState(
    `${location.state.company}입사를 환영합니다!`
  );
  const [mail, setMail] = useState(
    `안녕하세요 ${location.state.name}님!${location.state.company}입사를 진심으로 환영합니다!SuperComapny는 ${location.state.company}에서 사용하는 erp 플랫폼입니다. 가입 후 요청받은 정보를 입력 및 업로드 완료하면, 인사 담당자에게 제출됩니다. 이제 SuperComapny가 ${location.state.name}님의 편리한 회사 생활에 도움이 되어드릴게요!`
  );
  /*Toast */
  const { message, cancelAction } = React.useContext(ToastContext);
  /*Toast */
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <ComponentWrapper style={{ display: "block", height: 1013 }}>
      <div style={{ float: "left", height: 40, marginBottom: 59 }}>
        <HcTitleTextField
          titleName="인사 정보 생성 완료하였습니다."
          isBackIcon={false}
        />
      </div>
      <svg
        style={{ float: "left" }}
        width="44"
        height="42"
        viewBox="0 0 44 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.8145 14.9324L27.8873 30.3428L6.29486 36.2212L3.77664 32.3686L17.8145 14.9324Z"
          fill="#FF6666"
        />
        <path
          d="M41.6482 26.3733C37.2618 25.553 32.9148 24.9476 28.9057 25.5636C32.8458 26.2588 36.6545 26.3662 41.0362 28.5998C41.1539 27.8588 41.6298 27.2533 41.6482 26.3733Z"
          fill="#FFC738"
        />
        <path
          d="M43.8436 15.2791C42.6446 14.5217 42.1559 14.5627 40.9276 13.7407C37.8654 19.8556 30.2506 22.2693 27.36 23.5617C32.782 22.6922 38.2505 21.4052 43.8436 15.2791V15.2791Z"
          fill="#00CBD8"
        />
        <path
          d="M24.5735 21.3565C32.2215 18.2982 37.0148 8.81473 37.2968 1.86954C34.558 2.54489 32.8588 2.74214 30.954 1.56399C32.8351 7.50075 30.6364 14.3168 23.9534 21.2251C23.9534 21.2251 23.7979 21.6109 24.5735 21.3565Z"
          fill="#257CFF"
        />
        <path
          d="M23.1425 18.0346C25.3659 14.3867 26.9787 10.6501 26.0098 6.64063C25.0689 7.03884 24.6185 7.56819 23.1624 7.67512C24.6262 11.2746 23.549 14.6207 23.1425 18.0346Z"
          fill="#EF3DA8"
        />
      </svg>

      <NewHRInfo style={{ float: "left" }}>
        <SubTitle>신규 인사 정보</SubTitle>
        <HRCard style={{ marginRight: 24 }}>1</HRCard>
        <HRCard style={{ marginRight: 24 }}>2</HRCard>
        <HRCard>3</HRCard>
      </NewHRInfo>
      <MainSendContainer>
        <SubTitle>초대 메일 전송</SubTitle>
        <HcButton
          onClick={() => {
            message("초대 메일 전송 완료하였습니다.", "test");
          }}
          styles="secondary"
          style={{
            marginTop: "39px",
          }}
          size="medium"
        >
          메일 전송
        </HcButton>
        <HcButton
          onClick={openModal}
          styles="line"
          style={{
            marginLeft: "10px",
            marginTop: "39px",
          }}
          size="medium"
        >
          수정
        </HcButton>

        <MailContent>{mail}</MailContent>
      </MainSendContainer>
      <HcContentPopup
        open={modalOpen}
        close={closeModal}
        header="초대 메일 수정"
      >
        <p>초대메일에 추가할 내용을 입력하세요</p>
        <EditText
          value={title}
          onChange={(value) => {
            setTitle(value);
          }}
        />
        <EditTextarea
          value={mail}
          onChange={(value) => {
            setMail(value);
          }}
        />
      </HcContentPopup>
    </ComponentWrapper>
  );
}