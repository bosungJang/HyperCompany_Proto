import React, { useState } from "react";
import { ComponentWrapper, MultiLayout } from "common/HcCommonLayout";
import HcTextField, { HcTitleTextField, SubHeading } from "common/HcTextField";
import styled from "styled-components";
import HcButton from "common/HcButton";
import { useLocation } from "react-router";
import { ToastContext } from "common/Toast";
import { HcMailPopup } from "common/HcPopup";
import { EditText, EditTextarea } from "react-edit-text";

const MailContent = styled.div`
  height: 305px;
  width: 1320px;
  border-radius: 4px;
  border: 1px solid #cecece;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  text-transform: uppercase;
  color: #5d5d62;
  margin-top: 10px;
  padding: 20px 16px 20px 16px;
`;
const NewHRInfo = styled.div`
  width: 1320px;
  height: 178px;
`;
const MainSendContainer = styled.div`
  width: 1320px;
  height: 450px;
  margin-top: 318px;
`;
const HRCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(153, 153, 153, 0.75);
  border-radius: 4px;
  height: 110px;
  width: 424px;
  float: left;
  margin-top: 18px;
  padding: 20px;
`;
export default function PayStubMail() {
  const location = useLocation();
  const [title, setTitle] = useState(`[회사명]남은 연차가 있습니다!`);
  const [mail, setMail] = useState(
    `안녕하세요, [이름]님!

    [회사명] 7월 급여 명세서입니다.
    
     [이름]님의 급여명세 첨부 파일을 확인 부탁드립니다.
    
    감사합니다.
    
    `
  );
  /*Toast */
  const { message, cancelAction } = React.useContext(ToastContext);
  /*Toast */
  const [modalOpen, setModalOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <ComponentWrapper
      style={{ display: "block", height: 1013, position: "relative" }}
    >
      <svg
        width="43"
        height="13"
        viewBox="0 0 43 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 140, left: 1298 }}
      >
        <path
          d="M3.48749 9.518H4.63149V6.71H7.27049V5.631H4.63149V2.823H3.48749V5.631H0.848492V6.71H3.48749V9.518ZM10.3426 2.433H14.3336V1.341H9.00355V9.154H9.92655C12.1106 9.154 13.5406 9.076 15.1656 8.764L15.0356 7.685C13.5406 7.958 12.2536 8.023 10.3426 8.036V2.433ZM16.8426 0.249V4.422H13.6966V5.527H16.8426V12.027H18.1816V0.249H16.8426ZM22.9125 4.097H28.4765V6.021H22.9125V4.097ZM26.3575 9.466V7.1H29.8025V1.042H28.4765V3.018H22.9125V1.042H21.5865V7.1H25.0185V9.466H20.3905V10.571H31.0245V9.466H26.3575ZM33.0125 1.497V2.589H37.1985C36.9645 5.293 35.5085 7.36 32.4275 8.842L33.1425 9.908C37.1725 7.958 38.5765 4.994 38.5765 1.497H33.0125ZM40.6955 0.262V12.001H42.0345V0.262H40.6955Z"
          fill="black"
        />
      </svg>
      <div style={{ float: "left", height: 40, marginBottom: 59 }}>
        <HcTitleTextField titleName="급여 명세 메일 전송" isBackIcon />
      </div>

      <NewHRInfo style={{ float: "left" }}>
        <SubHeading titleName="급여 명세 메일 전송 대상자" />

        <HRCard style={{ marginRight: 24 }}>1</HRCard>
        <HRCard style={{ marginRight: 24 }}>2</HRCard>
        <HRCard>3</HRCard>
      </NewHRInfo>
      <MainSendContainer>
        <SubHeading titleName="급여 명세 메일 전송" />
        <HcButton
          onClick={() => {
            message("급여 명세 메일 전송 완료하였습니다.", "test");
          }}
          styles="secondary"
          style={{
            marginTop: "18px",
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
            marginTop: "18px",
            marginBottom: "16px",
          }}
          size="medium"
        >
          수정
        </HcButton>
        <p>메일 미리보기</p>
        <MailContent>{mail}</MailContent>
      </MainSendContainer>

      <HcMailPopup
        open={modalOpen}
        close={closeModal}
        save={() => {
          console.log("saved");
        }}
        header="촉진 메일 수정"
      >
        <p
          style={{
            marginTop: "13px",
            fontSize: "14px",
            color: " #5D5D62",
            fontWeight: "bold",
          }}
        >
          메일에 추가할 내용을 입력하세요
        </p>
        <p
          style={{
            marginTop: "29px",
            fontSize: "15px",
            fontWeight: "bold",
            color: "#000000",
          }}
        >
          메일 제목
        </p>
        <EditText
          value={title}
          onChange={(value) => {
            setTitle(value);
          }}
        />
        <p
          style={{
            marginTop: "18px",
            fontSize: "15px",
            fontWeight: "bold",
            color: "#000000",
          }}
        >
          메일 내용
        </p>

        <EditTextarea
          value={mail}
          onChange={(value) => {
            setMail(value);
          }}
          style={{
            height: 234,
            width: 686,
          }}
        />
      </HcMailPopup>
    </ComponentWrapper>
  );
}
