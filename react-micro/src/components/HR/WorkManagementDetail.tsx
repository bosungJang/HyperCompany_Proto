import React, { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField, HcEditableTextField } from "common/HcTextField";
import { useLocation } from "react-router-dom";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import styled from "styled-components";
import "common/Table.css";
import HcButton from "common/HcButton";
import HcCheckBox from "common/HcCheckBox";
const Title = styled.div`
  font-family: Noto Sans CJK KR;
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
`;
const SubTitle = styled.div`
  height: 29px;
  width: fit-content;
  font-family: Noto Sans CJK KR;
  font-style: bold;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: #303030;
  margin-top: 41px;
`;
const DataForm = styled.div`
  width: 1320px;
  height: fit-content;
`;
const TableContainer = styled.div`
  width: 1320px;
  margin-top: 12px;
`;

const WorkManagementDetail = () => {
  const location = useLocation();
  const [data, setData] = useState(location.state);
  const [edit, setEdit] = useState(false);

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
  return (
    <>
      <ComponentWrapper style={{ display: "block", paddingTop: 40 }}>
        <HcTitleTextField titleName="근무 유형 상세" isBackIcon />
        <DataForm style={{ marginTop: 57 }}>
          <HcEditableTextField
            titleName={""}
            value={data.name}
            readonly={edit}
            style={{
              borderBottom: "1px solid #E0E0E0",
              width: 360,
              height: 45,
              fontSize: "24px",
              fontStyle: "bold",
              fontWeight: "bold",
              paddingLeft: 13,
            }}
          />
          <HcEditableTextField
            titleName={""}
            value={data.id}
            readonly={edit}
            wraperStyle={{ marginLeft: 80 }}
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
                  marginRight: 4,
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
                  marginRight: 4,
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
        <SubTitle>출퇴근 시간</SubTitle>
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
            <tbody>
              <tr style={{ minWidth: 212, paddingLeft: 12 }}>
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
                <td>연장</td>
                <td>당일</td>
                <td>10:00</td>
                <td>당일</td>
                <td>19:00</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </ComponentWrapper>
    </>
  );
};

export default WorkManagementDetail;
