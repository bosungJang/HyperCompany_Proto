import React from "react";
import styled, { keyframes, Keyframes } from "styled-components";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { ComponentWrapper } from "common/HcCommonLayout";
import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
  NullTbody,
  TableSetting,
} from "common/HcTableComponent";
import HcCheckBox from "common/HcCheckBox";
import HcTree from "common/HcTree";
import HcBottomBar from "common/HcBottomBar";
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
  HcTextArea,
} from "common/HcTextField";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import { HcTreePopupFi } from "common/HcPopup";
import HcButton from "common/HcButton";
import { HcTabsAdv } from "common/HcTabs";

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
let num = 100000;
const getId = () => {
  num = num + 1;
  return num;
};
const AbilityData = Array(17)
  .fill(undefined)
  .map(() => ({
    id: getId(),
    name: "회계",
    group: "경영지원",
    comment: "재무나 회계에 대한 업무를 하는 직무입니다.",
    type: "연봉제",
    grade: "1등급",
    ability: ["협상능력", "설득능력", "대인관계력", "어학능력", "분석력"],
    date: "2021.01.01",
    action: <TableActionBtn />,
  }));

const AbilityManagement = ({ match }: RouteComponentProps<MatchParams>) => {
  /*TagInput */
  const [tags, setTags] = React.useState([
    "가수금 현금 입금",
    "물품 매각 관련 현금 입금",
    "용역제공 관련 현금 입금",
  ]);
  /*TagInput */
  const history = useHistory();
  /*checkbox */

  const [checkedItem, setCheckedItem]: any = React.useState([]);
  const [groupCreate, setGroupCreate] = React.useState(false);

  /*checkbox */
  /*Create */
  const [isCreate, setIsCreates] = React.useState(false);
  /*Create */

  /*Search */
  const [searchVal, setsearchVal] = React.useState("");
  /*Search */

  /* Current Data*/
  const [currentData, setcurrentData] = React.useState({
    id: "0",
    title: "",
  });

  /* Current Data*/

  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */
  const [edit, setEdit] = React.useState(false);

  /*Tree*/
  const [items, setItems] = React.useState([
    {
      id: "0", //table
      title: "전체",
    },
    {
      id: 1,
      title: "인사 역량",
    },
    {
      id: 2,
      title: "경영 지원 역량",
    },
    {
      id: 3,
      title: "기획 역량",
    },
    {
      id: 4,
      title: "연구 개발 역량",
    },
  ]);
  /*Tree*/

  const infoData = [
    {
      id: 0,
      title: "인사 역량",
      creator: "홍길동",
      date: "2021.01.01",
      description:
        "전략 기획, 회계, 구매, 인사 총무로 구성되어 있습니다.  회사 비전을 설립하고 경영 환경을 분석합니다. 재무나 회계에 대한 업무를 분석하는 직무입니다.",
    },
    {
      id: 1,
      title: "경영 지원 역량",
      creator: "홍길동",
      date: "2021.01.01",
      description: "영업마케팅 설명",
    },
    {
      id: 2,
      title: "기획 역량",
      creator: "홍길동",
      date: "2021.01.01",
      description: "연구개발 설명",
    },
    {
      id: 3,
      title: "연구 개발 역량",
      creator: "홍길동",
      date: "2021.01.01",
      description: "전산IT 설명",
    },
  ];
  const [test, setTest] = React.useState({
    id: infoData.length,
    title: "추가",
    creator: "홍길동",
    date: "2021.01.01",
    description: "추가설명입니다.",
  });

  const CreateStatus = React.forwardRef((props, ref) => {
    const [selGroup, setSelGroup] = React.useState({
      id: "",
      title: "",
    });

    /*SelectData */

    const [createData, setcreateData] = React.useState({
      title: "새 그룹",
      accountName: "제예금",
      creator: "홍길동",
      description: "설명을 입력하세요",
      date: "2021.01.01",
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
        relatedAccount: selGroup.title,
      }));
    }, [selGroup]);

    React.useImperativeHandle(ref, () => ({
      importData() {
        return createData;
      },
    }));

    return (
      <>
        <HcTextField
          titleName=""
          name="title"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              alert("SUCCESS");
            }
          }}
          style={{ width: "284px", height: 56 }}
          value={createData.title}
          onChange={(e) => {
            setcreateData((prevState) => ({
              ...prevState,
              title: e.target.value,
            }));
          }}
        />

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
            <HcTextField
              titleName="생성자"
              name="creator"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
              value={createData.creator}
              onChange={(e) => {
                setcreateData((prevState) => ({
                  ...prevState,
                  creator: e.target.value,
                }));
              }}
            />
            <HcTextField
              titleName="설명"
              name="description"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "936px", marginBottom: 20 }}
              value={createData.description}
              onChange={(e) => {
                setcreateData((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }));
              }}
            />
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
              titleName="생성일자"
              name="date"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
              value={createData.date}
              onChange={(e) => {
                setcreateData((prevState) => ({
                  ...prevState,
                  date: e.target.value,
                }));
              }}
            />
          </div>
        </div>

        <HcTreePopupFi
          open={modalOpen}
          close={closeModal}
          header="계정 과목 조회"
        >
          <HcSearchTextField
            name="name"
            value={searchVal}
            placeholder="직무 그룹 검색"
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
            style={{ Height: "832px", width: "312px", marginTop: "13px" }}
            currentData={selGroup}
            setcurrentData={setSelGroup}
            closeModal={closeModal}
          />
        </HcTreePopupFi>
      </>
    );
  });

  function AbilityTable(props: any) {
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
        props.data.forEach((i: any) => ids.push(i.id));
        setCheckedItem(ids);
      } else {
        setCheckedItem([]);
      }
    }
    return (
      <>
        <div style={{ display: "flex" }}>
          <HcButton
            onClick={() => {
              history.push({
                pathname: "/hr/pas/abilityCreate",
              });
            }}
            styles="secondary"
            style={{
              display: checkedItem.length >= 1 ? "none" : "",
              marginBottom: "12px",
            }}
            size="medium"
          >
            +생성
          </HcButton>
          <HcButton
            styles="line"
            style={{
              display: checkedItem.length >= 1 ? "" : "none",

              marginBottom: "12px",
            }}
            size="medium"
            onClick={() => {
              const sendData: any = props.data.find(
                (e: any) => e.id == checkedItem[0]
              );
              history.push({
                pathname: "/hr/orm/ProfessionalDetail",
                state: {
                  id: sendData.id,
                  name: sendData.name,
                  group: sendData.group,
                  type: sendData.type,
                  comment: sendData.comment,
                  grade: sendData.grade,

                  ability: sendData.ability,

                  edit: true,
                },
              });
            }}
          >
            수정
          </HcButton>
          <HcButton
            styles="line"
            style={{
              display: checkedItem.length >= 1 ? "" : "none",
              marginLeft: "10px",
              marginBottom: "12px",
            }}
            size="medium"
          >
            삭제
          </HcButton>
          <HcButton
            onClick={() => {}}
            styles="line"
            style={{
              display: checkedItem.length >= 1 ? "" : "none",
              marginLeft: "10px",
              marginBottom: "12px",
            }}
            size="medium"
          >
            역량 그룹이동
          </HcButton>
          <TableSetting
            style={{
              marginLeft: props.all
                ? checkedItem.length >= 1
                  ? 563
                  : 767
                : checkedItem.length >= 1
                ? 515
                : 719,
            }}
          />
        </div>
        <HcTableContainer
          style={{ width: "100%", height: props.all ? 984 : 261 }}
        >
          <HcTable>
            <thead>
              <tr>
                <th style={{ width: 46 }}>
                  <div style={{ paddingTop: 7 }}>
                    <HcCheckBox
                      checked={checkedItem.length > 0 ? true : false}
                      onChange={(e) => checkAllHandler(e.target.checked)}
                    />
                  </div>
                </th>
                <th style={{ width: props.all ? 160 : 150 }}>역량명</th>
                <th style={{ width: props.all ? 160 : 150 }}>역량 그룹</th>
                <th style={{ width: props.all ? 378 : 350 }}>설명</th>
                <th style={{ width: 120 }}>수정 일시</th>
                <th style={{ width: 120 }}>-</th>
              </tr>
            </thead>

            {props.data.length > 0 ? (
              <tbody>
                {props.data.map(
                  ({
                    id,
                    name,
                    ability,
                    grade,
                    group,
                    type,
                    comment,
                    action,
                  }: any) => (
                    <tr
                      style={{
                        background: checkedItem.includes(id) ? "#EFF5FF" : "",
                      }}
                      onClick={() => {
                        history.push({
                          pathname: "/hr/pas/abilityDetail",
                          state: {
                            id: id,
                            comment: comment,
                            name: name,
                            ability: ability,
                            grade: grade,
                            group: group,
                            edit: false,
                            type: type,
                          },
                        });
                      }}
                    >
                      <td onClick={(event) => event.stopPropagation()}>
                        <HcCheckBox
                          checked={checkedItem.includes(id)}
                          onChange={(e) => {
                            checkHandler(e.target.checked, id);
                          }}
                        />
                      </td>
                      <td>경영 환경 분석</td>
                      <td>경영 지원 역량</td>
                      <td>{comment}</td>
                      <td>2022.01.02</td>

                      <td>{action}</td>
                    </tr>
                  )
                )}
              </tbody>
            ) : (
              <NullTbody colspan={6} />
            )}
          </HcTable>
        </HcTableContainer>
        {/*table*/}
      </>
    );
  }

  function NormalStatus() {
    return (
      <>
        <div
          style={{
            width: 984,
            height: 814,
            marginLeft: 24,
            display: currentData.id == "0" ? "" : "none",
          }}
        >
          <AbilityTable data={AbilityData} all />
        </div>
        <TreeContArea
          style={{
            display: currentData.id == "0" ? "none" : "",
          }}
        >
          {edit ? (
            <TextField
              value={currentData.title}
              style={{
                width: 400,
                height: 60,
                fontSize: "24px",
                lineHeight: "35px",
                fontWeight: 500,
              }}
            />
          ) : (
            <TreeContAreaTitle>{currentData.title}</TreeContAreaTitle>
          )}
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
                titleName="생성자"
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
              {edit ? (
                <HcTextArea
                  style={{
                    width: "936px",
                    marginBottom: 20,
                    height: "88px",
                    whiteSpace: "pre-wrap",
                  }}
                  value={`전략 기획, 회계, 구매, 인사 총무로 구성되어 있습니다. 회사 비전을 설립하고 경영 환경을 분석합니다. \n 재무나 회계에 대한 업무를 분석하는 직무입니다.`}
                />
              ) : (
                <HcTextFieldLabel
                  titleName="설명"
                  name="name"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      alert("SUCCESS");
                    }
                  }}
                  style={{ width: "936px", marginBottom: 20 }}
                >
                  설명입니다
                </HcTextFieldLabel>
              )}
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
              {" "}
              <HcTextFieldLabel
                titleName="생성일자"
                name="name"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    alert("SUCCESS");
                  }
                }}
                style={{ width: "284px" }}
              >
                2021.01.01
              </HcTextFieldLabel>
            </div>
          </div>
          <div style={{ width: 936, height: 392, marginTop: 48 }}>
            <AbilityTable data={AbilityData} />
          </div>
        </TreeContArea>
      </>
    );
  }
  const childRef = React.useRef<any>(null);

  return (
    <>
      <ComponentWrapper style={{ width: "inheirt", display: "block" }}>
        <div style={{ display: "block", width: "inherit", marginTop: "20px" }}>
          <div>
            <HcTitleTextField
              titleName="역량 관리"
              isBackIcon={false}
              style={{ display: "inline-block" }}
            />
            <div style={{ float: "right" }}>
              <HcButton
                onClick={() => {}}
                styles="line"
                style={{}}
                size="medium"
              >
                내보내기
              </HcButton>
            </div>
          </div>

          <div
            className="body_area"
            style={{ display: "flex", marginTop: "32px" }}
          >
            <>
              <HcTree
                items={items}
                title="역량 그룹"
                search={true}
                style={{ minHeight: "832px" }}
                isCreate={isCreate}
                placeholder="직무 그룹 검색"
                setIsCreates={setIsCreates}
                currentData={currentData}
                setcurrentData={setcurrentData}
              />
              <div>
                {isCreate === true ? (
                  <TreeContArea>
                    <CreateStatus ref={childRef} />{" "}
                  </TreeContArea>
                ) : (
                  <>
                    <NormalStatus />
                  </>
                )}
              </div>
            </>
          </div>
        </div>
      </ComponentWrapper>
      <HcBottomBar
        open={barOpen && currentData.id !== "0"}
        style={{ width: 1400 }}
      >
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

export default AbilityManagement;
