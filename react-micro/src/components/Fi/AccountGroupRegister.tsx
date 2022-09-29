import React from "react";
import styled from "styled-components";
import { Link, RouteComponentProps, Route, useHistory } from "react-router-dom";
import { ComponentWrapper, VariableMultiLayout } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  Wrapper,
  Title,
  HcSelect,
  StyledSelect,
  TextField,
} from "common/HcTextField";
import HcButton from "common/HcButton";
import "common/Table.css";
import HcCheckBox from "common/HcCheckBox";
import HcBottomBar from "common/HcBottomBar";
import { FilterButton, SettingButton } from "common/HcTableButton";

interface MatchParams {
  id: string;
}

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

const AccountGroupRegister = ({ match }: RouteComponentProps<MatchParams>) => {
  const history = useHistory();

  let num = 100000;
  const getId = () => {
    num = num + 1;
    return num;
  };

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
      groupData.forEach((i) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }

  const data = Array(105)
    .fill(undefined)
    .map(() => ({
      id: getId(),
      accountCode: "10100",
      accountGroupName: "현금",
      groupLevel: "1레벨",
      groupClassification: "그룹",
      devitCredit: "차변",
      useYn: "사용",
    }));

  const [groupData, setGroupData] = React.useState(data);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editingData, setEditingData] = React.useState(Array.from(groupData));

  const clickCreate = () => {
    const prev = Array.from(editingData);

    prev.unshift({
      id: getId(),
      accountCode: "",
      accountGroupName: "",
      groupLevel: "",
      groupClassification: "",
      devitCredit: "",
      useYn: "",
    });
    setEditingData(prev);
  };

  const columns = [
    <div style={{ paddingTop: 7 }}>
      <HcCheckBox
        checked={checkedItem.length > 0 ? true : false}
        onChange={(e) => checkAllHandler(e.target.checked)}
      />
    </div>,
    "계정그룹코드",
    "계정그룹명",
    "그룹레벨",
    "그룹구분",
    "차/대구분",
    "사용여부",
  ];

  return (
    <div style={{ width: "100%" }}>
      <ComponentWrapper style={{ width: "100%", display: "block" }}>
        <div style={{ display: "block", width: "100%", marginTop: "16px" }}>
          <HcTitleTextField
            titleName="계정그룹 등록"
            isBackIcon={false}
            style={{ display: "inline-block" }}
          />
          <div style={{ marginTop: "37px" }}>
            <div style={{ marginBottom: "20px" }}>
              <HcButton
                onClick={() => {
                  clickCreate();
                  setIsEditing(true);
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
                  {isEditing == false
                    ? groupData.map(
                        ({
                          id,
                          accountCode,
                          accountGroupName,
                          groupLevel,
                          groupClassification,
                          devitCredit,
                          useYn,
                        }) => (
                          <tr
                            style={{
                              backgroundColor: checkedItem.includes(id)
                                ? "#DFECFF"
                                : "",
                            }}
                          >
                            <td>
                              <HcCheckBox
                                checked={checkedItem.includes(id)}
                                onChange={(e) => {
                                  checkHandler(e.target.checked, id);
                                }}
                              />
                            </td>
                            <td>{accountCode}</td>
                            <td>{accountGroupName}</td>

                            <td>{groupLevel}</td>
                            <td>{groupClassification}</td>
                            <td>{devitCredit}</td>
                            <td>{useYn}</td>
                          </tr>
                        )
                      )
                    : editingData.map(
                        ({
                          id,
                          accountCode,
                          accountGroupName,
                          groupLevel,
                          groupClassification,
                          devitCredit,
                          useYn,
                        }) => (
                          <tr
                            style={{
                              backgroundColor: checkedItem.includes(id)
                                ? "#DFECFF"
                                : "",
                            }}
                          >
                            <td>
                              <HcCheckBox
                                checked={checkedItem.includes(id)}
                                onChange={(e) => {
                                  checkHandler(e.target.checked, id);
                                }}
                              />
                            </td>
                            <td>
                              {accountCode != "" ? (
                                accountCode
                              ) : (
                                <TextField
                                  placeholder="계정그룹코드 입력*"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                    paddingLeft: 0,
                                  }}
                                ></TextField>
                              )}
                            </td>
                            <td>
                              {accountGroupName != "" ? (
                                accountGroupName
                              ) : (
                                <TextField
                                  placeholder="계정그룹명 입력*"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                    paddingLeft: 0,
                                  }}
                                ></TextField>
                              )}
                            </td>

                            <td>
                              {groupLevel != "" ? (
                                groupLevel
                              ) : (
                                <StyledSelect
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                    paddingLeft: 0,
                                  }}
                                >
                                  <option>{"1레벨"}</option>
                                  <option>{"2레벨"}</option>
                                  <option>{"3레벨"}</option>
                                </StyledSelect>
                              )}
                            </td>
                            <td>
                              {groupClassification != "" ? (
                                groupClassification
                              ) : (
                                <StyledSelect
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                    paddingLeft: 0,
                                  }}
                                >
                                  <option>{"그룹"}</option>
                                  <option>{"계산"}</option>
                                </StyledSelect>
                              )}
                            </td>
                            <td>
                              {devitCredit != "" ? (
                                devitCredit
                              ) : (
                                <StyledSelect
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                    paddingLeft: 0,
                                  }}
                                >
                                  <option>{"차변"}</option>
                                  <option>{"대변"}</option>
                                </StyledSelect>
                              )}
                            </td>
                            <td>
                              {useYn != "" ? (
                                useYn
                              ) : (
                                <StyledSelect
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    border: "none",
                                    paddingLeft: 0,
                                  }}
                                >
                                  <option>{"사용"}</option>
                                  <option>{"사용안함"}</option>
                                </StyledSelect>
                              )}
                            </td>
                          </tr>
                        )
                      )}
                </tbody>
              </table>
            </TableContainer>
          </div>
        </div>
      </ComponentWrapper>

      <HcBottomBar open={isEditing} style={{ width: 1400 }}>
        <div>
          <HcButton
            onClick={() => {
              setIsEditing(false);
              setGroupData(editingData);
            }}
            styles="primary"
            style={{ marginRight: "5px" }}
            size="big"
          >
            수정
          </HcButton>
          <HcButton
            onClick={() => {
              setIsEditing(false);
              setEditingData(Array.from(groupData));
            }}
            styles="line"
            style={{ marginRight: "5px" }}
            size="big"
          >
            마감
          </HcButton>
        </div>
      </HcBottomBar>
    </div>
  );
};

export default AccountGroupRegister;
