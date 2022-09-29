import React from "react";
import styled, { keyframes, Keyframes } from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import { ComponentWrapper, VariableMultiLayout } from "common/HcCommonLayout";
import HcTree from "common/HcTree";
import HcTextField, {
  HcSelect,
  HcSearchTextField,
  HcTagNoInput,
  HcTitleTextField,
  HcTextFieldLabel,
  Wrapper,
  Title,
  HcSearchBtnInputField,
  TextField,
  HcTagNoInputObject,
} from "common/HcTextField";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import { HcTreePopupFi } from "common/HcPopup";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import { useCounter } from "router/Root";
import { getData } from "api";
import { HcDatePicker } from "common/HcDatePicker";
import "common/Table.css";
import { FilterButton, SettingButton } from "common/HcTableButton";
import HcCheckBox from "common/HcCheckBox";

interface MatchParams {
  id: string;
}

const TreeContArea = styled.div`
  width: 100%;
  min-height: 501px;
  display: block;
`;

const TreeContAreaTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-transform: uppercase;
  min-height: 60px;
  width: 284px;
  padding: 12px;

  color: #000000;
  border-bottom: 1px solid #e0e0e0;
`;

const CreateTreeContAreaTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-transform: uppercase;
  height: 60px;
  width: 284px;
  padding: 12px;

  color: #000000;
  border: 1px solid #e0e0e0;
`;

const TreeTagAreaTitle = styled.label`
  font-size: 13px;
  display: block;
  margin-bottom: 10px;
`;

const ContAreaTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #2d2d31;
  margin: 14px 0px;
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

let num = 100000;
const getId = () => {
  num = num + 1;
  return num;
};

const data = Array(105)
  .fill(undefined)
  .map(() => ({
    id: getId(),
    accountCode: "10100",
    accountGroupName: "현금",
    devitCredit: "차변",
    endDate: "2022.12.31",
    useYn: "사용",
    proofRequired: "사용",
    budgetControlYn: "사용",
    reimbursementYn: "사용",
    forexAccountYn: "사용",
    title: "test",
  }));

const FiAccountManagement = ({ match }: RouteComponentProps<MatchParams>) => {
  const myCounter = useCounter();
  myCounter.myTitle = "계정과목관리";

  const getDatas = async () => {
    const data = await getData();
    console.log(data);
  };

  React.useEffect(() => {
    getDatas();
  }, []);

  /*TagInput */
  const [tags, setTags] = React.useState([
    "가수금 현금 입금",
    "물품 매각 관련 현금 입금",
    "용역제공 관련 현금 입금",
  ]);
  /*TagInput */

  /*Create */
  const [isCreate, setIsCreates] = React.useState(false);
  const [isDetail, setIsDetail] = React.useState(false);
  /*Create */

  /*Search */
  const [searchVal, setsearchVal] = React.useState("");
  /*Search */

  /* Current Data*/
  const [currentData, setcurrentData] = React.useState({
    id: "",
    title: "",
  });

  /* Current Data*/

  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(false);
  /*BottomBar */

  /*Tree*/
  const [items, setItems] = React.useState([
    {
      id: "1000000",
      title: "[1000000] 자산",
      items: [
        {
          id: "110000",
          title: "[110000] 유동 자산",
          items: [
            {
              id: "110001",
              title: "[110001] 현금",
            },
            {
              id: "110002",
              title: "[110002] 현금성 자산",
            },
          ],
        },
        {
          id: "120000",
          title: "[120000] 비유동자산",
          items: [
            {
              id: "120001",
              title: "[120001] 장기금융상품",
            },
            {
              id: "120002",
              title: "[120002] 장기 매출 채권 및 기타 유동채권",
            },
          ],
        },
      ],
    },
    {
      id: "200000",
      title: "[200000] 부채",
      items: [
        { id: "2-1", title: "child 2-1" },
        {
          id: "2-2",
          title: "child 2-2",
        },
      ],
    },
    {
      id: "300000",
      title: "[300000] 자본",
    },
    {
      id: "400000",
      title: "[400000] 매출",
    },
    {
      id: "500000",
      title: "[500000] 매출 원가",
    },
  ]);
  /*Tree*/

  const [createData, setCreateData] = React.useState({
    accountCode: "110003",
    debitCreditSetup: 1,
    accountName: "제예금",
    relatedAccount: "",
    accountType: 1,
    enable: "use",
    tags: [
      "가수금 현금 입금",
      "물품 매각 관련 현금 입금",
      "용역제공 관련 현금 입금",
    ],
  });

  const [selRelatedAccount, setSelRelatedAccount] = React.useState({
    id: 0,
    title: "",
    accountCode: "",
    accountGroupName: "",
    devitCredit: "",
    endDate: "",
    useYn: "",
    proofRequired: "",
    budgetControlYn: "",
    reimbursementYn: "",
    forexAccountYn: "",
  });

  const CreateStatus = React.forwardRef((props, ref) => {
    /*TagInput */
    const [inputVal, setInputVal] = React.useState("");
    /*TagInput */

    /*SelectData */

    const [createData, setcreateData] = React.useState({
      accountCode: "110003",
      debitCreditSetup: 1,
      accountName: "제예금",
      relatedAccount: "",
      accountType: 1,
      enable: "use",
      tags: [
        "가수금 현금 입금",
        "물품 매각 관련 현금 입금",
        "용역제공 관련 현금 입금",
      ],
    });
    /*SelectData */

    /*Modal */
    const [modalOpen, setModalOpen] = React.useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };
    /*Modal */

    React.useEffect(() => {
      setcreateData((prevState) => ({
        ...prevState,
        relatedAccount: selRelatedAccount.title,
      }));
    }, [selRelatedAccount]);

    React.useImperativeHandle(ref, () => ({
      importData() {
        return createData;
      },
    }));

    return (
      <>
        <div
          className="tree_content_area_container"
          style={{
            width: "inherit",
            minHeight: "191px",
            display: "inline-block",
          }}
        >
          <VariableMultiLayout>
            <div
              style={{
                flexGrow: 1,
                marginBlockStart: "0px",
                marginBlockEnd: "0px",
                marginRight: "60px",
              }}
            >
              <HcTextField
                titleName="계정코드"
                name="accountCode"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
                required
                value={createData.accountName}
                onChange={(e) => {
                  setcreateData((prevState) => ({
                    ...prevState,
                    accountName: e.target.value,
                  }));
                }}
              />
              <HcTextField
                titleName="계정과목명(보조언어)"
                name="accountName"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
                value={""}
                placeholder={"계정명 입력"}
                onChange={(e) => {
                  setcreateData((prevState) => ({
                    ...prevState,
                    accountName: e.target.value,
                  }));
                }}
              />
              <HcTextField
                titleName="계정속성"
                name="accountName"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
                required
                value={"전체"}
                onChange={(e) => {
                  setcreateData((prevState) => ({
                    ...prevState,
                    accountName: e.target.value,
                  }));
                }}
              />
              <HcTextField
                titleName="종료일"
                name="accountName"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
                required
                value={"2022.12.31"}
                onChange={(e) => {
                  setcreateData((prevState) => ({
                    ...prevState,
                    accountName: e.target.value,
                  }));
                }}
              />
              <Wrapper>
                <Title required={true}>{"예산 통제 여부"}</Title>
                <div style={{ marginTop: "20px" }}>
                  <HcRadioGroup
                    defaultValue={createData.enable}
                    onChange={(value) => {
                      setcreateData((prevState) => ({
                        ...prevState,
                        enable: value,
                      }));
                      console.log(createData.enable);
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
            </div>
            <div
              style={{
                flexGrow: 1,
                marginBlockStart: "0px",
                marginBlockEnd: "0px",
                marginRight: "60px",
              }}
            >
              <HcTextField
                titleName="계정명"
                name="accountName"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
                required
                value={""}
                placeholder={"계정명 입력"}
                onChange={(e) => {
                  setcreateData((prevState) => ({
                    ...prevState,
                    accountName: e.target.value,
                  }));
                }}
              />
              <HcTextField
                titleName="출력계정명"
                name="accountName"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
                value={""}
                placeholder={"계정명 입력"}
                onChange={(e) => {
                  setcreateData((prevState) => ({
                    ...prevState,
                    accountName: e.target.value,
                  }));
                }}
              />
              <HcSelect
                titleName="차/대구분"
                required
                style={{ width: "386px", marginBottom: 20 }}
                value={createData.accountType}
                name={""}
                onChange={(e) => {
                  setcreateData((prevState) => ({
                    ...prevState,
                    accountType: e.target.value,
                  }));
                }}
              >
                <option value={1}>차/대 필수</option>
                <option value={2}>일반 계정</option>
                <option value={3}>차감 계정</option>
              </HcSelect>
              <Wrapper style={{ marginBottom: "20px" }}>
                <Title required={true}>{"사용여부"}</Title>
                <div style={{ marginTop: "18px" }}>
                  <HcRadioGroup
                    defaultValue={createData.enable}
                    onChange={(value) => {
                      setcreateData((prevState) => ({
                        ...prevState,
                        enable: value,
                      }));
                      console.log(createData.enable);
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
              <Wrapper style={{ marginBottom: "20px" }}>
                <Title required={true}>{"반제 여부"}</Title>
                <div style={{ marginTop: "18px" }}>
                  <HcRadioGroup
                    defaultValue={createData.enable}
                    onChange={(value) => {
                      setcreateData((prevState) => ({
                        ...prevState,
                        enable: value,
                      }));
                      console.log(createData.enable);
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
            </div>
            <div
              style={{
                flexGrow: 1,
                marginBlockStart: "0px",
                marginBlockEnd: "0px",
                marginRight: "60px",
              }}
            >
              <HcSelect
                titleName="계정레벨"
                required
                style={{ width: "386px", marginBottom: 20 }}
                value={createData.accountType}
                name={""}
                onChange={(e) => {
                  setcreateData((prevState) => ({
                    ...prevState,
                    accountType: e.target.value,
                  }));
                }}
              >
                <option value={1}>전체</option>
                <option value={2}>일반 계정</option>
                <option value={3}>차감 계정</option>
              </HcSelect>
              <HcTextField
                titleName="출력계정명(보조언어)"
                name="accountName"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
                value={""}
                placeholder={"계정명 입력"}
                onChange={(e) => {
                  setcreateData((prevState) => ({
                    ...prevState,
                    accountName: e.target.value,
                  }));
                }}
              />
              <Wrapper style={{ marginBottom: "20px" }}>
                <HcSearchBtnInputField
                  titleName="상위계정"
                  placeholder="계정 선택"
                  onClick={openModal}
                  value={createData.relatedAccount}
                  style={{ width: "386px" }}
                />
              </Wrapper>
              <Wrapper style={{ marginBottom: "20px" }}>
                <Title required={true}>{"증빙 필수입력 여부"}</Title>
                <div style={{ marginTop: "18px" }}>
                  <HcRadioGroup
                    defaultValue={createData.enable}
                    onChange={(value) => {
                      setcreateData((prevState) => ({
                        ...prevState,
                        enable: value,
                      }));
                      console.log(createData.enable);
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
              <Wrapper style={{ marginBottom: "20px" }}>
                <Title required={true}>{"외환 계정 여부"}</Title>
                <div style={{ marginTop: "18px" }}>
                  <HcRadioGroup
                    defaultValue={createData.enable}
                    onChange={(value) => {
                      setcreateData((prevState) => ({
                        ...prevState,
                        enable: value,
                      }));
                      console.log(createData.enable);
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
            </div>
          </VariableMultiLayout>
        </div>

        <div style={{ marginTop: 32, minHeight: "182px" }}>
          <VariableMultiLayout>
            <div
              style={{
                flexGrow: 1,
                marginBlockStart: "0px",
                marginBlockEnd: "0px",
                marginRight: "60px",
              }}
            >
              <ContAreaTitle>관리 항목</ContAreaTitle>
              <div style={{ display: "flex", justifyContent: "end" }}>
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
                      <th>관리항목코드</th>
                      <th>관리항목명</th>
                      <th>필수</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      display: "block",
                      overflow: "overlay",
                      maxHeight: 229,
                    }}
                  >
                    <tr
                      style={{
                        display: "table",
                        width: "100%",
                        tableLayout: "fixed",
                        height: "46px",
                      }}
                    >
                      <td>A01</td>
                      <td>귀속사업장</td>
                      <td>
                        <HcSelect
                          onChange={(e) => {}}
                          titleName=""
                          name={""}
                          style={{ width: "100%" }}
                        >
                          <option value="1">대변 필수</option>
                          <option value="2">BMW</option>
                        </HcSelect>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TableContainer>
            </div>
            <div
              style={{
                flexGrow: 1,
                marginBlockStart: "0px",
                marginBlockEnd: "0px",
              }}
            >
              <ContAreaTitle>연동항목</ContAreaTitle>
              <div style={{ display: "flex", justifyContent: "end" }}>
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
                      <th>관리항목코드</th>
                      <th>관리항목명</th>
                      <th>필수</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      display: "block",
                      overflow: "overlay",
                      maxHeight: 229,
                    }}
                  >
                    <tr
                      style={{
                        display: "table",
                        width: "100%",
                        tableLayout: "fixed",
                        height: "46px",
                      }}
                    >
                      <td>A01</td>
                      <td>귀속사업장</td>
                      <td>
                        <HcSelect
                          onChange={(e) => {}}
                          titleName=""
                          name={""}
                          style={{ width: "100%" }}
                        >
                          <option value="1">필수</option>
                          <option value="2">BMW</option>
                        </HcSelect>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TableContainer>
            </div>
          </VariableMultiLayout>
        </div>

        <div style={{ display: "block", marginTop: "20px" }}>
          <TreeTagAreaTitle>적요</TreeTagAreaTitle>
          {/* 
          <TextField
            name="name"
            value={inputVal}
            placeholder="적요 입력"
            onChange={(e) => {
              const lengthOfInputValue = inputVal.split("").length;

              if (lengthOfInputValue !== 10) {
                setInputVal(e.currentTarget.value);
              }
            }}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                inputVal.trim() !== "" && props.tags.length < 4 
                setcreateData((prevState) => ({
                  ...prevState,
                  tags: [
                    ...prevState.tags,
                    (e.target as HTMLTextAreaElement).value,
                  ],
                }));
                setInputVal("");
              }
            }}
            style={{ width: "284px" }}
          />
        */}
          <HcTagNoInputObject
            tags={createData.tags}
            setTags={setcreateData}
            style={{
              background: "#FFFFFF",
              width: "1320px",
              minHeight: "168px",
              border: "1px solid #CECECE",
            }}
            delete={isCreate}
          />
        </div>
        <HcTreePopupFi
          open={modalOpen}
          close={closeModal}
          header="계정 과목 조회"
        >
          <HcSearchTextField
            name="name"
            value={searchVal}
            placeholder="계정 코드 혹은 계정 과목명 검색"
            style={{ width: "550px" }}
            onChange={(e) => {
              const lengthOfInputValue = searchVal.split("").length;

              if (lengthOfInputValue !== 10)
                setsearchVal(e.currentTarget.value);
            }}
            onKeyDown={(e) => {}}
          />

          <HcTree
            items={items}
            style={{ minHeight: "612px", width: "550px", marginTop: "13px" }}
            currentData={selRelatedAccount}
            setcurrentData={setSelRelatedAccount}
            closeModal={closeModal}
          />
        </HcTreePopupFi>
      </>
    );
  });

  function DetailStatus() {
    return (
      <>
        <div
          className="tree_content_area_container"
          style={{
            width: "inherit",
            minHeight: "191px",
            display: "inline-block",
          }}
        >
          <VariableMultiLayout>
            <div
              style={{
                flexGrow: 1,
                marginBlockStart: "0px",
                marginBlockEnd: "0px",
                marginRight: "60px",
              }}
            >
              <HcTextFieldLabel
                titleName="계정 코드"
                name="name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
              >
                {selRelatedAccount.accountCode}
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="계정과목명(보조언어)"
                name="name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
              >
                현금
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="계정속성"
                name="name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
              >
                전체
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="종료일"
                name="name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
              >
                2022.06.25
              </HcTextFieldLabel>
              <Wrapper>
                <Title>{"예산 통제 여부"}</Title>
                <div style={{ marginTop: "20px" }}>
                  <HcRadioGroup
                    defaultValue={"use"}
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
            </div>
            <div
              style={{
                flexGrow: 1,
                marginBlockStart: "0px",
                marginBlockEnd: "0px",
                marginRight: "60px",
              }}
            >
              <HcTextFieldLabel
                titleName="계정명"
                name="name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
              >
                현금
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="출력계정명"
                name="name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
              >
                현금
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="차/대구분"
                name="name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
              >
                차변 계정
              </HcTextFieldLabel>
              <Wrapper style={{ marginBottom: 20 }}>
                <Title>{"사용여부"}</Title>
                <div style={{ marginTop: "20px" }}>
                  <HcRadioGroup
                    defaultValue={"use"}
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
              <Wrapper>
                <Title>{"반제 여부"}</Title>
                <div style={{ marginTop: "20px" }}>
                  <HcRadioGroup
                    defaultValue={"use"}
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
            </div>
            <div
              style={{
                flexGrow: 1,
                marginBlockStart: "0px",
                marginBlockEnd: "0px",
              }}
            >
              <HcTextFieldLabel
                titleName="계정레벨"
                name="name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
              >
                과목
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="출력계정명(보조언어)"
                name="name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
              >
                현금
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="상위계정"
                name="name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "386px", marginBottom: 20 }}
              >
                유동자산
              </HcTextFieldLabel>
              <Wrapper style={{ marginBottom: 20 }}>
                <Title>{"증빙 필수입력 여부"}</Title>
                <div style={{ marginTop: "20px" }}>
                  <HcRadioGroup
                    defaultValue={"use"}
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
              <Wrapper>
                <Title>{"외환 계정 여부"}</Title>
                <div style={{ marginTop: "20px" }}>
                  <HcRadioGroup
                    defaultValue={"use"}
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
                          marginRight: "40px",
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
            </div>
          </VariableMultiLayout>
        </div>
        <div style={{ marginTop: 32, minHeight: "182px" }}>
          <VariableMultiLayout>
            <div
              style={{
                flexGrow: 1,
                marginBlockStart: "0px",
                marginBlockEnd: "0px",
                marginRight: "60px",
              }}
            >
              <ContAreaTitle>관리 항목</ContAreaTitle>
              <div style={{ display: "flex", justifyContent: "end" }}>
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
                      <th>관리항목코드</th>
                      <th>관리항목명</th>
                      <th>필수</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      display: "block",
                      overflow: "overlay",
                      maxHeight: 229,
                    }}
                  >
                    <tr
                      style={{
                        display: "table",
                        width: "100%",
                        tableLayout: "fixed",
                        height: "46px",
                      }}
                    >
                      <td>A01</td>
                      <td>귀속사업장</td>
                      <td>
                        <HcSelect
                          onChange={(e) => {}}
                          titleName=""
                          name={""}
                          style={{ width: "100%" }}
                        >
                          <option value="1">대변 필수</option>
                          <option value="2">BMW</option>
                        </HcSelect>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TableContainer>
            </div>
            <div
              style={{
                flexGrow: 1,
                marginBlockStart: "0px",
                marginBlockEnd: "0px",
              }}
            >
              <ContAreaTitle>연동항목</ContAreaTitle>
              <div style={{ display: "flex", justifyContent: "end" }}>
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
                      <th>관리항목코드</th>
                      <th>관리항목명</th>
                      <th>필수</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      display: "block",
                      overflow: "overlay",
                      maxHeight: 229,
                    }}
                  >
                    <tr
                      style={{
                        display: "table",
                        width: "100%",
                        tableLayout: "fixed",
                        height: "46px",
                      }}
                    >
                      <td>A01</td>
                      <td>귀속사업장</td>
                      <td>
                        <HcSelect
                          onChange={(e) => {}}
                          titleName=""
                          name={""}
                          style={{ width: "100%" }}
                        >
                          <option value="1">필수</option>
                          <option value="2">BMW</option>
                        </HcSelect>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TableContainer>
            </div>
          </VariableMultiLayout>
        </div>
        <div style={{ display: "inline-block", marginTop: 20, width: "100%" }}>
          <TreeTagAreaTitle>적요</TreeTagAreaTitle>
          <HcTagNoInput
            tags={tags}
            setTags={setTags}
            style={{
              background: "#FFFFFF",
              width: "100%",
              minHeight: "168px",
              border: "1px solid #CECECE",
            }}
            delete={false}
          />
        </div>
      </>
    );
  }

  const ListPage = () => {
    const [checkedItem, setCheckedItem]: any = React.useState([]);

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
        data.forEach((i) => ids.push(i.id));
        setCheckedItem(ids);
      } else {
        setCheckedItem([]);
      }
    }

    const columns = [
      <div style={{ paddingTop: 7 }}>
        <HcCheckBox
          checked={checkedItem.length > 0 ? true : false}
          onChange={(e) => checkAllHandler(e.target.checked)}
        />
      </div>,
      "계정코드",
      "계정과목명",
      "차/대구분",
      "종료일",
      "사용여부",
      "증빙 필수입력",
      "예산 통제 여부",
      "반제 여부",
      "외환 계정 여부",
    ];

    return (
      <>
        <div style={{ marginBottom: "20px" }}>
          <HcButton
            onClick={() => {
              setIsCreates(true);
              setbarOpen(true);
            }}
            styles="secondary"
            size="medium"
            /*
                    style={
                      adminYn
                        ? { opacity: 1, transition: "opacity 0.5s ease" }
                        : { opacity: 0, transition: "opacity 0.5s ease" }
                    }
                    */
          >
            + 생성
          </HcButton>

          <div
            style={{
              display: "inline-flex",
              float: "right",
              alignItems: "center",
            }}
          >
            <FilterButton style={{ marginRight: "6px" }} />
            <SettingButton />
          </div>
        </div>
        <TableContainer>
          <table className="table table-hover">
            <thead>
              <tr>
                {columns.map((column: any) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  style={{
                    backgroundColor: checkedItem.includes(item.id)
                      ? "#DFECFF"
                      : "",
                  }}
                >
                  <td>
                    <HcCheckBox
                      checked={checkedItem.includes(item.id)}
                      onChange={(e) => {
                        checkHandler(e.target.checked, item.id);
                      }}
                    />
                  </td>
                  <td>{item.accountCode}</td>
                  <td>
                    <div
                      onClick={() => {
                        setSelRelatedAccount(item);
                        setIsDetail(true);
                        setbarOpen(true);
                      }}
                    >
                      {item.accountGroupName}
                    </div>
                  </td>
                  <td>{item.devitCredit}</td>

                  <td>{item.endDate}</td>
                  <td>{item.useYn}</td>
                  <td>{item.proofRequired}</td>
                  <td>{item.budgetControlYn}</td>
                  <td>{item.reimbursementYn}</td>
                  <td>{item.forexAccountYn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </>
    );
  };
  const childRef = React.useRef<any>(null);
  return (
    <>
      <ComponentWrapper style={{ display: "block" }}>
        <HcTitleTextField titleName="계정과목관리" isBackIcon={false} />
        <div className="body_area" style={{ marginTop: "57px" }}>
          <TreeContArea>
            {isCreate === true ? (
              <CreateStatus ref={childRef} />
            ) : isDetail == true ? (
              <DetailStatus />
            ) : (
              <ListPage />
            )}
          </TreeContArea>
        </div>
      </ComponentWrapper>
      <HcBottomBar open={barOpen}>
        <div>
          {isCreate === true ? (
            <HcButton
              onClick={() => {
                //openModal();

                setCreateData(childRef.current.importData());
                items.push({
                  id: createData.accountCode,
                  title: createData.accountName,
                });
                setIsCreates(false);
                setbarOpen(false);
              }}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              저장
            </HcButton>
          ) : (
            <HcButton
              onClick={() => {
                //openModal();
                setIsDetail(false);
                setbarOpen(false);
              }}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              수정
            </HcButton>
          )}

          <HcButton
            onClick={() => {
              setIsCreates(false);
            }}
            styles="line"
            style={{ marginRight: "5px" }}
            size="big"
          >
            마감
          </HcButton>
        </div>
      </HcBottomBar>
    </>
  );
};

export default FiAccountManagement;
