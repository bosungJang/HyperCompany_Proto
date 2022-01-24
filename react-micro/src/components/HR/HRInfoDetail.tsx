import React, { useState, CSSProperties } from "react";
import { ComponentWrapper, MultiLayout } from "common/HcCommonLayout";
import { HcTitleTextField } from "common/HcTextField";
import { useLocation } from "react-router";
import img from "common/img/bgimg.png";
import styled from "styled-components";
import { EditText, EditTextarea } from "react-edit-text";
import HcButton from "common/HcButton";
const BasicContainer = styled.div`
  margin-top: 20px;
  width: 1320px;
  height: 475px;
  position: relative;
`;
const TextBoxField = styled.div`
  margin-top: 20px;
  width: 1080px;
  height: 315px;
  position: absolute;
  top: 210px;
  left: 210px;
`;
const InfoContainer = styled.div`
  background: #ffffff;
  border: 1px solid #cecece;
  border-radius: 6px;
  width: 1320px;
  margin-top: 20px;
  padding: 20px 40px 30px 24px;
  margin-bottom: 4px;
`;
const BgUploadButton = styled.div`
  position: absolute;
  top: 102px;
  left: 1282px;
`;
const PfUploadButton = styled.div`
  top: 248px;
  left: 178px;
  position: absolute;
`;

const SubTitle = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  width: 140px;
  height: 40px;
  color: #303030;
`;
const TextTitle = styled.div<{ required?: boolean }>`
  min-width: 33px;
  height: 21px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  text-transform: uppercase;
  color: #656565;
  //margin-left: 11px;
  margin-bottom: 4px;

  ${(props) =>
    props.required ? "::after {    content: '*';    color: #ff4f4f; }" : ""}
`;
const TextField = styled.div<{ disabled?: boolean }>`
  background: ${(props) => (props.disabled ? "#EDEDED" : "#ffffff")};
  border-bottom: 1px solid #e0e0e0;
  marginleft: 40px;
  width: 320px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  transition: all 150ms;
  autocomplete: off;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-transform: uppercase;

  padding-left: 11px;

  &:focus-visible {
    outline: 1px solid #257cff;
  }
  &:hover {
    box-shadow: ${(props) => (props.disabled ? null : "0 0 5px #257cff")};
  }

  :-ms-input-placeholder {
    color: #b5b5b5;
  }
`;
interface TextFieldIProps {
  titleName: string;
  disabled?: boolean;
  style?: CSSProperties;
  value?: any;
  maxlength?: string;
  id?: string;
  name?: string;
  onChange?: (e: any) => void;
}
const TableContainer = styled.div`
  height: 172px;
  width: 1241px;
  margin-top: 12px;
`;
const styles: any = {
  cellstyle: {
    width: 185,
    height: 46,
    borderBottom: "1px solid #E0E0E0",
  },
  textArea: {
    width: 320,
    height: 32,
    borderBottom: "1px solid #E0E0E0",
    fontFamily: "Noto Sans KR",
    fontStyle: "bold",
    fontSize: 16,
    textTransform: " uppercase",
  },
};
const Wrapper = styled.div`
  display: inline-table;
`;

const TextBox: React.FC<TextFieldIProps> = ({
  titleName,
  value,
  name,
  ...props
}) => {
  return (
    <Wrapper style={{ marginLeft: 40 }}>
      <TextTitle>{titleName}</TextTitle>
      {/* <TextField {...props}>{props.children}</TextField> */}
      <EditText style={styles.textArea} value={value} name={name} />
    </Wrapper>
  );
};
const HRInfoDetail = () => {
  const location = useLocation();
  const [Info, SetInfo] = useState(true); //1 : 기본정보 2 : 추가정보
  const [bgImg, setBgImg] = useState(img); //배경사진
  const [PfImg, setPfImg] = useState(img); //프로필 사진
  const fileInput = React.useRef(null);
  const PfInput = React.useRef(null);
  const [data, setData] = useState({
    name: location.state.name,
    employeeNumber: location.state.employeeNumber,
    telePhone: location.state.telePhone,
    responsibility: location.state.responsibility,
    organization: location.state.organization,
    company: location.state.company,
    entryData: location.state.entryDate,
    position: location.state.position,
  });
  const onChange = (e: any) => {
    if (e.target.files[0]) {
      setBgImg(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setBgImg(img);
      return;
    }
    //화면에 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setBgImg(String(reader.result));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const onPfChange = (e: any) => {
    if (e.target.files[0]) {
      setPfImg(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setPfImg(img);
      return;
    }
    //화면에 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPfImg(String(reader.result));
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <ComponentWrapper style={{ padding: 40, display: "block" }}>
      <div
        style={{
          height: 41,
          marginBottom: 39,
          float: "left",
        }}
      >
        <div
          style={{
            float: "left",
            width: 334,
          }}
        >
          <HcTitleTextField titleName="인사 정보 상세" isBackIcon={true} />
        </div>

        <HcButton
          styles="line"
          size="medium"
          style={{
            float: "left",
            marginLeft: 850,
          }}
        >
          일괄등록
        </HcButton>
      </div>

      <BasicContainer>
        <img src={bgImg} style={{ width: 1320, height: 140 }} className="" />
        <BgUploadButton>
          <label htmlFor="input-file" style={{ cursor: "pointer" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2Z"
                fill="#2D2D31"
              />
              <path
                d="M13.5284 6.74316L13.5284 6.74317C13.2687 7.00295 13.2687 7.39722 13.5284 7.65699L16.3422 10.4708C16.4707 10.5992 16.6338 10.6656 16.7992 10.6656H16.7992C16.9643 10.6656 17.1274 10.5994 17.2561 10.4708L19.9044 7.82245L19.9044 7.82245C20.1642 7.56267 20.1642 7.16839 19.9044 6.90863L17.0906 4.09482L17.0906 4.09482C16.8308 3.83506 16.4365 3.83506 16.1768 4.09482L13.5284 6.74316ZM16.7992 9.10008L14.8992 7.2001L16.6335 5.46578L18.5335 7.36576L16.7992 9.10008Z"
                fill="white"
                stroke="white"
                stroke-width="0.2"
              />
              <path
                d="M3.9 19.3852L3.90033 19.3852L4.14824 16.3546C4.14941 16.1857 4.22013 16.0525 4.34295 15.9295L4.34301 15.9295L11.9843 8.28818C12.2441 8.02842 12.6384 8.02842 12.8982 8.28818L12.8985 8.28853L15.6843 11.1022C15.6844 11.1022 15.6844 11.1023 15.6845 11.1023C15.9441 11.3621 15.944 11.7563 15.6843 12.016L8.04311 19.6848L8.04298 19.6849C7.93995 19.7879 7.77934 19.8486 7.63315 19.8777L7.6209 19.8802L7.62084 19.8794L4.58628 20.1001L4.57903 20.1006V20.1004H4.5517H4.47683L4.47543 20.0956C4.33683 20.0783 4.20337 20.0141 4.09477 19.9055M3.9 19.3852L4.09477 19.9055M3.9 19.3852V19.3934C3.9 19.5787 3.96151 19.7723 4.09477 19.9055M3.9 19.3852L4.16549 19.8348L4.09477 19.9055M12.4137 9.68694L14.3136 11.5868L7.29329 18.607L5.26702 18.7609L5.42104 16.7069L12.4137 9.68694Z"
                fill="white"
                stroke="white"
                stroke-width="0.2"
              />
            </svg>
          </label>
          <input
            type="file"
            id="input-file"
            style={{ display: "none" }}
            accept="image/jpg,impge/png,image/jpeg"
            onChange={onChange}
            ref={fileInput}
          />
        </BgUploadButton>
        <img
          src={PfImg}
          style={{
            position: "absolute",
            width: 170,
            height: 170,
            top: 150,
            left: 40,
            borderRadius: 100,
          }}
        />
        <PfUploadButton>
          <label htmlFor="input-Pffile" style={{ cursor: "pointer" }}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2Z"
                fill="#2D2D31"
              />
              <path
                d="M13.5284 6.74316L13.5284 6.74317C13.2687 7.00295 13.2687 7.39722 13.5284 7.65699L16.3422 10.4708C16.4707 10.5992 16.6338 10.6656 16.7992 10.6656H16.7992C16.9643 10.6656 17.1274 10.5994 17.2561 10.4708L19.9044 7.82245L19.9044 7.82245C20.1642 7.56267 20.1642 7.16839 19.9044 6.90863L17.0906 4.09482L17.0906 4.09482C16.8308 3.83506 16.4365 3.83506 16.1768 4.09482L13.5284 6.74316ZM16.7992 9.10008L14.8992 7.2001L16.6335 5.46578L18.5335 7.36576L16.7992 9.10008Z"
                fill="white"
                stroke="white"
                stroke-width="0.2"
              />
              <path
                d="M3.9 19.3852L3.90033 19.3852L4.14824 16.3546C4.14941 16.1857 4.22013 16.0525 4.34295 15.9295L4.34301 15.9295L11.9843 8.28818C12.2441 8.02842 12.6384 8.02842 12.8982 8.28818L12.8985 8.28853L15.6843 11.1022C15.6844 11.1022 15.6844 11.1023 15.6845 11.1023C15.9441 11.3621 15.944 11.7563 15.6843 12.016L8.04311 19.6848L8.04298 19.6849C7.93995 19.7879 7.77934 19.8486 7.63315 19.8777L7.6209 19.8802L7.62084 19.8794L4.58628 20.1001L4.57903 20.1006V20.1004H4.5517H4.47683L4.47543 20.0956C4.33683 20.0783 4.20337 20.0141 4.09477 19.9055M3.9 19.3852L4.09477 19.9055M3.9 19.3852V19.3934C3.9 19.5787 3.96151 19.7723 4.09477 19.9055M3.9 19.3852L4.16549 19.8348L4.09477 19.9055M12.4137 9.68694L14.3136 11.5868L7.29329 18.607L5.26702 18.7609L5.42104 16.7069L12.4137 9.68694Z"
                fill="white"
                stroke="white"
                stroke-width="0.2"
              />
            </svg>
          </label>
          <input
            type="file"
            id="input-Pffile"
            style={{ display: "none" }}
            accept="image/jpg,impge/png,image/jpeg"
            onChange={onPfChange}
            ref={PfInput}
          />
        </PfUploadButton>
        <TextBoxField>
          <TextBox titleName="" name="name" value={data.name} />

          <TextBox
            titleName=""
            name="employeeNumber"
            value={data.employeeNumber}
            onChange={(value) => setData({ ...data, name: value })}
          />
          <TextBox titleName="입사일" name="entryDate" value={data.entryData} />
          <TextBox titleName="법인 회사" name="company" value={data.company} />
          <TextBox
            titleName="조직"
            name="organization"
            value={data.organization}
          />
          <TextBox
            titleName="직위"
            name="responsibility"
            value={data.responsibility}
          />
          <TextBox
            titleName="회사전화"
            name="telePhone"
            value={data.telePhone}
          />
          <TextBox
            titleName="휴대전화"
            name="cellPhone"
            value="010-1234-5678"
          />
          <TextBox
            titleName="이메일"
            name="email"
            value="minsoo_choi@Tmax.co.kr"
          />
        </TextBoxField>
      </BasicContainer>
      <InfoContainer>
        <SubTitle>기본 정보</SubTitle>
      </InfoContainer>
      <InfoContainer>
        <SubTitle>학력</SubTitle>
      </InfoContainer>
      <InfoContainer>
        <SubTitle>경력</SubTitle>
      </InfoContainer>
      <InfoContainer>
        <SubTitle>교육</SubTitle>
      </InfoContainer>
      <InfoContainer>
        <SubTitle>어학</SubTitle>
      </InfoContainer>
      <InfoContainer>
        <SubTitle>자격증</SubTitle>
      </InfoContainer>
      <InfoContainer>
        <SubTitle>가족</SubTitle>
      </InfoContainer>
      <InfoContainer>
        <SubTitle>활동</SubTitle>
      </InfoContainer>
    </ComponentWrapper>
  );
};
export default HRInfoDetail;
