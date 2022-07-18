import React from "react";
import styled from "styled-components";
import { Link, RouteComponentProps, Route, useHistory } from "react-router-dom";
import { ComponentWrapper, VariableMultiLayout } from "common/HcCommonLayout";
import { HcTitleTextField, Wrapper, Title } from "common/HcTextField";
import queryString from "query-string";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import HcButton from "common/HcButton";
import { FilterButton, SettingButton } from "common/HcTableButton";

const SolidWrapper = styled.div`
  border: 1px solid #cecece;
  border-radius: 6px;
  width: 100%;
  margin-top: 37px;
  padding: 30px 40px;
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

const TableTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #303030;
`;

const TableContainer = styled.div`
  width: 100%;
  overflow: overlay;
  overflow-x: hidden;
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
`;

const data = {
  stateName: "재무상태표_내부용",
  formClassification: "재무상태표",
  startDate: "2022.07.01",
  endDate: "2022.12.31",
  slipReplacement: true,
  round: "반올림",
};

const accountGroupData = Array(43)
  .fill(undefined)
  .map(() => ({
    code: "1000000",
    name: "자산",
    level: "대분류",
    parentAccount: "자산",
    debitCredit: "차변",
    group: "그룹",
    useYn: true,
    outputOrder: "01",
  }));

const accountSubjectData = Array(43)
  .fill(undefined)
  .map(() => ({
    code: "111001",
    name: "현금",
    outputName: "현금",
    parentAccount: "당좌자산",
    useYn: true,
    outputOrder: "01",
  }));

const FinancailStatementSettingDetail = ({
  location,
  match,
}: RouteComponentProps) => {
  const query = queryString.parse(location.search);

  const [detailData, setDetailData] = React.useState(data);

  return (
    <div style={{ display: "block", width: "100%", marginTop: "16px" }}>
      <HcTitleTextField
        titleName="재무제표 양식 상세"
        isBackIcon={true}
        style={{ display: "inline-block" }}
      />
      <SolidWrapper>
        <VariableMultiLayout>
          <p
            style={{
              flexGrow: 1,
              marginBlockStart: "0px",
              marginBlockEnd: "0px",
            }}
          >
            <Wrapper>
              <Title required={false}>{"재무제표코드"}</Title>
              <LabelPictureTextField>{query.id}</LabelPictureTextField>
            </Wrapper>
            <Wrapper style={{ marginTop: "20px" }}>
              <Title required={false}>{"적용기간"}</Title>
              <LabelPictureTextField>
                {detailData.startDate}~{detailData.endDate}
              </LabelPictureTextField>
            </Wrapper>
          </p>
          <p
            style={{
              flexGrow: 1,
              marginBlockStart: "0px",
              marginBlockEnd: "0px",
            }}
          >
            <Wrapper>
              <Title required={false}>{"재무제표명"}</Title>
              <LabelPictureTextField>
                {detailData.stateName}
              </LabelPictureTextField>
            </Wrapper>
            <Wrapper style={{ marginTop: "20px" }}>
              <Title>{"대체 전표"}</Title>
              <div style={{ marginTop: "20px" }}>
                <HcRadioGroup
                  defaultValue={detailData ? "use" : "usenot"}
                  onChange={(value) => {
                    /*
                    setcreateData((prevState) => ({
                      ...prevState,
                      enable: value,
                    }));
                    console.log(createData.enable);
                    */
                  }}
                >
                  <HcRadioButton value="use" disabled>
                    <span
                      style={{
                        marginLeft: "8px",
                        fontFamily: "Noto Sans KR",
                        fontSize: "14px",
                        marginRight: "60px",
                      }}
                    >
                      사용
                    </span>
                  </HcRadioButton>
                  <HcRadioButton value="usenot" disabled>
                    <span
                      style={{
                        marginLeft: "8px",
                        fontFamily: "Noto Sans KR",
                        fontSize: "14px",
                      }}
                    >
                      사용 안함
                    </span>
                  </HcRadioButton>
                </HcRadioGroup>
              </div>
            </Wrapper>
          </p>
          <p
            style={{
              flexGrow: 1,
              marginBlockStart: "0px",
              marginBlockEnd: "0px",
            }}
          >
            <Wrapper>
              <Title required={false}>{"양식구분"}</Title>
              <LabelPictureTextField>
                {detailData.formClassification}
              </LabelPictureTextField>
            </Wrapper>
            <Wrapper style={{ marginTop: "20px" }}>
              <Title required={false}>{"올림구분"}</Title>
              <LabelPictureTextField>{detailData.round}</LabelPictureTextField>
            </Wrapper>
          </p>
        </VariableMultiLayout>
      </SolidWrapper>
      <div style={{ width: "100%", minHeight: "600px", marginTop: "38px" }}>
        <div
          style={{
            width: "658px",
            display: "inline-block",
            borderRight: "1px solid #CECECE",
            paddingRight: "12px",
          }}
        >
          <TableTitle>계정그룹</TableTitle>
          <div style={{ marginTop: "18px" }}>
            <HcButton styles="secondary" size="medium">
              생성
            </HcButton>
            <div style={{ float: "right", display: "flex" }}>
              <FilterButton style={{ marginRight: "6px" }} />
              <SettingButton />
            </div>
            <TableContainer>
              <table className="table table-hover" style={{ width: "100%" }}>
                <thead
                  style={{
                    display: "table",
                    width: "inherit",
                    tableLayout: "fixed",
                  }}
                >
                  <tr>
                    <th>계정코드</th>
                    <th>계정명</th>
                    <th>계정레벨</th>
                    <th>상위계정</th>
                    <th>차/대구분</th>
                    <th>그룹속성</th>
                    <th>사용여부</th>
                    <th>출력순서</th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    display: "block",
                    overflow: "overlay",
                    maxHeight: 446,
                  }}
                >
                  {accountGroupData.map((item) => (
                    <tr
                      style={{
                        display: "table",
                        width: "100%",
                        tableLayout: "fixed",
                        height: "46px",
                      }}
                    >
                      <td>{item.code}</td>
                      <td>{item.name}</td>
                      <td>{item.level}</td>
                      <td>{item.parentAccount}</td>
                      <td>{item.debitCredit}</td>
                      <td>{item.group}</td>
                      <td>{item.useYn ? "사용" : "사용안함"}</td>
                      <td>{item.outputOrder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableContainer>
          </div>
        </div>
        <div
          style={{
            width: "658px",
            display: "inline-block",
            paddingLeft: "11px",
          }}
        >
          <TableTitle>계정과목</TableTitle>
          <div style={{ marginTop: "18px" }}>
            <HcButton styles="secondary" size="medium">
              생성
            </HcButton>
            <div style={{ float: "right", display: "flex" }}>
              <FilterButton style={{ marginRight: "6px" }} />
              <SettingButton />
            </div>
            <TableContainer>
              <table className="table table-hover" style={{ width: "100%" }}>
                <thead
                  style={{
                    display: "table",
                    width: "inherit",
                    tableLayout: "fixed",
                  }}
                >
                  <tr>
                    <th>계정코드</th>
                    <th>계정명</th>
                    <th>출력계정명</th>
                    <th>상위계정</th>
                    <th>사용여부</th>
                    <th>출력순서</th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    display: "block",
                    overflow: "overlay",
                    maxHeight: 446,
                  }}
                >
                  {accountSubjectData.map((item) => (
                    <tr
                      style={{
                        display: "table",
                        width: "100%",
                        tableLayout: "fixed",
                        height: "46px",
                      }}
                    >
                      <td>{item.code}</td>
                      <td>{item.name}</td>
                      <td>{item.outputName}</td>
                      <td>{item.parentAccount}</td>
                      <td>{item.useYn ? "사용" : "사용안함"}</td>
                      <td>{item.outputOrder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancailStatementSettingDetail;
