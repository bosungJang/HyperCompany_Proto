import { RouteComponentProps, useLocation } from "react-router-dom";
import React, { useState } from "react";
import "common/Table.css";
import styled from "styled-components";
import { TableSelect, TableActionBtn } from "common/HcTableComponent";
import HcCheckBox from "common/HcCheckBox";
import HcTabs from "common/HcTabs";
import { ComponentWrapper, MultiLayout } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  HcTextFieldLabel,
  HcSelect,
} from "common/HcTextField";
import HcButton from "common/HcButton";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import HcBottomBar from "common/HcBottomBar";
const TextFieldContainer = styled.div`
  margin-top: 59px;
  height: 255px;
  width: 1320px;
  float: left;
`;
const TableContainer = styled.div`
  width: 1320px;
  padding-top:20px
  margin-top: 295px;
`;
const RadioTitle = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: bold;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  text-transform: uppercase;
  width: 70px;
  height: 20px;
  color: #656565;
  margin-bottom: 23px;
`;
const SubTitle = styled.div`
  height: 30px;
  width: 100px;
  font-family: Noto Sans CJK KR;
  font-style: bold;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  padding-top: 335px;
  color: #303030;
`;

const ProfessionalDetail = () => {
  const ability = ["협상능력", "설득능력", "대인관계력", "어학능력", "분석력"];
  const location = useLocation();
  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */
  //   const [edit, setEdit] = useState(false);
  const [data, setData] = useState(location.state);
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
      data.ability.forEach((i: any) => ids.push(i.id));
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
    "역량",
    "필요등급",
    "중요도",
    "-",
  ];

  return (
    <div style={{ width: "inherit" }}>
      <ComponentWrapper style={{ display: "block", height: 1400 }}>
        <HcTitleTextField titleName="직책 상세" isBackIcon />
        {data.edit == false ? (
          <TextFieldContainer>
            <div
              className="first_block"
              style={{
                width: "284px",
                height: "100px",
                float: "left",
                marginRight: "80px",
              }}
            >
              <HcTextFieldLabel
                titleName="직무명"
                name="name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "387px", marginBottom: 20 }}
              >
                {data.name}
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="급여 형태"
                name="type"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "387px", marginBottom: 20 }}
              >
                {data.type}
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="설명"
                name="name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "936px", marginBottom: 20 }}
              >
                {data.comment}
              </HcTextFieldLabel>
            </div>
            <div
              className="first_block"
              style={{
                width: "387px",
                height: "100px",
                float: "left",
                marginRight: "80px",
                marginLeft: "80px",
              }}
            >
              <HcTextFieldLabel
                titleName="직무 그룹"
                name="group"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "387px", marginBottom: 20 }}
              >
                {data.group}
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="직무 등급"
                name="grade"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "387px" }}
              >
                {data.grade}
              </HcTextFieldLabel>
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
        ) : (
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
                titleName="생성자"
                name="name"
                onKeyDown={(e: any) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "387px", marginBottom: 20 }}
                value={data.name}
                onChange={(e) => {
                  setData((prevState: any) => ({
                    ...prevState,
                    name: e.target.value,
                  }));
                }}
              />
              <HcTextField
                titleName="급여 형태"
                name="type"
                onKeyDown={(e: any) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "387px", marginBottom: 20 }}
                value={data.type}
                onChange={(e) => {
                  setData((prevState: any) => ({
                    ...prevState,
                    type: e.target.value,
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
                style={{ width: "1320px", marginBottom: 20 }}
                value={data.comment}
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
              <HcSelect
                titleName="직무 그룹"
                style={{ width: "387px", marginBottom: 20 }}
                required
              >
                <option value="" hidden>
                  {data.group}
                </option>
                <option value={" hc"}>{data.group}</option>
                <option value={"hc"}>개발</option>
              </HcSelect>
              <HcSelect
                titleName="급여 형태"
                style={{ width: "387px", marginBottom: 20 }}
                required
              >
                {" "}
                <option value="" hidden>
                  {data.grade}
                </option>
                <option value={" hc"}>1등급</option>
                <option value={"hc"}>2등급</option>
              </HcSelect>
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
        )}
        <TableContainer style={{ display: "block" }}>
          <SubTitle>
            필요 역량<b style={{ color: "red" }}>*</b>
          </SubTitle>
          <HcButton
            styles="secondary"
            size="medium"
            style={{ marginBottom: 12, marginTop: 48 }}
          >
            +추가
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
                <td
                  style={{
                    overflow: " scroll",
                  }}
                >
                  <div style={{ paddingLeft: 16, marginTop: 9 }}>
                    <HcCheckBox
                      checked={checkedItem.includes(data.id)}
                      onChange={(e) => {
                        checkHandler(e.target.checked, data.id);
                      }}
                    />
                  </div>
                </td>
                <td>시장분석</td>
                <td>A</td>
                <td>5</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        <div>
          {data.edit == false ? (
            <>
              {" "}
              <HcButton
                onClick={() => {
                  setData({ ...data, edit: true });
                }}
                styles="primary"
                style={{ marginRight: "5px" }}
                size="big"
              >
                수정
              </HcButton>
              <HcButton
                onClick={() => {}}
                styles="line"
                style={{ marginRight: "5px" }}
                size="big"
              >
                삭제
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
          ) : (
            <>
              {" "}
              <HcButton
                onClick={() => {
                  setData({ ...data, edit: false });
                }}
                styles="primary"
                style={{ marginRight: "5px" }}
                size="big"
              >
                저장
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
          )}
        </div>
      </HcBottomBar>
    </div>
  );
};

export default ProfessionalDetail;
