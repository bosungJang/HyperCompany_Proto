import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
  NullTbody,
  TableSetting,
} from "common/HcTableComponent";
import { useState } from "react";
import styled from "styled-components";
import HcCheckBox from "common/HcCheckBox";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTree from "common/HcTree";
import HcTextField, {
  HcTextArea,
  HcTextFieldLabel,
  HcTitleTextField,
  SelectBox,
  SubHeading,
  Title,
} from "common/HcTextField";
import HcButton from "common/HcButton";
import { HcContentPopup } from "common/HcPopup";
import { useHistory } from "react-router-dom";
import { HcDatePicker } from "common/HcDatePicker";
import HcBottomBar from "common/HcBottomBar";

const Icon = styled.div<{ stroke: string }>`
  padding: 3px 5px;
  width: 28px;
  height: 26px;
  border-radius: 2px;
  path {
    stroke: ${(props) => (props.stroke ? props.stroke : "#838181")};
  }
`;
const StyledIcon = styled.div`
  transition: 0.4s;
  position: absolute;
  bottom: 0px;
  right: -34px;
  overflow: visible;
  height: fit-content;
  width: fit-content;
  z-index: 3;
  .tooltip {
    position: absolute;
    width: 65px;
    border-radius: 4px;
    height: 326px;
    font-size: 13px;
    border: 1px solid #257cff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    top: 28px;
    background: #fffff;
    li {
      width: calc(100%-2px);
      height: 36px;
      background: #ffffff;
      margin: 0px;
      padding: 5px 8px;
      font-weight: 700;
      font-size: 13px;
      line-height: 19px;
      border-radius: 2px;
    }
  }
`;
const Container = styled.div`
  background: #ffffff;
  height: 980px;
  width: 984px;
  border: 1px solid #cecece;
  border-radius: 5px;
  display: block;
  padding: 0px 24px 28px 24px;
`;
const OrganizationManagement = () => {
  const history = useHistory();
  const [viewChart, setViewChart] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [edit, setEdit] = useState(false);
  const [category, setCategory] = useState(""); //조직 유형
  const [workUnit, setWorkUnit] = useState(""); //단위업무
  const [duty, setDuty] = useState(""); //직무
  const [higherLevel, setHigherLevel] = useState(""); //상위조직
  const [level, setLevel] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  function close() {
    setModalOpen(false);
  }
  const colorName = [
    { name: "빨간색", style: { color: "#F06666", background: "#FFE9E9" } },
    { name: "노란색", style: { color: "#FFBB0B", background: "#FFF1CE" } },
    { name: "주황색", style: { color: "#FDA95C", background: "#FFF3E8" } },
    { name: "청록색", style: { color: "#5AC4CB", background: "#E7F7F7" } },
    { name: "초록색", style: { color: "#4DAD79", background: "#E6F3EC" } },
    { name: "파란색", style: { color: "#5799FB", background: "#DFECFF" } },
    { name: "남색", style: { color: "#4D4D94", background: "#E6E6F0" } },
    { name: "보라색", style: { color: "#CA68D9", background: "#F7E9FA" } },
    { name: "기본색", style: { color: "#838181", background: "#D9D9D9" } },
  ];
  let num = 100000;
  const getId = () => {
    num = num + 1;
    return num;
  };
  /*Tree*/
  const [items, setItems] = useState([
    {
      id: "0", //table
      title: "티맥스 소프트",
      color: colorName[8].style,
      headCount: 55,
    },
    {
      id: "1",
      title: "사업부",
      color: colorName[8].style,
      headCount: 25,
    },
    {
      id: "2",
      title: "PM본부",
      color: colorName[8].style,
      headCount: 30,
    },
  ]);
  /*Tree*/
  /* Current Data*/
  const [currentData, setcurrentData] = useState({
    id: "0",
    title: "티맥스 소프트",
  });
  /* Current Data*/
  const [groupCreate, setGroupCreate] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [checkedItem, setCheckedItem]: any = useState([]);
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

  const data = Array(17)
    .fill(undefined)
    .map(() => ({
      id: getId(),
      content: "Tmax Enterprise 인사 이동",
      hc: Math.floor(Math.random() * 4) + 1,
      start: "2022.1.10",
      end: "2022.1.29",
      action: <TableActionBtn />,
    }));

  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */

  /*Create */
  const [isCreate, setIsCreates] = useState(false);
  /*Create */

  return (
    <>
      <ComponentWrapper
        style={{
          display: "block",
          position: "relative",
          height: "fit-content",
        }}
      >
        <HcButton
          size="medium"
          styles="line"
          style={{ position: "absolute", top: 44, right: 161 }}
          onClick={() => {
            history.push({
              pathname: "/hr/orm/OrganizationHistory",
            });
          }}
        >
          조직 개편 이력
        </HcButton>

        <HcButton
          size="medium"
          styles="line"
          style={{ position: "absolute", top: 44, right: 40 }}
        >
          <div style={{ marginRight: 20, position: "relative" }}>
            내보내기
            <svg
              style={{ position: "absolute", top: -9, left: 65 }}
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 12.5L5.10289 8L12.8971 8L9 12.5Z" fill="#5D5D62" />
            </svg>
          </div>
        </HcButton>
        <HcTitleTextField titleName="조직 정보 관리" isBackIcon={false} />
        <div style={{ display: "flex", marginTop: 39 }}>
          <div style={{ marginRight: 24 }}>
            {" "}
            <HcTree
              items={items}
              title="조직도"
              search={true}
              style={{ minHeight: "832px" }}
              isCreate={isCreate}
              setIsCreates={setIsCreates}
              currentData={currentData}
              setcurrentData={setcurrentData}
              placeholder="조직, 조직코드, 조직직무 검색"
            />
          </div>
          <div style={{ display: "block" }}>
            <div
              style={{
                display: "flex",
                position: "relative",
                marginLeft: 719,
                marginBottom: 15,
                height: 28,
              }}
            >
              <Title style={{ paddingTop: 6 }}>조직 개편일</Title>
              <Title
                style={{
                  fontWeight: 500,
                  color: "#5D5D62",
                  padding: "5px 6px 0px 12px",
                  fontSize: "15px",
                }}
              >
                {/* {String(startDate)} */}
                2021.01.01
              </Title>
              <svg
                style={{ position: "absolute", bottom: 0, left: 160 }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 4.75C8 4.33579 8.33579 4 8.75 4C9.16421 4 9.5 4.33579 9.5 4.75V6H15V4.75C15 4.33579 15.3358 4 15.75 4C16.1642 4 16.5 4.33579 16.5 4.75V6H18C19.1046 6 20 6.89543 20 8V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V8C4 6.89543 4.89543 6 6 6H8V4.75ZM6 7.5H18C18.2761 7.5 18.5 7.72386 18.5 8V9.5H5.5V8C5.5 7.72386 5.72386 7.5 6 7.5ZM5.5 11V18C5.5 18.2761 5.72386 18.5 6 18.5H18C18.2761 18.5 18.5 18.2761 18.5 18V11H5.5Z"
                  fill="#5D5D62"
                />
              </svg>
              <div
                onClick={() => setViewChart(!viewChart)}
                style={{
                  borderRadius: 3,
                  width: 58,
                  height: 28,
                  background: " #257CFF",
                  marginLeft: 40,
                  padding: "2px 4px",
                  display: "flex",
                }}
              >
                {viewChart ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: 4 }}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.5 3H8.5V9H11.25V11H4.5V12V12.5V15H6V12.5H17.5V15H19V12.5V12V11H12.75V9H15.5V3ZM9 15H2V21H9V15ZM15 15H22V21H15V15Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    style={{ marginRight: 4 }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.5 4.5C6.77614 4.5 7 4.72386 7 5V7C7 7.27614 6.77614 7.5 6.5 7.5H3.5C3.22386 7.5 3 7.27614 3 7V5C3 4.72386 3.22386 4.5 3.5 4.5H6.5ZM9.5 4.5C9.22386 4.5 9 4.72386 9 5V7C9 7.27614 9.22386 7.5 9.5 7.5H20.5C20.7761 7.5 21 7.27614 21 7V5C21 4.72386 20.7761 4.5 20.5 4.5H9.5ZM9 11C9 10.7239 9.22386 10.5 9.5 10.5H20.5C20.7761 10.5 21 10.7239 21 11V13C21 13.2761 20.7761 13.5 20.5 13.5H9.5C9.22386 13.5 9 13.2761 9 13V11ZM6.5 10.5C6.77614 10.5 7 10.7239 7 11V13C7 13.2761 6.77614 13.5 6.5 13.5H3.5C3.22386 13.5 3 13.2761 3 13V11C3 10.7239 3.22386 10.5 3.5 10.5H6.5ZM9 17C9 16.7239 9.22386 16.5 9.5 16.5H20.5C20.7761 16.5 21 16.7239 21 17V19C21 19.2761 20.7761 19.5 20.5 19.5H9.5C9.22386 19.5 9 19.2761 9 19V17ZM6.5 16.5C6.77614 16.5 7 16.7239 7 17V19C7 19.2761 6.77614 19.5 6.5 19.5H3.5C3.22386 19.5 3 19.2761 3 19V17C3 16.7239 3.22386 16.5 3.5 16.5H6.5Z"
                      fill="white"
                    />
                  </svg>
                )}

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 16L6.80385 10L17.1962 10L12 16Z" fill="white" />
                </svg>
              </div>
            </div>
            <Container>
              {edit ? (
                <>
                  <HcTextField
                    style={{
                      width: 284,
                      height: 56,
                      fontSize: "24px",
                      fontWeight: 500,
                      margin: "28px 0px 20px 0px",
                      color: "#000000",
                    }}
                    required
                    placeholder={"새 조직"}
                  />
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "20px",
                      position: "relative",
                      width: "fit-content",
                    }}
                  >
                    <HcTextField
                      value={currentData.id}
                      titleName="조직 코드"
                      required
                      style={{ width: 284, marginRight: 42 }}
                    />

                    <SelectBox
                      value={"조직 유형"}
                      titleName={"조직 유형"}
                      items={["없음"]}
                      state={category}
                      setState={setCategory}
                      style={{ width: 284, marginRight: 42 }}
                    />
                    <HcTextFieldLabel
                      titleName={"조직 장"}
                      style={{ width: 284 }}
                    >
                      홍길동
                    </HcTextFieldLabel>
                    <HcButton
                      size="small"
                      styles="line"
                      style={{ position: "absolute", right: 8, top: 36 }}
                    >
                      조직장 임명
                    </HcButton>
                  </div>
                  <div style={{ display: "flex", marginBottom: "20px" }}>
                    <SelectBox
                      value={"조직 직무"}
                      titleName={"조직 직무"}
                      items={["없음"]}
                      state={duty}
                      setState={setDuty}
                      style={{ width: 284, marginRight: 42 }}
                    />
                    <SelectBox
                      value={"조직 단위 업무"}
                      titleName={"조직 단위 업무"}
                      items={["없음"]}
                      state={workUnit}
                      setState={setWorkUnit}
                      style={{ width: 284, marginRight: 42 }}
                    />
                    <HcTextField
                      titleName={"조직 T.O인원"}
                      value={"10000명"}
                      style={{ width: 284 }}
                    />
                  </div>
                  <div style={{ display: "flex", marginBottom: "20px" }}>
                    <SelectBox
                      value={"없음"}
                      titleName={"상위 조직"}
                      items={["없음"]}
                      state={workUnit}
                      setState={setWorkUnit}
                      style={{ width: 284, marginRight: 42 }}
                    />
                    <SelectBox
                      value={"조직 레벨"}
                      titleName={"조직 레벨"}
                      items={["Level 0"]}
                      state={level}
                      setState={setLevel}
                      style={{ width: 284, marginRight: 42 }}
                    />
                    <HcTextFieldLabel
                      titleName="생성 일시"
                      style={{ width: 284 }}
                    >
                      2021.01.01
                    </HcTextFieldLabel>
                  </div>
                  <HcTextArea
                    titleName="설명"
                    style={{ width: 936, height: 88 }}
                  />
                </>
              ) : (
                <>
                  <HcTextFieldLabel
                    style={{
                      width: "284px",
                      fontSize: "24px",
                      height: 47,
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: "100%",
                        width: "fit-content",
                      }}
                    >
                      {currentData.title}
                      <StyledIcon>
                        <Icon
                          onClick={() => setColorOpen(true)}
                          style={
                            items[
                              items.findIndex((x) => x.id === currentData.id)
                            ].color
                          }
                          stroke={
                            items[
                              items.findIndex((x) => x.id === currentData.id)
                            ].color.color
                          }
                        >
                          <svg
                            style={{ position: "absolute", bottom: 4 }}
                            width="18"
                            height="14"
                            viewBox="0 0 18 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.1299 3.4104C15.1299 4.68794 14.0809 5.7373 12.7698 5.7373C11.4587 5.7373 10.4097 4.68794 10.4097 3.4104C10.4097 2.13286 11.4587 1.0835 12.7698 1.0835C14.0809 1.0835 15.1299 2.13286 15.1299 3.4104Z"
                              stroke="#5799FB"
                              stroke-width="1.5"
                            />
                            <path
                              d="M8.62305 12.8338V9.51318C8.62305 8.40861 9.51848 7.51318 10.623 7.51318H14.9167C16.0213 7.51318 16.9167 8.40861 16.9167 9.51318V12.8338"
                              stroke="#838181"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                            <path
                              d="M7.59036 3.4104C7.59036 4.68794 6.54131 5.7373 5.23024 5.7373C3.91917 5.7373 2.87012 4.68794 2.87012 3.4104C2.87012 2.13286 3.91917 1.0835 5.23024 1.0835C6.54131 1.0835 7.59036 2.13286 7.59036 3.4104Z"
                              stroke="#838181"
                              stroke-width="1.5"
                            />
                            <path
                              d="M1.08325 12.8338V9.51318C1.08325 8.40861 1.97868 7.51318 3.08325 7.51318H6.73801"
                              stroke="#838181"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                        </Icon>
                        <div
                          onClick={() => setColorOpen(false)}
                          style={{
                            background: "#fffff",
                            display: colorOpen ? "" : "none",
                          }}
                          className="tooltip"
                        >
                          {colorName.map((i) => (
                            <li
                              onClick={() => {
                                const index = items.findIndex(
                                  (i) => i.id === currentData.id
                                );
                                let prev = [...items];
                                prev[index].color = i.style;
                                setItems(prev);
                                console.log(index);
                                console.log("prev[index]" + prev[index]);
                                console.log(i.style);
                              }}
                            >
                              <div
                                style={Object.assign(
                                  {
                                    width: 48,
                                    height: 25,
                                    borderRadius: 2,
                                    padding: "3px 6px",
                                  },
                                  i.style
                                )}
                              >
                                {i.name}
                              </div>
                            </li>
                          ))}
                        </div>
                      </StyledIcon>
                    </div>
                  </HcTextFieldLabel>
                  <div style={{ display: "flex", marginBottom: "20px" }}>
                    <HcTextFieldLabel
                      titleName="조직 코드"
                      style={{ width: 284, marginRight: 42 }}
                    >
                      {currentData.id}
                    </HcTextFieldLabel>
                    <HcTextFieldLabel
                      titleName="조직 유형"
                      style={{ width: 284, marginRight: 42 }}
                    >
                      기능구조
                    </HcTextFieldLabel>
                    <HcTextFieldLabel
                      titleName="조직 장"
                      style={{ width: 284 }}
                    >
                      홍길동
                    </HcTextFieldLabel>
                  </div>
                  <div style={{ display: "flex", marginBottom: "20px" }}>
                    <HcTextFieldLabel
                      titleName="조직 직무"
                      style={{ width: 284, marginRight: 42 }}
                    >
                      없음
                    </HcTextFieldLabel>
                    <HcTextFieldLabel
                      titleName="조직 단위업무"
                      style={{ width: 284, marginRight: 42 }}
                    >
                      없음
                    </HcTextFieldLabel>
                    <HcTextFieldLabel
                      titleName="조직 T.O인원"
                      style={{ width: 284 }}
                    >
                      1000명
                    </HcTextFieldLabel>
                  </div>
                  <div style={{ display: "flex", marginBottom: "20px" }}>
                    <HcTextFieldLabel
                      titleName="상위 조직"
                      style={{ width: 284, marginRight: 42 }}
                    >
                      없음
                    </HcTextFieldLabel>
                    <HcTextFieldLabel
                      titleName="조직 레벨"
                      style={{ width: 284, marginRight: 42 }}
                    >
                      Level 0
                    </HcTextFieldLabel>
                    <HcTextFieldLabel
                      titleName="생성 일시"
                      style={{ width: 284 }}
                    >
                      2021.01.01
                    </HcTextFieldLabel>
                  </div>
                  <HcTextFieldLabel titleName="설명" style={{ width: 936 }}>
                    최상위 조직입니다.
                  </HcTextFieldLabel>
                </>
              )}
              <SubHeading
                titleName={`구성원(${data.length})`}
                style={{ marginTop: 40 }}
              />

              <TableSetting style={{ margin: "22px 0px 12px 794px" }} />
              <HcTableContainer
                style={{
                  width: 936,
                  height: 379,
                  borderBottom: "1px solid #D9D9D9",
                }}
              >
                <HcTable>
                  <thead>
                    <tr>
                      <th>
                        <div style={{ paddingTop: 4 }}>
                          <HcCheckBox
                            checked={checkedItem.length > 0 ? true : false}
                            onChange={(e) => checkAllHandler(e.target.checked)}
                          />
                        </div>
                      </th>
                      <th style={{ width: 192 }}>이름</th>
                      <th style={{ width: 192 }}>조직</th>
                      <th style={{ width: 192 }}>직책</th>
                      <th style={{ width: 194 }}>직위</th>
                      <th style={{ width: 120 }}>-</th>
                    </tr>
                  </thead>

                  {data.length > 0 ? (
                    <tbody>
                      {data.map(({ id, content, hc, start, end, action }) => (
                        <tr
                          style={{
                            textAlign: "center",
                            backgroundColor: checkedItem.includes(id)
                              ? "#DFECFF"
                              : "",
                          }}
                        >
                          <td>
                            <div style={{ paddingTop: 4 }}>
                              {" "}
                              <HcCheckBox
                                checked={checkedItem.includes(id)}
                                onChange={(e) => {
                                  checkHandler(e.target.checked, id);
                                }}
                              />
                            </div>
                          </td>
                          <td>홍길동</td>
                          <td>사업 1팀</td>
                          <td>연구원</td>
                          <td>연구원</td>
                          <td>
                            <TableActionBtn />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <tbody>
                      <NullTbody colspan={6} />
                    </tbody>
                  )}
                </HcTable>
              </HcTableContainer>
            </Container>
          </div>
        </div>
      </ComponentWrapper>{" "}
      <HcBottomBar open={barOpen} style={{ width: 1400, zIndex: 3 }}>
        {edit ? (
          <>
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
                setModalOpen(true);
              }}
              styles="line"
              style={{ marginRight: "5px" }}
              size="big"
            >
              조직 개편
            </HcButton>
            <HcButton
              onClick={() => {
                setEdit(false);
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
          </>
        )}
      </HcBottomBar>
      <HcContentPopup
        header={"조직 개편"}
        primaryBtn="조직 개편"
        secondBtn="취소"
        open={modalOpen}
        close={close}
        height={340}
        width={600}
        style={{
          left: 30,
          display: "block",
          fontWeight: 500,
          fontSize: "16px",
        }}
        primaryFunc={() => {
          setModalOpen(false);
          setEdit(false);
        }}
      >
        수정된 내용으로 조직도를 개편하시겠습니까?
        <br />
        시행 일시를 입력후 아래의 버튼을 선택해 주세요.
        <div style={{ marginTop: 26 }}>
          <HcDatePicker
            style={{ width: 300 }}
            required
            titleName="시행일시"
            startDate={startDate}
            setStartDate={setStartDate}
          />
        </div>
      </HcContentPopup>
    </>
  );
};
export default OrganizationManagement;
