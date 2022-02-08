import React, { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField, HcSelects, HcSelect } from "common/HcTextField";
import styled from "styled-components";
import img from "common/img/bgimg.png";
import HcTabs from "common/HcTabs";
import HcTextField from "common/HcTextField";
import { HcDatePicker, HcDateRangePicker } from "common/HcDatePicker";
import HcButton from "common/HcButton";
import { EditText, EditTextarea } from "react-edit-text";
import { Link, useHistory } from "react-router-dom";
import "common/Table.css";
const BasicContainer = styled.div`
  margin-top: 20px;
  width: 1320px;
  height: 700px;
  position: relative;
`;
const MoreInfoContainer = styled.div`
  margin-top: 20px;
  width: 1320px;
  height: 700px;
  position: relative;
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
const MoreInfoContent = styled.div`
  background: #ffffff;
  border: 1px solid #cecece;
  border-radius: 6px;
  width: 1320px;
  margin-top: 20px;
  padding: 20px 40px 30px 40px;
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
};
const columns = [
  "학교 구분",
  "학교명",
  "전공",
  "학위",
  "입학년월",
  "졸업년월",
  "소재지",
  "주/야",
  "졸업 구분",
];

const HRInfoCreate = () => {
  const [Info, SetInfo] = useState(true); //1 : 기본정보 2 : 추가정보
  const [bgImg, setBgImg] = useState(img); //배경사진
  const [PfImg, setPfImg] = useState(img); //프로필 사진
  const fileInput = React.useRef(null);
  const PfInput = React.useRef(null);
  const [basic, setBasic]: any = useState([
    // 기본정보
    {
      name: "",
      employeeNumber: "",
      organization: "",
      entryDate: "",
      position: "",
      responsibility: "",
      duty: "",
      telePhone: "",
      cellPhone: "",
      email: "",
      company: "",
    },
  ]);
  const [data, setData] = useState([
    // 추가정보-학력데이터
    {
      학교구분: "대학교",
      학교명: "서울대학교",
      전공: "경영학",
      학위: "학사",
      입학년월: "2008/01/01",
      졸업년월: "2008/01/01",
      소재지: "서울",
      주야: "주간",
      졸업구분: "졸업",
    },
  ]);
  const onCreate = () => {
    const prev = data;
    prev.push({
      학교구분: " ",
      학교명: "서울대학교",
      전공: "경영학",
      학위: "학사",
      입학년월: "2008/01/01",
      졸업년월: "2008/01/01",
      소재지: "서울",
      주야: "주간",
      졸업구분: "졸업",
    });
    setData(prev);
    setRows(
      prev.map((row) => (
        <Row
          학교구분={row.학교구분}
          학교명={row.학교명}
          전공={row.전공}
          학위={row.학위}
          입학년월={row.입학년월}
          졸업년월={row.졸업년월}
          주야={row.주야}
          소재지={row.소재지}
        />
      ))
    );
    console.log();
  };
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
  const onBasicInfoChange = (e: any) => {
    const { name, value } = e.target;
    setBasic({
      ...basic,
      [name]: value,
    });
    console.log(basic);
  };
  function Row({
    학교구분,
    학교명,
    전공,
    학위,
    입학년월,
    졸업년월,
    소재지,
    주야,
    졸업구분,
  }: any) {
    return (
      <tr>
        {" "}
        <td>
          <EditText defaultValue={학교구분} />
        </td>
        <td>
          <EditText defaultValue={학교명} />
        </td>
        <td>
          <EditText defaultValue={전공} />
        </td>
        <td>
          <EditText defaultValue={학위} />
        </td>
        <td>
          <EditText type="date" defaultValue={입학년월} />
        </td>
        <td>
          <EditText type="date" defaultValue={졸업년월} />
        </td>
        <td>
          <EditText defaultValue={주야} />
        </td>
        <td>
          <EditText defaultValue={소재지} />
        </td>
        <td>
          <EditText
            defaultValue={졸업구분}
            onSave={() => {
              console.log({ 졸업구분 });
              console.log("changed");
            }}
          />
        </td>
      </tr>
    );
  }
  // const rows = data.map((row) => (
  //   <Row
  //     학교구분={row.학교구분}
  //     학교명={row.학교명}
  //     전공={row.전공}
  //     학위={row.학위}
  //     입학년월={row.입학년월}
  //     졸업년월={row.졸업년월}
  //     주야={row.주야}
  //     소재지={row.소재지}
  //   />
  // ));

  const [rows, setRows] = useState(
    data.map((row) => (
      <Row
        학교구분={row.학교구분}
        학교명={row.학교명}
        전공={row.전공}
        학위={row.학위}
        입학년월={row.입학년월}
        졸업년월={row.졸업년월}
        주야={row.주야}
        소재지={row.소재지}
      />
    ))
  );
  const history = useHistory();

  return (
    <ComponentWrapper style={{ padding: 40, display: "block" }}>
      <HcTitleTextField isBackIcon={true} titleName="인사 정보 생성" />

      {/* <Link to="/hr/hrInfoCreated">
        {" "} */}
      <HcButton
        styles="line"
        style={{ position: "absolute", left: 1656, top: 166 }}
        size="medium"
        onClick={() => {
          history.push({
            pathname: "/hr/hrInfoCreated",

            state: {
              name: basic["name"],
              employeeNumber: basic["employeeNumber"],
              organization: basic["organization"],
              entryDate: basic["entryDate"],
              position: basic[" position"],
              responsibility: basic["responsibility"],
              duty: basic["duty"],
              telePhone: basic["telePhone"],
              cellPhone: basic["cellPhone"],
              email: basic["email"],
              company: basic["company"],
            },
          });
        }}
      >
        일괄등록
      </HcButton>
      {/* </Link> */}
      <HcButton
        onClick={() => {
          SetInfo(!Info);
        }}
        styles="line"
        style={{ position: "absolute", left: 1556, top: 166 }}
        size="medium"
      >
        {Info == true ? "추가정보>" : "기본정보>"}
      </HcButton>

      <div style={{ marginTop: 39 }}>
        <HcTabs
          items={[
            { to: "1", name: "기본 정보" },
            { to: "2", name: "추가 정보" },
          ]}
          size="small"
        />
      </div>
      <BasicContainer style={{ display: Info == true ? "" : "none" }}>
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
            top: 105,
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
        <div
          className="textfields"
          style={{ position: "absolute", top: 160, left: 270 }}
        >
          <HcTextField
            titleName="이름"
            name="name"
            onKeyDown={(e) => {
              onBasicInfoChange(e);
            }}
            required
          />
          <HcTextField
            titleName="사번"
            name="employeeNumber"
            onKeyDown={(e) => {
              onBasicInfoChange(e);
            }}
            required
          />
          <HcTextField
            titleName="법인회사"
            name="company"
            onKeyDown={(e) => {
              onBasicInfoChange(e);
            }}
            required
          />
          <HcSelect
            titleName="조직"
            required
            name="organization"
            onChange={(e) => {
              onBasicInfoChange(e);
            }}
          >
            <option value="" hidden>
              조직 선택
            </option>
            <option value="사업부">사업부</option>
            <option value="PM">PM</option>
            <option value="EC">EC</option>
            <option value="TF">TF</option>
          </HcSelect>
          <HcDatePicker />
          <HcTextField
            titleName="직책"
            name="responsibility"
            onKeyDown={(e) => {
              onBasicInfoChange(e);
            }}
            required
          />
          <HcTextField
            titleName="직위"
            name="position"
            onKeyDown={(e) => {
              onBasicInfoChange(e);
            }}
            required
          />
          <HcTextField
            titleName="담당업무"
            name="duty"
            onKeyDown={(e) => {
              onBasicInfoChange(e);
            }}
          />
          <HcTextField
            titleName="휴대전화"
            name="cellPhone"
            onKeyDown={(e) => {
              onBasicInfoChange(e);
            }}
            required
          />
          <HcTextField
            titleName="회사전화"
            name="telePhone"
            onKeyDown={(e) => {
              onBasicInfoChange(e);
            }}
            required
          />
          <HcTextField
            titleName="이메일"
            name="email"
            onKeyDown={(e) => {
              onBasicInfoChange(e);
            }}
            required
          />
        </div>
      </BasicContainer>
      <MoreInfoContainer style={{ display: Info == false ? "" : "none" }}>
        <MoreInfoContent>
          <SubTitle>
            기본 정보
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: 11 }}
            >
              <path
                d="M12.4202 3.88598C12.2945 3.73458 12.0613 3.73458 11.9177 3.8523L11.3613 4.34017C11.2356 4.458 11.2177 4.64296 11.3254 4.77759C12.1151 5.66933 12.5458 6.79659 12.5458 7.9912C12.5458 10.7505 10.2484 13.0388 7.3587 13.1902V11.9115C7.3587 11.6592 7.0715 11.5077 6.83826 11.6423L3.57166 13.51C3.35632 13.6446 3.35632 13.9306 3.57166 14.0652L6.85621 15.9496C7.08958 16.0842 7.37665 15.9328 7.37665 15.6804V14.5531H7.41258C11.1099 14.3512 13.9996 11.4741 13.9996 7.99127C13.9996 6.47706 13.4433 5.03007 12.4203 3.88592L12.4202 3.88598Z"
                fill="#5D5D62"
              />
              <path
                d="M6.6231 2.7928V4.07148C6.6231 4.32381 6.91031 4.47532 7.14354 4.34071L10.4281 2.45632C10.6434 2.3217 10.6434 2.03569 10.4281 1.90109L7.14354 0.0502561C6.91018 -0.0843606 6.6231 0.0670388 6.6231 0.319486L6.62298 1.42998H6.58705C2.88969 1.63185 0 4.50899 0 7.99181C0 9.52293 0.556367 10.9867 1.5974 12.1308C1.7231 12.2822 1.95634 12.2822 2.09996 12.1645L2.65633 11.6766C2.78202 11.5588 2.79993 11.3738 2.69226 11.2392C1.86657 10.3305 1.43578 9.1864 1.43578 7.99163C1.43578 5.24909 3.69733 2.99455 6.62285 2.79264L6.6231 2.7928Z"
                fill="#5D5D62"
              />
            </svg>
          </SubTitle>
          <div style={{ height: 235, width: 1240, marginTop: 28 }}>
            <HcDatePicker />
            <HcSelect
              titleName="성별"
              required
              name={""}
              onChange={(e) => {
                onBasicInfoChange(e);
              }}
            >
              <option value="" hidden>
                성별 선택
              </option>
              <option value="1">여자</option>
              <option value="2">남자</option>
            </HcSelect>

            <HcTextField
              titleName="집 주소"
              name="name"
              onKeyDown={(e) => {}}
            />
            <HcTextField
              titleName="상세 주소"
              name="name"
              onKeyDown={(e) => {}}
              required
            />

            <HcSelect titleName="성별" required name={""} onChange={(e) => {}}>
              <option value="" hidden>
                성별 선택
              </option>
              <option value="1">여자</option>
              <option value="2">남자</option>
            </HcSelect>
            <HcSelect titleName="결혼 여부" name={""} onChange={(e) => {}}>
              <option value="" hidden>
                결혼 여부 선택
              </option>
              <option value="1">미혼</option>
              <option value="2">기혼</option>
            </HcSelect>
            <HcSelect titleName="군필 여부" onChange={(e) => {}} name={""}>
              <option value="" hidden>
                군필 여부 선택
              </option>
              <option value="1">군필</option>
              <option value="2">미필</option>
              <option value="3">해당없음</option>
            </HcSelect>
          </div>
        </MoreInfoContent>
        <MoreInfoContent style={{ marginTop: 24 }}>
          <SubTitle>
            학력
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: 11 }}
            >
              <path
                d="M12.4202 3.88598C12.2945 3.73458 12.0613 3.73458 11.9177 3.8523L11.3613 4.34017C11.2356 4.458 11.2177 4.64296 11.3254 4.77759C12.1151 5.66933 12.5458 6.79659 12.5458 7.9912C12.5458 10.7505 10.2484 13.0388 7.3587 13.1902V11.9115C7.3587 11.6592 7.0715 11.5077 6.83826 11.6423L3.57166 13.51C3.35632 13.6446 3.35632 13.9306 3.57166 14.0652L6.85621 15.9496C7.08958 16.0842 7.37665 15.9328 7.37665 15.6804V14.5531H7.41258C11.1099 14.3512 13.9996 11.4741 13.9996 7.99127C13.9996 6.47706 13.4433 5.03007 12.4203 3.88592L12.4202 3.88598Z"
                fill="#5D5D62"
              />
              <path
                d="M6.6231 2.7928V4.07148C6.6231 4.32381 6.91031 4.47532 7.14354 4.34071L10.4281 2.45632C10.6434 2.3217 10.6434 2.03569 10.4281 1.90109L7.14354 0.0502561C6.91018 -0.0843606 6.6231 0.0670388 6.6231 0.319486L6.62298 1.42998H6.58705C2.88969 1.63185 0 4.50899 0 7.99181C0 9.52293 0.556367 10.9867 1.5974 12.1308C1.7231 12.2822 1.95634 12.2822 2.09996 12.1645L2.65633 11.6766C2.78202 11.5588 2.79993 11.3738 2.69226 11.2392C1.86657 10.3305 1.43578 9.1864 1.43578 7.99163C1.43578 5.24909 3.69733 2.99455 6.62285 2.79264L6.6231 2.7928Z"
                fill="#5D5D62"
              />
            </svg>
          </SubTitle>
          <HcButton
            onClick={() => {
              onCreate();
            }}
            styles="secondary"
            style={{
              //   display: checkedItem.length == 1 ? "none" : "",

              marginTop: "18px",
              marginBottom: "12px",
            }}
            size="medium"
          >
            +생성
          </HcButton>

          <HcButton
            onClick={() => {
              console.log();
            }}
            styles="line"
            style={{
              //   display: checkedItem.length == 1 ? "" : "none",

              marginTop: "18px",
              marginBottom: "12px",
            }}
            size="medium"
          >
            수정
          </HcButton>
          <HcButton
            onClick={() => {
              console.log();
            }}
            styles="line"
            style={{
              //   display: checkedItem.length == 1 ? "" : "none",
              marginLeft: "5px",
              marginTop: "18px",
              marginBottom: "12px",
            }}
            size="medium"
          >
            삭제
          </HcButton>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  {columns.map((column: any) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody
                style={{
                  overflow: " scroll",
                }}
              >
                {rows}
              </tbody>
            </table>
          </TableContainer>
        </MoreInfoContent>
      </MoreInfoContainer>
    </ComponentWrapper>
  );
};
export default HRInfoCreate;