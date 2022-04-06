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
  SubHeading,
} from "common/HcTextField";
import { useLocation } from "react-router-dom";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import styled from "styled-components";
import "common/Table.css";
import HcButton from "common/HcButton";
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
const TableContainer = styled.div`
  width: 1320px;
`;
const TextFieldContainer = styled.div`
  margin-bottom: 161px;
  width: fit-content;
  height: fit-cotent;
`;
const WorkManagementDetail = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state);
  const [edit, setEdit] = useState(false);
  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */
  /*TagInput */
  const [tags, setTags] = React.useState(["react"]);

  /*TagInput */
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
      data.ability.forEach((i: any) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }
  const [checkedItem, setCheckedItem]: any = React.useState([]);
  const columns = [
    // <div style={{ paddingTop: 9, width: 46, paddingLeft: 16 }}>
    //   <HcCheckBox
    //     checked={checkedItem.length > 0 ? true : false}
    //     onChange={(e) => checkAllHandler(e.target.checked)}
    //   />
    // </div>,
    "근무 항목",
    "출근 시간",
    "",
    "퇴근 시간",
    "",
    "-",
  ];

  /*TagInput */
  const [tags2, setTags2] = React.useState(["react"]);
  const [inputVal, setInputVal] = React.useState("");
  /*TagInput */
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const [workDay, setWorkDay] = useState(["월"]);
  const listItem = days.map((day) => (
    <TypeLi
      style={{
        backgroundColor: workDay.includes(day) ? "#DFECFF" : "white",
        color: workDay.includes(day) ? "#257CFF" : "#5D5D62",
      }}
      onClick={() => {
        if (workDay.includes(day)) {
          setWorkDay(workDay.filter((x) => x !== day));
        } else {
          setWorkDay((prev) => [...prev, day]);
        }
        console.log(workDay);
      }}
    >
      {day}
    </TypeLi>
  ));
  return (
    <>
      <ComponentWrapper style={{ display: "block", paddingTop: 40 }}>
        <HcTitleTextField titleName="근무 유형 상세" isBackIcon />
        <DataForm style={{ marginTop: 36 }}>
          {edit == true ? (
            <div
              className="first_block"
              style={{
                width: "387px",
                height: "100px",
                float: "left",
              }}
            >
              <HcTextField
                titleName=""
                name="name"
                onKeyDown={(e: any) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{
                  width: "387px",
                  marginBottom: 20,
                  height: 60,
                  fontSize: "24px",
                }}
                value={data.name}
                onChange={(e) => {
                  setData((prevState: any) => ({
                    ...prevState,
                    name: e.target.value,
                  }));
                }}
              />{" "}
            </div>
          ) : (
            <HcEditableTextField
              titleName={""}
              value={data.name}
              readonly={true}
              onChange={() => setData}
              style={{
                borderBottom: "1px solid #E0E0E0",
                width: 387,
                height: 45,
                fontSize: "24px",
                fontStyle: "bold",
                fontWeight: "bold",
                paddingLeft: 13,
              }}
            />
          )}
          <HcEditableTextField
            titleName={""}
            value={data.id}
            readonly={true}
            wraperStyle={{ marginLeft: 80 }}
            onChange={() => setData}
            style={{
              borderBottom: "1px solid #E0E0E0",
              marginTop: 20,
              width: 387,
              height: 40,
              fontSize: "16px",
              fontStyle: "bold",
              fontWeight: "bold",
              paddingLeft: 13,
            }}
          />

          <div
            className="first_block"
            style={{
              marginLeft: "80px",
              display: "inline-block",
            }}
          >
            <Title style={{ marginBottom: 23 }}>기본 설정 여부</Title>
            <HcRadioGroup
              defaultValue="true"
              onChange={(value) => console.log("value: ", value)}
            >
              <HcRadioButton value="true">
                <span style={{ marginRight: 47, marginLeft: 8 }}>활성화</span>
              </HcRadioButton>
              <HcRadioButton value="false">
                <span style={{ marginLeft: 8 }}>비활성화</span>
              </HcRadioButton>
            </HcRadioGroup>
          </div>
          <div>
            {" "}
            <Title
              style={{ marginBottom: 10, color: "#5D5D62", marginTop: 20 }}
            >
              근무 관리 방식
            </Title>
            <StyledUl style={{ backgroundColor: "#F4F4F4" }}>
              <TypeLi
                onClick={(e: any) => {
                  setData({ ...data, type: "고정" });
                }}
                style={{
                  backgroundColor: data.type == "고정" ? "#5D5D62" : "#F4F4F4",
                  color: data.type == "고정" ? "white" : "#5D5D62",
                }}
              >
                고정
              </TypeLi>
              <TypeLi
                onClick={(e: any) => {
                  setData({ ...data, type: "시차" });
                }}
                style={{
                  backgroundColor: data.type == "시차" ? "#5D5D62" : "#F4F4F4",
                  color: data.type == "시차" ? "white" : "#5D5D62",
                }}
              >
                시차
              </TypeLi>
              <TypeLi
                onClick={(e: any) => {
                  setData({ ...data, type: "선택적" });
                }}
                style={{
                  backgroundColor:
                    data.type == "선택적" ? "#5D5D62" : "#F4F4F4",
                  color: data.type == "선택적" ? "white" : "#5D5D62",
                }}
              >
                선택적
              </TypeLi>
            </StyledUl>
          </div>
        </DataForm>
        <div style={{ width: 1320, height: 404, marginBottom: 20 }}>
          {/*table field */}
          <SubHeading titleName="출퇴근 시간" style={{ marginTop: 41 }} />

          <HcButton
            styles="secondary"
            style={{
              marginTop: "19px",
              marginBottom: "12px",
            }}
            size="medium"
          >
            +생성
          </HcButton>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th
                      style={{
                        minWidth: 212,
                        textAlign: "left",
                        paddingLeft: 12,
                      }}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody style={{ maxHeight: 215 }}>
                <tr style={{ minWidth: 212 }}>
                  {/* <td>
                  <div style={{ paddingLeft: 16, marginTop: 9 }}>
                    <HcCheckBox
                      checked={checkedItem.includes(data.id)}
                      onChange={(e) => {
                        checkHandler(e.target.checked, data.id);
                      }}
                    />
                  </div>
                </td> */}
                  <td style={{ paddingLeft: 12, height: 46 }}>연장</td>
                  <td style={{ paddingLeft: 12, height: 46 }}>당일</td>
                  <td style={{ paddingLeft: 12, height: 46 }}>10:00</td>
                  <td style={{ paddingLeft: 12, height: 46 }}>당일</td>
                  <td style={{ paddingLeft: 12, height: 46 }}>19:00</td>
                  <td style={{ paddingLeft: 12, height: 46 }}>-</td>
                </tr>
              </tbody>
            </table>
          </TableContainer>
        </div>
        {/*table end */}

        <div
          className="first_block"
          style={{
            width: "386px",
            height: "100px",
            float: "left",
            marginRight: "80px",
            marginBottom: 161,
          }}
        >
          {edit === false ? (
            <HcTextFieldLabel
              titleName="일 기본 휴게시간"
              name="breaktime"
              onKeyDown={(e) => {}}
              style={{ width: "387px", marginBottom: 20 }}
            >
              1시간
            </HcTextFieldLabel>
          ) : (
            <HcSelect
              titleName={"일 기본 휴게시간"}
              style={{ width: 386, marginTop: 10, marginBottom: 20 }}
            >
              <option value={""} hidden>
                일 기본 휴게시간 선택
              </option>
              <option>1시간</option>
              <option>2시간</option>
            </HcSelect>
          )}
          <HcTextFieldLabel
            titleName="업무 시간"
            name="type"
            onKeyDown={(e) => {}}
            style={{ width: "387px", marginBottom: 20 }}
          >
            주 {data.perWeek}시간
          </HcTextFieldLabel>

          <HcSearchTextField
            titleName="적용 대상자"
            name="name"
            required
            value={inputVal}
            placeholder="사원 / 부서 검색"
            onChange={(e) => {
              const lengthOfInputValue = inputVal.split("").length;

              if (lengthOfInputValue !== 10) setInputVal(e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                inputVal.trim() !== "" /*&& props.tags.length < 4 */
              ) {
                setTags2([...tags2, e.currentTarget.value]);
                setInputVal("");
              }
            }}
          />
          <br />
          <HcTagNoInput tags={tags2} setTags={setTags2} />
        </div>
        <div
          style={{
            width: "fit-content",
            height: "463px",
            float: "left",
            marginRight: "182px",
            marginBottom: 161,
          }}
        >
          <Title style={{ marginBottom: 10, color: "#5D5D62" }}>업무일</Title>
          <StyledUl style={{ border: "1px solid #CECECE" }}>
            {listItem}
          </StyledUl>
        </div>
        <div
          style={{
            width: "fit-content",
            height: "100px",
            float: "left",

            marginBottom: 161,
          }}
        >
          <Title style={{ marginBottom: 10, color: "#5D5D62" }}>
            유급 휴일
          </Title>

          <StyledUl style={{ border: "1px solid #CECECE" }}>
            {listItem}
          </StyledUl>
        </div>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        <div>
          {edit == false ? (
            <>
              {" "}
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
                  setbarOpen(false);
                  setEdit(false);
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
    </>
  );
};

export default WorkManagementDetail;
