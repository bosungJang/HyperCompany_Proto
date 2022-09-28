import React, { useState } from "react";
import styled from "styled-components";
import { RouteComponentProps, useHistory } from "react-router-dom";
import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
  NullTbody,
  TableSetting,
} from "common/HcTableComponent";
import HcCheckBox from "common/HcCheckBox";
import HcTree from "common/HcTree";
import HcTextField, {
  HcSearchTextField,
  HcTitleTextField,
  HcTextFieldLabel,
  SubHeading,
} from "common/HcTextField";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import { HcTabsAdv } from "common/HcTabs";
import { ComponentWrapper } from "common/HcCommonLayout";

interface MatchParams {
  id: string;
}

const TreeContArea = styled.div`
  border: 1px solid #cecece;
  border-radius: 5px;
  width: 984px;
  min-height: 868px;
  height: fit-content;
  margin-left: 24px;
  display: block;
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

const Dutydata = Array(100)
  .fill(undefined)
  .map(() => ({
    id: getId(),
    name: "회계",
    group: "경영지원",
    comment: "재무나 회계에 대한 업무를 하는 직무입니다.",

    date: "2021.01.01",
    action: <TableActionBtn />,
  }));

const ProfessionalManagement = ({
  match,
}: RouteComponentProps<MatchParams>) => {
  const history = useHistory();
  /*checkbox */

  const [checkedItem, setCheckedItem]: any = React.useState([]);
  const [groupCreate, setGroupCreate] = React.useState(false);
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
      Dutydata.forEach((i) => ids.push(i.id));
      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }

  /*checkbox */
  /*Create */
  const [isCreate, setIsCreates] = React.useState(false);
  /*Create */

  /*Search */
  const [searchVal, setsearchVal] = React.useState("");
  /*Search */

  /* Current Data*/
  const [currentData, setcurrentData] = React.useState({
    id: 0,
    title: "",
  });

  /* Current Data*/

  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */

  /*Tree*/
  const [items, setItems] = React.useState([
    {
      id: "0", //table
      title: "전체",
    },
    {
      id: 1,
      title: "경영 지원",
    },
    {
      id: 2,
      title: "영업 및 마케팅",
    },
    {
      id: 3,
      title: "연구 개발",
    },
    {
      id: 4,
      title: "전산 IT",
    },
  ]);
  /*Tree*/

  const infoData = [
    {
      id: 0,
      title: "경영지원",
      creator: "홍길동",
      date: "2021.01.01",
      description:
        "전략 기획, 회계, 구매, 인사 총무로 구성되어 있습니다.  회사 비전을 설립하고 경영 환경을 분석합니다. 재무나 회계에 대한 업무를 분석하는 직무입니다.",
    },
    {
      id: 1,
      title: "영업 및 마케팅",
      creator: "홍길동",
      date: "2021.01.01",
      description: "영업마케팅 설명",
    },
    {
      id: 2,
      title: "연구 개발",
      creator: "홍길동",
      date: "2021.01.01",
      description: "연구개발 설명",
    },
    {
      id: 3,
      title: "전산IT",
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
            margin: "20px 0px 40px 0px",
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
        <SubHeading
          style={{ marginBottom: "18px" }}
          titleName={
            Tabs === "1"
              ? `직무(${String(Dutydata.length)})`
              : Tabs === "2"
              ? `직위(${String(Dutydata.length)})`
              : `직책(${String(Dutydata.length)})`
          }
        />
        <ContentTable />
      </>
    );
  });

  function ContentTable(props: any) {
    const [nowPage, setNowPage] = useState(0);
    // let nowPage = 0;
    const totalPage = () => {
      if (Dutydata.length % 2 === 0) {
        return Dutydata.length / 10;
      } else {
        return Dutydata.length / 10 + 1;
      }
    };
    return (
      <>
        <div style={{ display: "flex", marginBottom: "12px" }}>
          {" "}
          {/*table*/}
          <HcButton
            onClick={() => {
              history.push({
                pathname: "/hr/orm/ProfessionalCreate",
                state: {
                  type: Tabs,
                },
              });
            }}
            styles="secondary"
            style={{
              display: checkedItem.length >= 1 ? "none" : "",
              width: "80px",
            }}
            size="medium"
          >
            +생성
          </HcButton>
          <HcButton
            styles="line"
            style={{
              display: checkedItem.length >= 1 ? "" : "none",
              width: "80px",
            }}
            size="medium"
            onClick={() => {
              const sendData: any = Dutydata.find(
                (e) => e.id == checkedItem[0]
              );
              console.log(sendData);
              history.push({
                pathname: "/hr/orm/ProfessionalDetail",
                state: {
                  id: sendData.id,
                  type: Tabs,

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
              width: "80px",
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
              width: "120px",
            }}
            size="medium"
          >
            사원이동
          </HcButton>
          <TableSetting
            search
            perPage={10}
            dataLength={Dutydata.length}
            prev={() => {
              console.log(nowPage);
              if (nowPage - 1 < 0) alert("first page");
              else setNowPage(nowPage - 1);
            }}
            next={() => {
              console.log(nowPage);
              if (nowPage + 1 == totalPage()) alert("last page");
              else setNowPage(nowPage + 1);
            }}
            now={nowPage}
          />
        </div>
        {nowPage + "total" + totalPage()}
        <HcTableContainer style={props.style ? props.style : { height: 354 }}>
          <HcTable>
            <thead>
              <tr>
                <th style={{ width: "46px" }}>
                  <HcCheckBox
                    checked={checkedItem.length > 0 ? true : false}
                    onChange={(e) => checkAllHandler(e.target.checked)}
                  />
                </th>
                <th style={{ width: "160px" }}>직무명</th>
                <th style={{ width: "160px" }}>직무 그룹</th>
                <th style={{ width: "400px" }}>설명</th>
                <th style={{ width: "120px" }}>수정 일시</th>
                <th style={{ width: "120px" }}>-</th>
              </tr>
            </thead>

            {Dutydata.length > 0 ? (
              <tbody>
                {Dutydata.map(({ id, name, group, comment, action, date }) => (
                  <tr
                    style={{
                      backgroundColor: checkedItem.includes(id)
                        ? "#DFECFF"
                        : "",
                    }}
                    onClick={() => {
                      history.push({
                        pathname: "/hr/orm/ProfessionalDetail",
                        state: {
                          id: id,
                          type: Tabs,
                          comment: comment,
                          name: name,
                          group: group,
                          edit: false,
                        },
                      });
                    }}
                  >
                    <td onClick={(event) => event.stopPropagation()}>
                      {/* <HcCheckBox
                        checked={checkedItem.includes(id)}
                        onChange={(e) => {
                          checkHandler(e.target.checked, id);
                        }}
                      /> */}
                      {id}
                    </td>
                    <td>{name}</td>
                    <td>{group}</td>
                    <td>{comment}</td>
                    <td>{date}</td>
                    <td>{action}</td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <NullTbody style={{ textAlign: "center" }} colSpan={6} />
              </tbody>
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
            height: 860,
            marginLeft: 24,
            display: currentData.id == 0 ? "" : "none",
          }}
        >
          <ContentTable style={{ height: "738px" }} />
        </div>
        <TreeContArea
          style={{
            display: currentData.id == 0 ? "none" : "",
          }}
        >
          <TreeContAreaTitle>{currentData.title}</TreeContAreaTitle>
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
          </div>{" "}
          <SubHeading
            style={{ marginBottom: "18px" }}
            titleName={
              Tabs === "1"
                ? `직무(${String(Dutydata.length)})`
                : Tabs === "2"
                ? `직위(${String(Dutydata.length)})`
                : `직책(${String(Dutydata.length)})`
            }
          />
          <ContentTable />
        </TreeContArea>
      </>
    );
  }
  const childRef = React.useRef<any>(null);

  /*Tabs */
  const [Tabs, setTabs] = React.useState("1");
  /*Tabs */

  return (
    <>
      <ComponentWrapper
        style={{
          width: "inheirt",
          display: "block",
          height: "fit-content",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "block", width: "inherit", marginTop: "20px" }}>
          <div>
            <HcTitleTextField
              titleName="직능관리"
              isBackIcon={false}
              style={{ display: "inline-block" }}
            />
            <div style={{ float: "right" }}>
              <HcButton
                styles="line"
                style={{ marginRight: 10 }}
                size="medium"
                onClick={() => {
                  history.push({
                    pathname: "/hr/orm/ProfessionalHistory",
                  });
                }}
              >
                직능 수정 이력
              </HcButton>
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
          <div style={{ marginTop: "39px" }}>
            <HcTabsAdv
              items={[
                { to: "1", name: "직무 관리" },
                { to: "2", name: "직위 관리" },
                { to: "3", name: "직책 관리" },
              ]}
              size="normal"
              TabNumber={Tabs}
              SetTabNumber={setTabs}
            />
          </div>
          <div
            className="body_area"
            style={{ display: "flex", marginTop: "32px" }}
          >
            {
              {
                "1": (
                  <>
                    <HcTree
                      items={items}
                      title="직무 그룹"
                      search={true}
                      style={{ minHeight: "832px" }}
                      isCreate={isCreate}
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
                ),
                "2": (
                  <>
                    <HcTree
                      items={items}
                      title="직위 그룹"
                      search={true}
                      style={{ minHeight: "832px" }}
                      isCreate={isCreate}
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
                ),
                "3": (
                  <>
                    <div>직책 관리</div>
                  </>
                ),
              }[Tabs]
            }
          </div>
        </div>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
        <div>
          {isCreate === true ? (
            <HcButton
              onClick={() => {
                //openModal();

                setTest(childRef.current.importData());
                items.push({
                  id: test.id,
                  title: test.title,
                });
                infoData.push({
                  id: test.id,
                  title: test.title,
                  description: test.description,
                  creator: test.creator,
                  date: test.date,
                });
                setIsCreates(false);
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
            삭제
          </HcButton>
        </div>
      </HcBottomBar>
    </>
  );
};

export default ProfessionalManagement;
