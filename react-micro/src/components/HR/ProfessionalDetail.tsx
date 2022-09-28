import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
const innerStyle = {
  border: "none",
  borderRadius: "0px",
  height: "calc(100% - 2px)",
  width: "calc(100% - 2px)",
  fontSize: "14px",
  alignItems: "center",
};
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
                ? "직무 상세"
                : data.type === "2"
                ? "직위 상세"
                : "직책 상세"
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
            {data.edit == false ? (
              <>
                <div
                  style={{
                    display: "flex",
                    margin: "57px 0px 20px 0px",
                  }}
                >
                  <HcTextFieldLabel
                    titleName={data.type === "2" ? "직위명" : "직책명"}
                    name="name"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        alert("SUCCESS");
                      }
                    }}
                    style={{ width: "387px", marginRight: "80px" }}
                  >
                    {data.name}
                  </HcTextFieldLabel>
                  <HcTextFieldLabel
                    titleName={data.type === "2" ? "직위 그룹" : "직책 그룹"}
                    name="group"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        alert("SUCCESS");
                      }
                    }}
                    style={{ width: "387px", marginRight: "87px" }}
                  >
                    {data.group}
                  </HcTextFieldLabel>
                  <div
                    style={{
                      display: "block",
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

                <HcTextFieldLabel
                  titleName="승진 필요 연차"
                  name="name"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      alert("SUCCESS");
                    }
                  }}
                  style={{
                    width: "387px",
                    marginBottom: "20px",
                    display: data.type === "2" ? "" : "none",
                  }}
                >
                  3년
                </HcTextFieldLabel>
                <HcTextFieldLabel
                  titleName="설명"
                  name="name"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      alert("SUCCESS");
                    }
                  }}
                  style={{
                    width: "936px",

                    wordBreak: "break-word",
                  }}
                >
                  {data.comment}
                </HcTextFieldLabel>
              </>
            ) : (
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
              </>
            )}
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
          <TableContainer edit={data.edit}>
            <div className="row">
              <div className="th">
                직군
                <Required>*</Required>
              </div>
              <div className="td" style={{ width: "483px" }}>
                {data.edit ? (
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
                ) : (
                  "마케팅"
                )}
              </div>
              <div className="th">
                직종<Required>*</Required>
              </div>
              <div className="td">
                {data.edit ? (
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
                ) : (
                  "마케팅"
                )}
              </div>
            </div>
            <div className="row">
              <div className="th">
                직무명<Required>*</Required>
              </div>
              <div style={{ width: "483px" }} className="td">
                {data.edit ? (
                  <InnerTextField placeholder="직무명 입력" />
                ) : (
                  data.group
                )}
              </div>
              <div className="th">단위업무</div>
              <div className="td">
                {" "}
                {data.edit ? (
                  <InnerTextField
                    placeholder="직무명 입력"
                    style={{ width: "435px" }}
                  />
                ) : (
                  "마케팅"
                )}
              </div>
            </div>
            <div className="row" style={{ height: "92px" }}>
              {" "}
              <div className="th">직무 목적</div>
              <div className="td" style={{ width: "1120px" }}>
                {data.edit ? (
                  <InnerTextArea placeholder="직무 목적 입력" />
                ) : (
                  "마케팅은 ㉠고객이 누구이고 그들이 원하는 것이 무엇인지 발견하는것 ㉡고객의 욕구를 만족하게 할 제품을 개발하는것 ㉢그 제품을 고객이 소유하게 만드는 것 등에 목표를 둔다."
                )}
              </div>
            </div>
            <div className="row" style={{ height: "360px" }}>
              <div className="th">직무 역량</div>
              <div style={{ width: "1120px" }} className="td">
                {data.edit ? (
                  <InnerTextArea placeholder="직무 역할 입력" />
                ) : (
                  <>
                    {" "}
                    마케팅 비용 및 예산 집행 기업이 한 해 동안 사용하게 될 적정
                    마케팅 비용을 산출한 후, 이를 각 활동에 적정 배분해
                    효율적으로 사용한다. 또한 지출한 마케팅 비용 대비 효과를
                    측정하는(ROI) 등의 업무를 진행한다. 시장조사 및 경쟁사 동향
                    파악 각 제품 및 서비스에 대한 매출, 판매량, 이익률, 고객의
                    평가 등을 분석한다. 이를 통해 자사 제품의 강점과 약점,
                    기회와 위기(SWOT)를 분석해 소비자 타깃을 설정하고, 그에 맞는
                    제품 홍보 전략 등을 수립한다. 또한 적정한 가격을 책정하거나
                    현 시장에 없는 새로운 제품 등을 기획하기도 한다. 광고 집행
                    및 제품 홍보, 판촉활동 기업 브랜드, 제품, 서비스 등을
                    고객에게 널리 알리기 위해 TV, 라디오, 신문 등 다양한 매체를
                    이용해 홍보활동을 펼친다. 이때 광고 제작사에 의뢰해 자사
                    이미지에 부합하는 광고를 제작하는 일을 진행하며, 이 외에도
                    다양한 행사나 박람회 등 오프라인 행사를 진행해 판촉활동을
                    실시한다.
                  </>
                )}
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
                  <HcTable>
                    <thead>
                      <tr style={{ height: "32px" }}>
                        <th style={{ paddingTop: "4px" }}>
                          <HcCheckBox
                            checked={checkedItem.length > 0 ? true : false}
                            onChange={(e) => checkAllHandler(e.target.checked)}
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
                      {abilityData.length > 0 ? (
                        abilityData.map(
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
                        )
                      ) : (
                        <NullTbody colspan={6} />
                      )}
                    </tbody>
                  </HcTable>
                </HcTableContainer>
              </div>
            </div>
          </TableContainer>
        )}
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400, zIndex: 3 }}>
        <div>
          {data.edit == false ? (
            <>
              {" "}
              <HcButton
                onClick={() => {
                  setData({ ...data, edit: true });
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
                  setData({ ...data, edit: false });
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
