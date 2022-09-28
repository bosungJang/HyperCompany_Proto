import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import HcCheckBox from "common/HcCheckBox";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  HcTextFieldLabel,
  SubHeading,
  SelectBox,
  Title,
  HcTextArea,
  TextField,
  TextArea,
  HcTagNoInput,
} from "common/HcTextField";
import HcButton from "common/HcButton";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import HcBottomBar from "common/HcBottomBar";
import {
  DataLength,
  SideBar,
  SideBarInnerContainer,
  SideBarItem,
} from "common/HcPopup";
import {
  HcTable,
  HcTableContainer,
  NullTbody,
  TableActionBtn,
  TableSetting,
} from "common/HcTableComponent";

const InnerTextField = styled(TextField)`
  border: none;
  border-radius: 0px;
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  font-size: 14px;
`;
const InnerTextArea = styled(TextArea)`
  border: none;
  border-radius: 0px;
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  font-size: 14px;
  display: table-cell;
  vertical-align: middle;
`;

const Required = styled.span`
  color: #f06666;
`;
const TableContainer = styled.div<{ edit?: boolean }>`
  width: 1320px;
  height: 926px;
  margin-top: 37px;
  border-top: 1px solid #d9d9d9;
  display: block;
  padding: 0px;
  border-collapes: collapes;

  .row {
    margin: 0px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;

    border-bottom: 1px solid #d9d9d9;
    height: 46px;
  }
  .td {
    height: inherit;
    padding: ${(props) => (props.edit ? "0px" : "12px")};
    display: flex;
    align-items: center;
  }
  .th {
    display: flex;
    align-items: center;
    background: #ededed;
    color: #5d5d62;
    padding: 12px;
    height: inherit;
    font-weight: 500;
    width: 200px;
    padding-left: 12px;
    font-size: 13px;
    line-height: 19px;
    border-bottom: 1px solid #d9d9d9;
    border-collapes: collapes;
  }
`;

const abilityData = [
  {
    id: 0,
    name: "환경분석",
    comment:
      "기존의 제품시장 또는 새롭게 고려되는 제품시장 수요의 특징과 추이 경쟁여건을 분석",
    grade: "A",
    importance: 5,
  },
  {
    id: 1,
    name: "시장분석",
    comment:
      "시장 시장의 범위를 파악하고,그 산업에 대하여 현재 참여자 및 잠재적 참여자가 느끼는 매력도를 측정하기 위한 일련의 분석",
    grade: "A",
    importance: 5,
  },
  {
    id: 2,
    name: "실행 계획 관리",
    comment: "자사의 장기적 존속 및 성장을 확보하기 위하여 수립하는 계획",
    grade: "A",
    importance: 5,
  },
];
const ProfessionalDetail = () => {
  const location = useLocation();
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const [data, setData] = useState(location.state);
  function checkHandler(checked: Boolean, id: Number) {
    if (checked == true) {
      setCheckedItem([...checkedItem, id]);
      console.log(abilityData[abilityData.findIndex((i) => i.id === id)].name);
      setTags([
        ...tags,
        abilityData[abilityData.findIndex((i) => i.id === id)].name,
      ]);
    } else {
      setCheckedItem(checkedItem.filter((i: number) => i != id));
      setTags(
        tags.filter(
          (i: string) =>
            i != abilityData[abilityData.findIndex((i) => i.id === id)].name
        )
      );
    }
  }
  function checkAllHandler(checked: Boolean) {
    if (checked) {
      const ids: Number[] = [];
      const names: string[] = [];
      abilityData.forEach((i: any) => {
        ids.push(i.id);
        names.push(i.name);
      });
      setCheckedItem(ids);
      setTags(names);
    } else {
      setCheckedItem([]);
      setTags([]);
    }
  }

  const [checkedItem, setCheckedItem]: any = useState([]);
  const [tags, setTags]: any[] = useState([]);
  useEffect(() => {
    if (tags.length === 0) setCheckedItem([]);
  }, [tags]);
  return (
    <div style={{ width: "inherit" }}>
      <ComponentWrapper
        style={{
          display: "block",
          height: "fit-content",
          paddingBottom: "110px",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: 20,
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <HcTitleTextField
            titleName={
              data.type === "1"
                ? "직무 생성"
                : data.type === "2"
                ? "직위 생성"
                : "직책 생성"
            }
            isBackIcon
          />
          <div
            style={{
              width: "fit-content",
              display: "flex",
              alignItems: "right",
            }}
          >
            <HcButton
              styles="line"
              size="medium"
              style={{ marginRight: "10px" }}
            >
              일괄등록
            </HcButton>
            <HcButton styles="line" size="medium">
              {data.type === "1" ? "직무 명세 다운로드" : "내보내기"}
            </HcButton>
          </div>
        </div>
        {data.type !== "1" ? ( //직위 직책 상세
          <>
            <div
              style={{
                display: "flex",
                margin: "57px 0px 20px 0px",
              }}
            >
              <HcTextField
                titleName={data.type === "2" ? "직위명" : "직책명"}
                name="name"
                onKeyDown={(e: any) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "387px", marginRight: "60px" }}
                value={data.name}
                onChange={(e) => {
                  setData((prevState: any) => ({
                    ...prevState,
                    name: e.target.value,
                  }));
                }}
              />
              <SelectBox
                titleName={data.type === "2" ? "직위 그룹" : "직책 그룹"}
                style={{ width: "387px", marginRight: "60px" }}
                required
                items={["일반직"]}
              />
              <div
                style={{
                  display: "block",
                  width: "fit-content",
                }}
              >
                <Title>활성화 여부</Title>
                <HcRadioGroup
                  defaultValue="true"
                  onChange={(value) => console.log("value: ", value)}
                >
                  <HcRadioButton value="true">
                    <span style={{ marginRight: 47, marginLeft: 8 }}>
                      활성화
                    </span>
                  </HcRadioButton>
                  <HcRadioButton value="false">
                    <span style={{ marginLeft: 8 }}>비활성화</span>
                  </HcRadioButton>
                </HcRadioGroup>
              </div>
            </div>
            <SelectBox
              titleName={"승진 필요 연차"}
              style={{ width: "387px", marginBottom: "20px" }}
              required
              items={["3년"]}
            />
            <HcTextArea
              titleName="설명"
              name="comment"
              style={{ width: "1320px", height: "88px" }}
              value={data.comment}
              onChange={(e) => {
                setData((prevState: any) => ({
                  ...prevState,
                  comment: e.target.value,
                }));
              }}
            />

            <SubHeading
              titleName="필요역량"
              required
              style={{ marginTop: "40px" }}
            />
            <div style={{ display: "flex", margin: "18px 0px 12px 0px" }}>
              {" "}
              <HcButton
                styles="secondary"
                size="medium"
                style={{ width: "80px" }}
                onClick={() => setSideBarOpen(true)}
              >
                +추가
              </HcButton>{" "}
              <TableSetting
                search
                perPage={5}
                dataLength={abilityData.length}
                now={1}
              />
            </div>
            <HcTableContainer>
              <HcTable>
                <thead>
                  <tr>
                    <th style={{ width: "46px" }}>
                      <HcCheckBox
                        checked={checkedItem.length > 0}
                        onChange={(e) => {
                          checkAllHandler(e.target.checked);
                        }}
                      />
                    </th>
                    <th style={{ width: "346px" }}>역량</th>
                    <th style={{ width: "344px" }}>필요 등급</th>
                    <th style={{ width: "344px" }}>중요도</th>
                    <th style={{ width: "240px" }}>-</th>
                  </tr>
                </thead>
                <tbody>
                  {abilityData.length > 0 ? (
                    abilityData.map(({ name, grade, importance, id }) => (
                      <tr
                        style={{
                          background: checkedItem.includes(id)
                            ? "#DFECFF"
                            : "none",
                        }}
                      >
                        <td>
                          <div>
                            <HcCheckBox
                              checked={checkedItem.includes(id)}
                              onChange={(e) => {
                                checkHandler(e.target.checked, id);
                              }}
                            />
                          </div>
                        </td>
                        <td>{name}</td>
                        <td>{grade}</td>
                        <td>{importance}</td>
                        <td>
                          <TableActionBtn />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <NullTbody colspan={6} />
                  )}
                </tbody>
              </HcTable>
            </HcTableContainer>
          </>
        ) : (
          <TableContainer edit>
            <div className="row">
              <div className="th">
                직군
                <Required>*</Required>
              </div>
              <div className="td" style={{ width: "483px" }}>
                <SelectBox
                  placeholder="직군 선택"
                  innerTable={{
                    width: "483px",
                    minHeight: "45px",
                    boxShadow: "none",
                    borderRadius: "0px",
                  }}
                  items={["1", "2"]}
                />
              </div>
              <div className="th">
                직종<Required>*</Required>
              </div>
              <div className="td">
                <SelectBox
                  placeholder="직종 선택"
                  innerTable={{
                    width: "437px",
                    minHeight: "45px",
                    boxShadow: "none",
                    borderRadius: "0px",
                  }}
                  items={["1", "2"]}
                />
              </div>
            </div>
            <div className="row">
              <div className="th">
                직무명<Required>*</Required>
              </div>
              <div style={{ width: "483px" }} className="td">
                <InnerTextField placeholder="직무명 입력" />
              </div>
              <div className="th">단위업무</div>
              <div className="td">
                <InnerTextField
                  placeholder="직무명 입력"
                  style={{ width: "435px" }}
                />
              </div>
            </div>
            <div className="row" style={{ height: "92px" }}>
              {" "}
              <div className="th">직무 목적</div>
              <div className="td" style={{ width: "1120px" }}>
                <InnerTextArea placeholder="직무 목적 입력" />
              </div>
            </div>
            <div className="row" style={{ height: "360px" }}>
              <div className="th">직무 역량</div>
              <div style={{ width: "1120px" }} className="td">
                <InnerTextArea placeholder="직무 역할 입력" />
              </div>
            </div>
            <div className="row" style={{ height: "382px" }}>
              <div className="th">직무 역량</div>
              <div
                className="td"
                style={{
                  width: "1120px",
                  display: "block",
                  alignItems: "start",
                  padding: "24px",
                }}
              >
                <HcButton
                  styles="secondary"
                  size="medium"
                  onClick={() => setSideBarOpen(true)}
                >
                  +추가
                </HcButton>
                <HcTableContainer
                  style={{
                    height: "290px",
                    width: "1072px",
                    alignItems: "left",
                    padding: 0,
                    marginTop: "12px",
                  }}
                >
                  {abilityData.length < 0 ? (
                    <HcTable>
                      <thead>
                        <tr style={{ height: "32px" }}>
                          <th style={{ paddingTop: "4px" }}>
                            <HcCheckBox
                              checked={checkedItem.length > 0 ? true : false}
                              onChange={(e) =>
                                checkAllHandler(e.target.checked)
                              }
                            />
                          </th>
                          <th style={{ width: "140px" }}>역량명</th>
                          <th style={{ width: "526px" }}>역량 설명</th>
                          <th style={{ width: "120px" }}>필요 등급</th>
                          <th style={{ width: "120px" }}>중요도</th>
                          <th style={{ width: "120px" }}>-</th>
                        </tr>
                      </thead>
                      <tbody>
                        {abilityData.map(
                          ({ name, comment, grade, importance, id }) => (
                            <tr
                              style={{
                                height: "84px",
                                background: checkedItem.includes(id)
                                  ? "#DFECFF"
                                  : "none",
                              }}
                            >
                              <td>
                                <div>
                                  <HcCheckBox
                                    checked={checkedItem.includes(id)}
                                    onChange={(e) => {
                                      checkHandler(e.target.checked, id);
                                    }}
                                  />
                                </div>
                              </td>
                              <td>{name}</td>
                              <td
                                style={{
                                  width: "526px",
                                  whiteSpace: "pre-line",
                                }}
                              >
                                {comment}
                              </td>
                              <td>
                                <div
                                  style={{
                                    height: "100%",
                                    justifyContent: "space-between",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  {grade}
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 16L6.80385 10L17.1962 10L12 16Z"
                                      fill="#5D5D62"
                                    />
                                  </svg>
                                </div>
                              </td>
                              <td>
                                {" "}
                                <div
                                  style={{
                                    height: "100%",
                                    justifyContent: "space-between",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  {importance}
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 16L6.80385 10L17.1962 10L12 16Z"
                                      fill="#5D5D62"
                                    />
                                  </svg>
                                </div>
                              </td>
                              <td>
                                <TableActionBtn />
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </HcTable>
                  ) : (
                    <NullTbody
                      colspan={6}
                      style={{ width: "1072px", marginTop: "150px" }}
                    />
                  )}
                </HcTableContainer>
              </div>
            </div>
          </TableContainer>
        )}
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400, zIndex: 3 }}>
        <div>
          <HcButton
            onClick={() => {
              setData({ ...data, edit: false });
            }}
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
        </div>
      </HcBottomBar>
      <SideBar
        header={"역량 추가"}
        open={sideBarOpen}
        close={() => {
          setSideBarOpen(false);
        }}
        addFunc={() => {
          setSideBarOpen(false);
        }}
        style={{ display: "block", width: "100%" }}
      >
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <SelectBox
            style={{ width: "474px" }}
            placeholder="역량 그룹 선택"
            items={[]}
          />
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: "6px 0px 0px 10px" }}
          >
            <rect width="30" height="30" rx="3" fill="white" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.3658 8.12118C19.6543 10.8365 19.3083 14.8929 16.593 17.1814C13.8776 19.4699 9.82123 19.1239 7.53273 16.4086C5.24422 13.6933 5.59022 9.63687 8.30554 7.34836C11.0209 5.05986 15.0773 5.40586 17.3658 8.12118ZM18.4151 17.8623C21.2209 14.8792 21.4072 10.2008 18.7039 6.99339C15.7925 3.53904 10.6321 3.09887 7.17775 6.01024C3.7234 8.92161 3.28323 14.082 6.1946 17.5364C8.80667 20.6356 13.2292 21.3086 16.6056 19.3115L21.2028 24.7661C21.6152 25.2554 22.3463 25.3178 22.8356 24.9053C23.325 24.4929 23.3874 23.7618 22.9749 23.2725L18.4151 17.8623Z"
              fill="#5D5D62"
            />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "494px",
          }}
        >
          <DataLength unit="개" length="300" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "21px",
              width: "80px",
            }}
          >
            <Title>전체 선택</Title>
            <div style={{ paddingTop: "4px" }}>
              {" "}
              <HcCheckBox
                checked={checkedItem.length === abilityData.length}
                onChange={(e) => {
                  checkAllHandler(e.target.checked);
                }}
              />
            </div>
          </div>
        </div>
        {tags.length > 0 ? (
          <HcTagNoInput
            tags={tags}
            setTags={setTags}
            style={{ height: "76px", width: "514px" }}
            delete
            deleteAll
          />
        ) : (
          ""
        )}
        <SideBarInnerContainer
          style={{
            height: tags.length > 0 ? "728px" : "814px",
            marginTop: "17px",
          }}
        >
          {abilityData.map(({ name, id }) => (
            <SideBarItem style={{ justifyContent: "space-between" }}>
              {name}

              <div style={{ paddingTop: "4px" }}>
                <HcCheckBox
                  checked={checkedItem.includes(id)}
                  onChange={(e) => {
                    checkHandler(e.target.checked, id);
                  }}
                />
              </div>
            </SideBarItem>
          ))}
        </SideBarInnerContainer>
      </SideBar>
    </div>
  );
};

export default ProfessionalDetail;
