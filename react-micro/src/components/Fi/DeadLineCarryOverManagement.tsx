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
import { HcContentPopupAdv } from "common/HcPopup";
import HcCheckBox from "common/HcCheckBox";

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

const PopupContent = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #5d5d62;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const DisabledLabel = styled.div`
  display: inline-block;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #5d5d62;
  opacity: 0.5;
  margin-left: 14px;
`;

const NormalLabel = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #5d5d62;
  margin-left: 14px;
`;

const CheckboxItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  margin-left: 30px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

const DeadLineCarryOverManagement = ({
  match,
}: RouteComponentProps<MatchParams>) => {
  const [openPop, setOpenPop] = React.useState(false);
  const [popType, setPopType] = React.useState(1);

  const Popups = () => {
    return (
      <HcContentPopupAdv
        open={openPop}
        width={"600px"}
        height={"340px"}
        header={{ 1: "마감 확인", 2: "이월 항목 선택" }[popType]}
        close={() => {
          setOpenPop(false);
        }}
        style={{
          width: "100%",
          position: "unset",
          top: "unset",
          right: "unset",
          marginTop: "32px",
        }}
      >
        {
          {
            1: (
              <>
                <PopupContent>해당 기수에 대한 마감이 진행됩니다.</PopupContent>
                <PopupContent>진행하시겠습니까?</PopupContent>
                <div
                  style={{
                    float: "right",
                    position: "absolute",
                    bottom: "30px",
                    right: "30px",
                  }}
                >
                  <HcButton
                    onClick={() => {
                      setOpenPop(false);
                    }}
                    styles="primary"
                    style={{
                      marginRight: "12px",
                      height: "40px",
                      width: "80px",
                    }}
                    size="medium"
                  >
                    확인
                  </HcButton>
                  <HcButton
                    onClick={() => {
                      setOpenPop(false);
                    }}
                    styles="line"
                    style={{ height: "40px", width: "80px" }}
                    size="medium"
                  >
                    취소
                  </HcButton>
                </div>
              </>
            ),
            2: (
              <>
                <PopupContent>이월할 항목을 선택해 주세요.</PopupContent>
                <div style={{ marginTop: "37px" }}>
                  <CheckboxItemWrapper>
                    <HcCheckBox
                      checked
                      disabled
                      onChange={() => {}}
                      labelWrap={false}
                    />
                    <DisabledLabel>장부</DisabledLabel>
                  </CheckboxItemWrapper>
                  <CheckboxItemWrapper>
                    <HcCheckBox
                      checked={false}
                      onChange={() => {}}
                      labelWrap={false}
                    />
                    <NormalLabel>감가상각</NormalLabel>
                  </CheckboxItemWrapper>
                </div>
                <div
                  style={{
                    float: "right",
                    position: "absolute",
                    bottom: "30px",
                    right: "30px",
                  }}
                >
                  <HcButton
                    onClick={() => {
                      setOpenPop(false);
                    }}
                    styles="primary"
                    style={{
                      marginRight: "12px",
                      height: "40px",
                      width: "80px",
                    }}
                    size="medium"
                  >
                    확인
                  </HcButton>
                  <HcButton
                    onClick={() => {
                      setOpenPop(false);
                    }}
                    styles="line"
                    style={{ height: "40px", width: "80px" }}
                    size="medium"
                  >
                    취소
                  </HcButton>
                </div>
              </>
            ),
          }[popType]
        }
      </HcContentPopupAdv>
    );
  };

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
                onClick={() => {
                  setOpenPop(true);
                  setPopType(1);
                }}
                styles="line"
                style={{ marginRight: "10px" }}
                size="medium"
              >
                마감
              </HcButton>
              <HcButton
                onClick={() => {
                  setOpenPop(true);
                  setPopType(2);
                }}
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
      <Popups />
    </div>
  );
};

export default DeadLineCarryOverManagement;
