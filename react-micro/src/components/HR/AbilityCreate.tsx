import { RouteComponentProps, useLocation } from "react-router-dom";
import React, { useState } from "react";
import "common/Table.css";
import styled from "styled-components";
import { TableSelect, TableActionBtn } from "common/HcTableComponent";
import HcCheckBox from "common/HcCheckBox";
import HcTabs from "common/HcTabs";
import { ComponentWrapper, MultiLayout } from "common/HcCommonLayout";
import HcTextField, { HcTitleTextField, SubHeading } from "common/HcTextField";
import HcButton from "common/HcButton";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import HcBottomBar from "common/HcBottomBar";
const TextFieldContainer = styled.div`
  margin-top: 59px;
  height: 150px;
  width: 1320px;
  float: left;
`;
const TableContainer = styled.div`
  width: 1320px;
  padding-top: 20px;
`;
const RadioTitle = styled.div`
  font-family: Noto Sans KR;

  font-size: 13px;
  line-height: 19px;
  text-transform: uppercase;
  width: 70px;
  height: 20px;
  color: #656565;
  margin-bottom: 23px;
`;

const AbilityDetail = () => {
  const ability = ["분석력", "전략적인 사고", "의사소통", "대인관계능력"];

  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */
  //   const [edit, setEdit] = useState(false);
  const [data, setData] = useState({
    name: "경영 환경 분석",
    group: "경영 지원 역량",
    Yn: true,
    comment: "회사 비전을 설립하고 경영환경 분석을 합니다.",
  });

  function checkHandler(checked: Boolean, id: Number) {
    if (checked == true) {
      setCheckedItem([...checkedItem, id]);
    } else {
      setCheckedItem(checkedItem.filter((i: number) => i != id));
    }
  }
  function checkAllHandler(checked: Boolean) {
    if (checked) {
      const ids: Number[] = [];
      ability.forEach((i: any) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }

  const [checkedItem, setCheckedItem]: any = React.useState([]);
  const columns = [
    <div style={{ paddingTop: 9, width: 46, paddingLeft: 16 }}>
      <HcCheckBox
        checked={checkedItem.length > 0 ? true : false}
        onChange={(e) => checkAllHandler(e.target.checked)}
      />
    </div>,
    "평가등급",
    "최소점수",
    "최대점수",
    "권장 비율",
    "설명",
    "-",
  ];

  return (
    <div style={{ width: "inherit" }}>
      <ComponentWrapper style={{ display: "block", height: 1400 }}>
        <div style={{ marginTop: 20, float: "left" }}>
          {" "}
          <HcTitleTextField titleName="역량 생성" isBackIcon />
        </div>

        <TextFieldContainer>
          <div
            className="first_block"
            style={{
              width: "387px",
              height: "100px",
              float: "left",
              marginRight: "80px",
            }}
          >
            <HcTextField
              titleName="역량명"
              name="name"
              onKeyDown={(e: any) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              required
              style={{ width: "387px", marginBottom: 20 }}
              value={""}
              onChange={(e) => {
                setData((prevState: any) => ({
                  ...prevState,
                  name: e.target.value,
                }));
              }}
            />

            <HcTextField
              titleName="설명"
              name="comment"
              onKeyDown={(e: any) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "1320px", marginBottom: 20, height: 88 }}
              value={""}
              onChange={(e) => {
                setData((prevState: any) => ({
                  ...prevState,
                  comment: e.target.value,
                }));
              }}
            />
          </div>
          <div
            className="first_block"
            style={{
              width: "387px",
              height: "100px",
              float: "left",
              marginRight: "80px",
            }}
          >
            <HcTextField
              required
              titleName="역량 그룹"
              name="comment"
              onKeyDown={(e: any) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "387px", marginBottom: 20 }}
              value={""}
              onChange={(e) => {
                setData((prevState: any) => ({
                  ...prevState,
                  group: e.target.value,
                }));
              }}
            />
          </div>
          <div
            className="first_block"
            style={{
              width: "284px",
              height: "100px",
              float: "left",
              marginRight: "80px",
            }}
          >
            <RadioTitle>활성화 여부</RadioTitle>
            <HcRadioGroup
              defaultValue="true"
              onChange={(value) => console.log("value: ", value)}
            >
              <HcRadioButton value="true">
                <span style={{ marginRight: 47, marginLeft: 8 }}>활성화</span>
              </HcRadioButton>
              <HcRadioButton value="false">
                <span style={{ marginLeft: 8 }}>비활성화</span>
              </HcRadioButton>
            </HcRadioGroup>
          </div>
        </TextFieldContainer>

        <TableContainer style={{ display: "block", paddingTop: 362 }}>
          <SubHeading titleName="역량 등급" required />
          <HcButton
            styles="secondary"
            size="medium"
            style={{ marginBottom: 12, marginTop: 18 }}
          >
            +생성
          </HcButton>
          <table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th style={{ maxWidth: 346, textAlign: "left" }}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody style={{ maxWidth: 346 }}>
              <tr>
                <td colSpan={7} style={{ minWidth: 1318, textAlign: "center" }}>
                  데이터가 없습니다.
                </td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
        <TableContainer style={{ display: "block", paddingTop: 70 }}>
          <SubHeading titleName="자격증" />
          <HcButton
            styles="secondary"
            size="medium"
            style={{ marginBottom: 12, marginTop: 18 }}
          >
            +생성
          </HcButton>
          <table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th style={{ maxWidth: 346, textAlign: "left" }}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody style={{ maxWidth: 346 }}>
              <tr>
                <td colSpan={7} style={{ minWidth: 1318, textAlign: "center" }}>
                  데이터가 없습니다.
                </td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        <div>
          <>
            {" "}
            <HcButton
              onClick={() => {}}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              생성
            </HcButton>
            <HcButton
              onClick={() => {
                setbarOpen(false);
              }}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              취소
            </HcButton>
          </>
        </div>
      </HcBottomBar>
    </div>
  );
};

export default AbilityDetail;
