import React, { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, { HcSelects } from "common/HcTextField";
import {
  HcTitleTextField,
  HcEditableTextField,
  HcTextFieldLabel,
  HcSelect,
  HcTagNoInput,
  HcSearchTextField,
} from "common/HcTextField";
import { useLocation } from "react-router-dom";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import styled from "styled-components";
import "common/Table.css";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
import HcBottomBar from "common/HcBottomBar";
const Title = styled.div`
  font-family: Noto Sans KR;
  font-style: bold;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  text-transform: uppercase;
  width: fit-content;
  height: 20px;
  color: #656565;
`;

const StyledUl = styled.ul`
  height: fit-content;
  width: fit-content;
  border-radius: 3px;
  margin: 0;
  padding: 4px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
`;
const TypeLi = styled.li`
  display: inline-block;
  padding: 4px 12px 3px;
  border-radius: 2px;
  color: white;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
  &:lastt-child {
    margin-right: 0px;
  }
`;

const DataForm = styled.div`
  width: 1320px;
  height: fit-content;
`;

const LeaveSettingCreate = () => {
  const [data, setData] = useState({
    id: "100004",
    name: "산전후 휴가",
    category: "법적 필수 휴가",
    standardDate: "당월",
    date: 1,
    aply: "신청 시 지급",
    type: "일",
    term: 90,
    comment:
      "임신과 출산으로 소모된 체력을 회복시키기 위해 주어지는 제도로,  사용자는 임신 중의 여성 근로자에게 산전과 산후를 통하여 90일의 보호휴가를 주어야 하는데 이때 산후에 45일 이상의 휴가 기간이 배정되어야 한다.",
    uYN: true,
    pYN: true,
  });

  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */

  return (
    <>
      <ComponentWrapper
        style={{ display: "block", paddingTop: 40, height: "912px" }}
      >
        <HcTitleTextField titleName="휴가 생성" isBackIcon />
        <DataForm style={{ marginTop: 36 }}>
          <>
            <div
              className="first_block"
              style={{
                width: "386px",
                height: "100px",
                float: "left",
                marginRight: "80px",
              }}
            >
              <HcTextField
                titleName={"휴가 코드"}
                required
                value={""}
                onChange={(e) => {}}
                style={{ marginBottom: "20px" }}
              />
              <HcTextField
                titleName={"휴가 지급 방법"}
                required
                value={""}
                onChange={(e) => {}}
                style={{ marginBottom: "20px" }}
              />
              <HcTextField
                titleName={"휴가 발생 기준일"}
                required
                value={""}
                onChange={(e) => {}}
                style={{ marginBottom: "20px" }}
              />
              <div style={{ marginBottom: "20px" }}>
                <Title style={{ color: "#5D5D62", marginBottom: "10px" }}>
                  차감 구분<b style={{ color: "red" }}>*</b>
                </Title>
                <StyledUl style={{ backgroundColor: "#F4F4F4" }}>
                  <TypeLi
                    onClick={(e: any) => {
                      setData({ ...data, type: "일" });
                    }}
                    style={{
                      backgroundColor:
                        data.type == "일" ? "#5D5D62" : "#F4F4F4",
                      color: data.type == "일" ? "white" : "#5D5D62",
                    }}
                  >
                    일
                  </TypeLi>
                  <TypeLi
                    onClick={(e: any) => {
                      setData({ ...data, type: "시간" });
                    }}
                    style={{
                      backgroundColor:
                        data.type == "시간" ? "#5D5D62" : "#F4F4F4",
                      color: data.type == "시간" ? "white" : "#5D5D62",
                    }}
                  >
                    시간
                  </TypeLi>
                  <TypeLi
                    onClick={(e: any) => {
                      setData({ ...data, type: "미차감" });
                    }}
                    style={{
                      backgroundColor:
                        data.type == "미차감" ? "#5D5D62" : "#F4F4F4",
                      color: data.type == "미차감" ? "white" : "#5D5D62",
                    }}
                  >
                    미차감
                  </TypeLi>
                </StyledUl>
              </div>
              <HcTextField
                titleName={"설명"}
                style={{
                  height: 88,
                  width: "1320px",
                  wordBreak: "keep-all",
                }}
                value={""}
                onChange={(e) => {}}
              />
            </div>
            <div
              className="first_block"
              style={{
                width: "387px",
                height: "100px",
                float: "left",
              }}
            >
              <HcTextField
                titleName={"휴가명"}
                required
                value={""}
                onChange={(e) => {}}
                style={{ marginBottom: "20px" }}
              />
              <div style={{ marginBottom: 23 }}>
                {" "}
                <Title style={{ marginBottom: 23 }}>급여 지급</Title>
                <HcRadioGroup defaultValue={"true"} onChange={(value) => {}}>
                  <HcRadioButton value="true">
                    <span style={{ marginRight: 47, marginLeft: 8 }}>유급</span>
                  </HcRadioButton>
                  <HcRadioButton value="false">
                    <span style={{ marginLeft: 8 }}>무급</span>
                  </HcRadioButton>
                </HcRadioGroup>
              </div>
              <HcTextField
                titleName={"휴가 발생일"}
                required
                value={""}
                onChange={(e) => {
                  setData({ ...data, date: e.target.value });
                }}
                style={{ marginBottom: "20px" }}
              />
              <HcTextField
                titleName={"차감 시간"}
                required
                value={""}
                onChange={(e) => {
                  setData({ ...data, date: e.target.value });
                }}
                style={{ marginBottom: "20px" }}
              />
            </div>
            <div
              className="first_block"
              style={{
                width: "387px",
                height: "100px",
                float: "left",
                marginLeft: 80,
              }}
            >
              <HcTextFieldLabel
                titleName={"휴가 구분"}
                style={{ width: "387px", marginBottom: "20px" }}
              >
                {data.category}
              </HcTextFieldLabel>
              <div style={{ marginBottom: 108 }}>
                {" "}
                <Title style={{ marginBottom: 23 }}>휴가 사용 여부</Title>
                <HcRadioGroup
                  defaultValue={String(data.uYN)}
                  onChange={(value) => {}}
                >
                  <HcRadioButton value="true">
                    <span style={{ marginRight: 47, marginLeft: 8 }}>사용</span>
                  </HcRadioButton>
                  <HcRadioButton value="false">
                    <span style={{ marginLeft: 8 }}>사용 안함</span>
                  </HcRadioButton>
                </HcRadioGroup>
              </div>
              <HcTextField
                titleName={"차감일"}
                required
                value={""}
                onChange={(e) => {}}
                style={{ marginBottom: "20px" }}
              />
            </div>
          </>
        </DataForm>
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
    </>
  );
};

export default LeaveSettingCreate;
