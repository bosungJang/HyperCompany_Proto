import React, { useState } from "react";
import styled from "styled-components";
import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
  NullTbody,
} from "common/HcTableComponent";
import HcCheckBox from "common/HcCheckBox";

import { ComponentWrapper, MultiLayout } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  HcTextFieldLabel,
  SubHeading,
  HcTextArea,
} from "common/HcTextField";
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

  font-weight: 500;
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
  const [edit, setEdit] = useState(false);
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

  return (
    <div style={{ width: "inherit" }}>
      <ComponentWrapper
        style={{ display: "block", height: 1400, position: "relative" }}
      >
        <div style={{ marginTop: 20 }}>
          {" "}
          <HcTitleTextField
            titleName={edit ? "역량 수정" : "역량 상세"}
            isBackIcon
          />
          <HcButton
            styles="line"
            size="medium"
            style={{ position: "absolute", left: 1176, top: 44 }}
          >
            일괄등록
          </HcButton>
          <HcButton
            styles="line"
            size="medium"
            style={{ position: "absolute", left: 1276, top: 44 }}
          >
            내보내기
          </HcButton>
        </div>
        {edit == false ? (
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
                titleName="역량명"
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
                titleName="설명"
                name="name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "1320px", marginBottom: 20 }}
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
                titleName="역량 그룹"
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
                defaultValue={String(data.Yn)}
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
                titleName="역량명"
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

              <HcTextArea
                titleName="설명"
                name="name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                onChange={(e) => {
                  setData((prevState: any) => ({
                    ...prevState,
                    comment: e.target.value,
                  }));
                }}
                value={data.comment}
                style={{ width: "1320px", marginBottom: 20, height: 88 }}
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
                titleName="역량 그룹"
                name="comment"
                onKeyDown={(e: any) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "387px", marginBottom: 20 }}
                value={data.group}
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
        )}
        <TableContainer
          style={{ display: "block", paddingTop: edit == false ? 250 : 302 }}
        >
          <SubHeading titleName="역량 등급" required={false} />
          <HcButton
            styles="secondary"
            size="medium"
            style={{ marginBottom: 12, marginTop: 18 }}
          >
            +생성
          </HcButton>
          <HcTableContainer style={{ width: 1320, height: 262 }}>
            <HcTable>
              <thead>
                <tr>
                  <th style={{ width: 46 }}>
                    <div>
                      <HcCheckBox
                        checked={checkedItem.length > 0 ? true : false}
                        onChange={(e) => checkAllHandler(e.target.checked)}
                      />
                    </div>
                  </th>
                  <th style={{ width: 188 }}>평가등급</th>
                  <th style={{ width: 188 }}>최소점수</th>
                  <th style={{ width: 188 }}>최대점수</th>
                  <th style={{ width: 188 }}>권장 비율</th>
                  <th style={{ width: 402 }}>설명</th>
                  <th style={{ width: 120 }}>-</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <HcCheckBox
                        checked={checkedItem.includes(1)}
                        onChange={(e) => {
                          checkHandler(e.target.checked, 1);
                        }}
                      />
                    </div>
                  </td>
                  <td>A</td>
                  <td>80</td>
                  <td>100</td>
                  <td>50%</td>
                  <td>
                    분석력, IT활용, 의사소통, 문제해결능력, 대인관계능력,
                    정보수집
                  </td>
                  <td>
                    <TableActionBtn />
                  </td>
                </tr>
              </tbody>
            </HcTable>
          </HcTableContainer>
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
          <HcTableContainer style={{ width: 1320, height: 262 }}>
            <HcTable>
              <thead>
                <tr>
                  <th style={{ width: 46 }}>
                    <div>
                      <HcCheckBox
                        checked={checkedItem.length > 0 ? true : false}
                        onChange={(e) => checkAllHandler(e.target.checked)}
                      />
                    </div>
                  </th>
                  <th style={{ width: 182 }}>자격증명</th>
                  <th style={{ width: 182 }}>자격증 번호</th>
                  <th style={{ width: 182 }}>등급</th>
                  <th style={{ width: 182 }}>점수</th>
                  <th style={{ width: 186 }}>인증기관</th>
                  <th style={{ width: 120 }}>취득일자</th>
                  <th style={{ width: 120 }}>만료일자</th>
                  <th style={{ width: 120 }}>-</th>
                </tr>
              </thead>
              <tbody style={{ maxWidth: 346 }}>
                <tr>
                  <td>
                    <div>
                      <HcCheckBox
                        checked={checkedItem.includes(1)}
                        onChange={(e) => {
                          checkHandler(e.target.checked, 1);
                        }}
                      />
                    </div>
                  </td>
                  <td>DAsp</td>
                  <td>12345678900000</td>
                  <td>-</td>
                  <td>-</td>
                  <td>한국 데이터 산업협회</td>
                  <td>2022.01.01</td>
                  <td>2022.01.01</td>
                  <td>
                    <TableActionBtn />
                  </td>
                </tr>
              </tbody>
            </HcTable>
          </HcTableContainer>
        </TableContainer>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400, zIndex: 10 }}>
        <div>
          {edit == false ? (
            <>
              {" "}
              <HcButton
                onClick={() => {
                  setEdit(true);
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
                  setEdit(false);
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

export default AbilityDetail;
