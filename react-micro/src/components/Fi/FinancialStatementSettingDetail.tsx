import React from "react";
import styled from "styled-components";
import { Link, RouteComponentProps, Route, useHistory } from "react-router-dom";
import { ComponentWrapper, VariableMultiLayout } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  Wrapper,
  HcSelect,
  Title,
} from "common/HcTextField";
import queryString from "query-string";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import HcButton from "common/HcButton";
import { FilterButton, SettingButton } from "common/HcTableButton";
import HcBottomBar from "common/HcBottomBar";
import "common/Table.css";
import { HcDateRangePicker } from "common/HcDatePicker";
import {
  SortableCont,
  SortableItem,
  arrayMove,
  RowHandler,
} from "common/HcDraggableTable";

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

const testAccountData = [
  {
    code: "111001",
    name: "현금",
    outputName: "현금",
    parentAccount: "당좌자산",
    useYn: true,
    outputOrder: "01",
  },
  {
    code: "111002",
    name: "현금2",
    outputName: "현금2",
    parentAccount: "당좌자산2",
    useYn: true,
    outputOrder: "01",
  },
  {
    code: "111003",
    name: "현금3",
    outputName: "현금3",
    parentAccount: "당좌자산",
    useYn: true,
    outputOrder: "01",
  },
];

const FinancailStatementSettingDetail = ({
  location,
  match,
}: RouteComponentProps) => {
  const [detailData, setDetailData] = React.useState(data);
  const [barOpen, setbarOpen] = React.useState(true);

  const history = useHistory();

  const DetailState = () => {
    const query = queryString.parse(location.search);
    return (
      <>
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
                <LabelPictureTextField>
                  {detailData.round}
                </LabelPictureTextField>
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
              <div
                style={{
                  float: "right",
                  display: "flex",
                  marginBottom: "20px",
                }}
              >
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
              <div
                style={{
                  float: "right",
                  display: "flex",
                  marginBottom: "20px",
                }}
              >
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
        <HcBottomBar
          open={barOpen}
          style={{ width: 1400, marginLeft: "-39px" }}
        >
          <div>
            <HcButton
              onClick={() => {
                history.push({
                  pathname: `${match.url}/edit`,
                  search: "id=" + query.id,
                });
              }}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              수정
            </HcButton>

            <HcButton
              onClick={() => {
                setbarOpen(false);
              }}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              삭재
            </HcButton>
          </div>
        </HcBottomBar>
      </>
    );
  };

  const EditState = () => {
    const query = queryString.parse(location.search);
    const [editData, setEditData] = React.useState(data);

    const [items, setItems] = React.useState(testAccountData);

    const onSortEnd = React.useCallback(({ oldIndex, newIndex }) => {
      setItems((oldItems) => arrayMove(oldItems, oldIndex, newIndex));
    }, []);

    return (
      <>
        <HcTitleTextField
          titleName="재무제표 양식 수정"
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
                <Title required={false} style={{ marginBottom: "2px" }}>
                  {"재무제표코드"}
                </Title>
                <LabelPictureTextField>{query.id}</LabelPictureTextField>
              </Wrapper>
              <Wrapper style={{ marginTop: "20px" }}>
                <Title required={false}>{"적용기간"}</Title>
                <HcDateRangePicker />
              </Wrapper>
            </p>
            <p
              style={{
                flexGrow: 1,
                marginBlockStart: "0px",
                marginBlockEnd: "0px",
              }}
            >
              <HcTextField
                titleName="재무제표명"
                name="financialStatementName"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                value={editData.stateName}
                required
                style={{ width: "360px" }}
              />
              <Wrapper style={{ marginTop: "20px" }}>
                <Title>{"대체 전표"}</Title>
                <div style={{ marginTop: "23px" }}>
                  <HcRadioGroup
                    defaultValue={editData ? "use" : "usenot"}
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
                    <HcRadioButton value="use">
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
                    <HcRadioButton value="usenot">
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
              <HcSelect
                onChange={(e) => {}}
                titleName="양식구분"
                required
                name={""}
                value={"1"}
                style={{ width: "360px", marginBottom: "20px" }}
              >
                <option value="" hidden>
                  양식구분
                </option>
                <option value="1">재무상태표</option>
                <option value="2">손익계산서</option>
                <option value="3">합계잔액시산표</option>
                <option value="4">원가보고서</option>
                <option value="5">현금흐름표</option>
              </HcSelect>
              <HcSelect
                onChange={(e) => {}}
                titleName="올림구분"
                required
                name={""}
                value={"1"}
                style={{ width: "360px" }}
              >
                <option value="" hidden>
                  올림구분
                </option>
                <option value="1">반올림</option>
                <option value="2">절하</option>
                <option value="3">절상</option>
                <option value="4">사용 안 함</option>
              </HcSelect>
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
              <div>
                <HcButton styles="secondary" size="medium">
                  생성
                </HcButton>
                <div style={{ float: "right", display: "flex" }}>
                  <FilterButton style={{ marginRight: "6px" }} />
                  <SettingButton />
                </div>
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
              <div>
                <HcButton styles="secondary" size="medium">
                  생성
                </HcButton>
                <div style={{ float: "right", display: "flex" }}>
                  <FilterButton style={{ marginRight: "6px" }} />
                  <SettingButton />
                </div>
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
                  <SortableCont
                    onSortEnd={onSortEnd}
                    axis="y"
                    lockAxis="y"
                    lockToContainerEdges={true}
                    lockOffset={["30%", "50%"]}
                    helperClass="helperContainerClass"
                    useDragHandle={true}
                    distance={1}
                    style={{
                      display: "block",
                      overflow: "overlay",
                      height: 446,
                    }}
                  >
                    {items.map((item, index) => (
                      <SortableItem
                        key={`item-${index}`}
                        index={index}
                        style={{
                          display: "table",
                          width: "100%",
                          tableLayout: "fixed",
                          height: "46px",
                        }}
                        onClick={() => {
                          alert("SUCESS");
                        }}
                      >
                        <td>
                          <div className="firstElement">
                            <RowHandler />
                            {item.code}
                          </div>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.outputName}</td>
                        <td>{item.parentAccount}</td>
                        <td>{item.useYn ? "사용" : "사용안함"}</td>
                        <td>{item.outputOrder}</td>
                      </SortableItem>
                    ))}
                  </SortableCont>
                </table>
              </TableContainer>
            </div>
          </div>
        </div>
        <HcBottomBar
          open={barOpen}
          style={{ width: 1400, marginLeft: "-39px" }}
        >
          <div>
            <HcButton
              onClick={() => {}}
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
              삭재
            </HcButton>
          </div>
        </HcBottomBar>
      </>
    );
  };
  return (
    <>
      <div style={{ display: "block", width: "100%", marginTop: "16px" }}>
        <Route exact path={match.url} component={DetailState} />
        <Route path={`${match.url}/edit`} component={EditState} />
      </div>
    </>
  );
};

export default FinancailStatementSettingDetail;
