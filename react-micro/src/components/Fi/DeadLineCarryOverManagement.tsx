import React from "react";
import styled from "styled-components";
import { Link, RouteComponentProps, Route, useHistory } from "react-router-dom";
import { ComponentWrapper, VariableMultiLayout } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  Wrapper,
  Title,
  HcSelect,
} from "common/HcTextField";
import HcButton from "common/HcButton";
import "common/Table.css";

interface MatchParams {
  id: string;
}

const TopDivWrapper = styled.div`
  width: 100%;
  padding: 30px 40px;
  border: 1px solid #cecece;
  border-radius: 6px;
  min-height: 125px;
`;

const LabelPictureTextField = styled.div`
  height: 45px;
  width: 360px;
  border-bottom: 1px solid #cecece;
  text-overflow: ellipsis;
  font-size: 16px;
  padding: 8px 12px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  color: #000000;
`;

const ContTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #303030;
`;

const TableContainer = styled.div`
  width: 100%;
  overflow: auto;
  overflow-x: auto;
  margin-top: 20px;

  &::-webkit-scrollbar-track {
    background: none;

    position: absolute;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #f5f5f5;
    display: none;
    &:hover {
      display: inline;
    }
  }
  &::-webkit-scrollbar-thumb {
    background: #cecece;
    border-radius: 10px;
  }
  thead th {
    position: sticky;
    top: 0;
    background-color: #ededed;
  }
`;

const DeadLineCarryOverManagement = ({
  match,
}: RouteComponentProps<MatchParams>) => {
  return (
    <div style={{ width: "100%" }}>
      <ComponentWrapper style={{ width: "100%", display: "block" }}>
        <div style={{ display: "block", width: "100%", marginTop: "16px" }}>
          <div>
            <HcTitleTextField
              titleName="마감 및 이월 관리"
              isBackIcon={false}
              style={{ display: "inline-block" }}
            />
            <div style={{ float: "right", lineHeight: "40px" }}>
              <HcButton
                onClick={() => {}}
                styles="line"
                style={{ marginRight: "10px" }}
                size="medium"
              >
                마감
              </HcButton>
              <HcButton
                onClick={() => {}}
                styles="line"
                style={{ marginRight: "10px" }}
                size="medium"
              >
                이월
              </HcButton>
            </div>
          </div>
          <div style={{ marginTop: "37px" }}>
            <TopDivWrapper>
              <VariableMultiLayout>
                <div
                  style={{
                    flexGrow: 1,
                    marginBlockStart: "0px",
                    marginBlockEnd: "0px",
                    marginRight: "80px",
                  }}
                >
                  <Wrapper>
                    <Title required={false}>{"당기 회계  기수"}</Title>
                    <LabelPictureTextField>{"2기"}</LabelPictureTextField>
                  </Wrapper>
                </div>
                <div
                  style={{
                    flexGrow: 1,
                    marginBlockStart: "0px",
                    marginBlockEnd: "0px",
                    marginRight: "80px",
                  }}
                >
                  <Wrapper>
                    <Title required={false}>{"기수 적용 기간"}</Title>
                    <LabelPictureTextField>
                      {"2022.01.01 ~ 2022.12.31"}
                    </LabelPictureTextField>
                  </Wrapper>
                </div>
                <div
                  style={{
                    flexGrow: 1,
                    marginBlockStart: "0px",
                    marginBlockEnd: "0px",
                  }}
                >
                  <Wrapper>
                    <Title required={false}>{"회계 기준"}</Title>
                    <LabelPictureTextField>{"K-IFRS"}</LabelPictureTextField>
                  </Wrapper>
                </div>
              </VariableMultiLayout>
            </TopDivWrapper>
          </div>
          <div style={{ marginTop: "40px" }}>
            <ContTitle>{"마감 및 이월 내역"}</ContTitle>
            <TableContainer>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>{"회계 기수"}</th>
                    <th>{"기수 시작일"}</th>
                    <th>{"기수 종료일"}</th>
                    <th>{"장부 마감"}</th>
                    <th>{"장부 이월"}</th>
                    <th>{"감가 상각 마감"}</th>
                    <th>{"감가 상각 이월"}</th>
                    <th>{"최종 이월자"}</th>
                    <th>{"최종 이월일"}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{"1기"}</td>
                    <td>{"2021.01.01"}</td>
                    <td>{"2022.01.01"}</td>
                    <td>{"Y"}</td>
                    <td>{"Y"}</td>
                    <td>{"Y"}</td>
                    <td>{"N"}</td>
                    <td>{"재무팀 홍길동"}</td>
                    <td>{"2021.12.30"}</td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default DeadLineCarryOverManagement;
