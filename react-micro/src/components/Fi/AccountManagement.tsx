import React from "react";
import styled, { keyframes, Keyframes } from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import { ComponentWrapper } from "common/HcCommonLayout";
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

interface MatchParams {
  id: string;
}

const TreeContArea = styled.div`
  border: 1px solid #cecece;
  border-radius: 5px;
  width: 984px;
  min-height: 501px;
  margin-left: 24px;
  display: inline-block;
  padding: 30px 24px;
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

const FiAccountManagement = ({ match }: RouteComponentProps<MatchParams>) => {
  const myCounter = useCounter();
  myCounter.myTitle = "??????????????????";

  const getDatas = async () => {
    const data = await getData();
    console.log(data);
  };

  React.useEffect(() => {
    getDatas();
  }, []);

  /*TagInput */
  const [tags, setTags] = React.useState([
    "????????? ?????? ??????",
    "?????? ?????? ?????? ?????? ??????",
    "???????????? ?????? ?????? ??????",
  ]);
  /*TagInput */

  /*Create */
  const [isCreate, setIsCreates] = React.useState(false);
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
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */

  /*Tree*/
  const [items, setItems] = React.useState([
    {
      id: "1000000",
      title: "[1000000] ??????",
      items: [
        {
          id: "110000",
          title: "[110000] ?????? ??????",
          items: [
            {
              id: "110001",
              title: "[110001] ??????",
            },
            {
              id: "110002",
              title: "[110002] ????????? ??????",
            },
          ],
        },
        {
          id: "120000",
          title: "[120000] ???????????????",
          items: [
            {
              id: "120001",
              title: "[120001] ??????????????????",
            },
            {
              id: "120002",
              title: "[120002] ?????? ?????? ?????? ??? ?????? ????????????",
            },
          ],
        },
      ],
    },
    {
      id: "200000",
      title: "[200000] ??????",
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
      title: "[300000] ??????",
    },
    {
      id: "400000",
      title: "[400000] ??????",
    },
    {
      id: "500000",
      title: "[500000] ?????? ??????",
    },
  ]);
  /*Tree*/

  const [createData, setCreateData] = React.useState({
    accountCode: "110003",
    debitCreditSetup: 1,
    accountName: "?????????",
    relatedAccount: "",
    accountType: 1,
    enable: "use",
    tags: [
      "????????? ?????? ??????",
      "?????? ?????? ?????? ?????? ??????",
      "???????????? ?????? ?????? ??????",
    ],
  });

  const CreateStatus = React.forwardRef((props, ref) => {
    /*TagInput */
    const [inputVal, setInputVal] = React.useState("");
    /*TagInput */

    const [selRelatedAccount, setSelRelatedAccount] = React.useState({
      id: "",
      title: "",
    });

    /*SelectData */

    const [createData, setcreateData] = React.useState({
      accountCode: "110003",
      debitCreditSetup: 1,
      accountName: "?????????",
      relatedAccount: "",
      accountType: 1,
      enable: "use",
      tags: [
        "????????? ?????? ??????",
        "?????? ?????? ?????? ?????? ??????",
        "???????????? ?????? ?????? ??????",
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
        <CreateTreeContAreaTitle>
          [{createData.accountCode}]{createData.accountName}
        </CreateTreeContAreaTitle>
        <div
          className="tree_content_area_container"
          style={{
            width: "inherit",
            minHeight: "191px",
            marginTop: "20px",
          }}
        >
          <div
            className="first_block"
            style={{
              width: "284px",
              height: "100px",
              float: "left",
              marginRight: "40px",
            }}
          >
            <HcTextFieldLabel
              titleName="?????? ??????"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              required
              style={{ width: "284px", marginBottom: 20 }}
            >
              {createData.accountCode}
            </HcTextFieldLabel>

            <HcSelect
              titleName="???/??????????????????"
              required
              name=""
              style={{ width: "284px" }}
              onChange={(e) => {
                setcreateData((prevState) => ({
                  ...prevState,
                  debitCreditSetup: e.target.value,
                }));
              }}
            >
              <option value={1}>?????? ??????</option>
              <option value={2}>?????? ??????</option>
              <option value={3}>????????? ?????? ??????</option>
            </HcSelect>
          </div>
          <div
            className="first_block"
            style={{
              width: "284px",
              height: "100px",
              float: "left",
              marginRight: "40px",
            }}
          >
            <HcTextField
              titleName="??????????????? *"
              name="accountName"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
              required
              value={createData.accountName}
              onChange={(e) => {
                setcreateData((prevState) => ({
                  ...prevState,
                  accountName: e.target.value,
                }));
              }}
            />
            <HcSearchBtnInputField
              titleName="????????????"
              required
              placeholder="?????? ????????????"
              onClick={openModal}
              value={createData.relatedAccount}
            />
          </div>
          <div
            className="first_block"
            style={{ width: "284px", height: "100px", float: "left" }}
          >
            <HcSelect
              titleName="?????? ??????"
              required
              style={{ width: "284px", marginBottom: 20 }}
              value={createData.accountType}
              name={""}
              onChange={(e) => {
                setcreateData((prevState) => ({
                  ...prevState,
                  accountType: e.target.value,
                }));
              }}
            >
              <option value="" hidden>
                ?????? ??????
              </option>
              <option value={1}>??????</option>
              <option value={2}>?????? ??????</option>
              <option value={3}>?????? ??????</option>
            </HcSelect>
            <Wrapper>
              <Title required={true}>{"????????????"}</Title>
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
                      ??????
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
                      ?????? ??????
                    </span>
                  </HcRadioButton>
                </HcRadioGroup>
              </div>
            </Wrapper>
          </div>
        </div>
        <div style={{ display: "block" }}>
          <TreeTagAreaTitle>??????</TreeTagAreaTitle>
          <TextField
            name="name"
            value={inputVal}
            placeholder="?????? ??????"
            onChange={(e) => {
              const lengthOfInputValue = inputVal.split("").length;

              if (lengthOfInputValue !== 10) {
                setInputVal(e.currentTarget.value);
              }
            }}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                inputVal.trim() !== "" /*&& props.tags.length < 4 */
              ) {
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
          <HcTagNoInputObject
            tags={createData.tags}
            setTags={setcreateData}
            style={{
              background: "#FFFFFF",
              width: "936px",
              minHeight: "168px",
              border: "1px solid #CECECE",
            }}
            delete={isCreate}
          />
        </div>
        <HcTreePopupFi
          open={modalOpen}
          close={closeModal}
          header="?????? ?????? ??????"
        >
          <HcSearchTextField
            name="name"
            value={searchVal}
            placeholder="?????? ?????? ?????? ?????? ????????? ??????"
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

  function NormalStatus() {
    return (
      <>
        <TreeContAreaTitle>{currentData.title}</TreeContAreaTitle>
        <div
          className="tree_content_area_container"
          style={{
            width: "inherit",
            minHeight: "191px",
            marginTop: "20px",
            display: "inline-block",
          }}
        >
          <div
            className="first_block"
            style={{
              width: "284px",
              float: "left",
              marginRight: "40px",
            }}
          >
            <HcTextFieldLabel
              titleName="?????? ??????"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
            >
              {currentData.id}
            </HcTextFieldLabel>
            <HcTextFieldLabel
              titleName="???????????????(????????????)"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
            >
              ??????
            </HcTextFieldLabel>
            <HcTextFieldLabel
              titleName="????????????"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
            >
              ??????
            </HcTextFieldLabel>
            <Wrapper style={{ marginBottom: 20 }}>
              <Title style={{ marginBottom: 0 }}>{"?????????"}</Title>
              <HcDatePicker
                startDate={new Date("1995-12-17")}
                style={{ width: "284px", marginTop: "10px" }}
              />
            </Wrapper>
            <Wrapper>
              <Title>{"?????? ?????? ??????"}</Title>
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
                      ??????
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
                      ?????? ??????
                    </span>
                  </HcRadioButton>
                </HcRadioGroup>
              </div>
            </Wrapper>
          </div>
          <div
            className="first_block"
            style={{
              width: "284px",
              float: "left",
              marginRight: "40px",
            }}
          >
            <HcTextFieldLabel
              titleName="?????????"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
            >
              ??????
            </HcTextFieldLabel>
            <HcTextFieldLabel
              titleName="???????????????"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
            >
              ??????
            </HcTextFieldLabel>
            <HcTextFieldLabel
              titleName="???/?????????"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
            >
              ?????? ??????
            </HcTextFieldLabel>
            <Wrapper style={{ marginBottom: 20 }}>
              <Title>{"????????????"}</Title>
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
                      ??????
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
                      ?????? ??????
                    </span>
                  </HcRadioButton>
                </HcRadioGroup>
              </div>
            </Wrapper>
            <Wrapper>
              <Title>{"?????? ??????"}</Title>
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
                      ??????
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
                      ?????? ??????
                    </span>
                  </HcRadioButton>
                </HcRadioGroup>
              </div>
            </Wrapper>
          </div>
          <div
            className="first_block"
            style={{ width: "284px", float: "left" }}
          >
            <HcTextFieldLabel
              titleName="????????????"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
            >
              ??????
            </HcTextFieldLabel>
            <HcTextFieldLabel
              titleName="???????????????(????????????)"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
            >
              ??????
            </HcTextFieldLabel>
            <HcTextFieldLabel
              titleName="????????????"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
            >
              ????????????
            </HcTextFieldLabel>
            <Wrapper style={{ marginBottom: 20 }}>
              <Title>{"?????? ???????????? ??????"}</Title>
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
                      ??????
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
                      ?????? ??????
                    </span>
                  </HcRadioButton>
                </HcRadioGroup>
              </div>
            </Wrapper>
            <Wrapper>
              <Title>{"?????? ?????? ??????"}</Title>
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
                      ??????
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
                      ?????? ??????
                    </span>
                  </HcRadioButton>
                </HcRadioGroup>
              </div>
            </Wrapper>
          </div>
        </div>
        <div style={{ marginTop: 32, minHeight: "182px" }}>
          <div
            style={{
              width: "466px",
              height: "100%",
              display: "inline-block",
              borderRight: "1px solid #CECECE",
              paddingRight: "11px",
            }}
          >
            <ContAreaTitle>?????? ??????</ContAreaTitle>
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
                    <th>??????????????????</th>
                    <th>???????????????</th>
                    <th>??????</th>
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
                    <td>???????????????</td>
                    <td>
                      <HcSelect
                        onChange={(e) => {}}
                        titleName=""
                        name={""}
                        style={{ width: "100%" }}
                      >
                        <option value="1">?????? ??????</option>
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
              width: "466px",
              height: "100%",
              display: "inline-block",
              paddingLeft: "11px",
            }}
          >
            <ContAreaTitle>????????????</ContAreaTitle>
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
                    <th>??????????????????</th>
                    <th>???????????????</th>
                    <th>??????</th>
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
                    <td>???????????????</td>
                    <td>
                      <HcSelect
                        onChange={(e) => {}}
                        titleName=""
                        name={""}
                        style={{ width: "100%" }}
                      >
                        <option value="1">??????</option>
                        <option value="2">BMW</option>
                      </HcSelect>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
          </div>
        </div>
        <div style={{ display: "inline-block", marginTop: 20 }}>
          <TreeTagAreaTitle>??????</TreeTagAreaTitle>
          <HcTagNoInput
            tags={tags}
            setTags={setTags}
            style={{
              background: "#FFFFFF",
              width: "936px",
              minHeight: "168px",
              border: "1px solid #CECECE",
            }}
            delete={false}
          />
        </div>
      </>
    );
  }
  const childRef = React.useRef<any>(null);
  return (
    <>
      <ComponentWrapper>
        <div style={{ display: "block" }}>
          <HcTitleTextField titleName="??????????????????" isBackIcon={false} />
          <div
            className="body_area"
            style={{ display: "flex", marginTop: "39px" }}
          >
            <HcTree
              items={items}
              title="????????????"
              search={true}
              style={{ minHeight: "832px" }}
              isCreate={isCreate}
              setIsCreates={setIsCreates}
              currentData={currentData}
              setcurrentData={setcurrentData}
            />
            <div>
              <TreeContArea>
                {isCreate === true ? (
                  <CreateStatus ref={childRef} />
                ) : (
                  <NormalStatus />
                )}
              </TreeContArea>
            </div>
          </div>
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
              }}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              ??????
            </HcButton>
          ) : (
            <HcButton
              onClick={() => {
                //openModal();
              }}
              styles="primary"
              style={{ marginRight: "5px" }}
              size="big"
            >
              ??????
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
            ??????
          </HcButton>
        </div>
      </HcBottomBar>
    </>
  );
};

export default FiAccountManagement;
