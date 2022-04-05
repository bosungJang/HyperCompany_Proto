import { RouteComponentProps, useLocation } from "react-router-dom";
import React, { useState } from "react";
import "common/Table.css";
import styled from "styled-components";
import { HcContentPopup, SideBar } from "common/HcPopup";
import { TableSelect, TableActionBtn } from "common/HcTableComponent";
import HcCheckBox from "common/HcCheckBox";
import HcTabs from "common/HcTabs";
import { ComponentWrapper, MultiLayout } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  HcTextFieldLabel,
  HcSelect,
} from "common/HcTextField";
import { HcTabsAdv } from "common/HcTabs";
import HcButton from "common/HcButton";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import HcBottomBar from "common/HcBottomBar";
const TextFieldContainer = styled.div`
  margin-top: 59px;
  height: 255px;
  width: 1320px;
  float: left;
`;

const TableContainer = styled.div`
  width: 1320px;
  padding-top:20px
  margin-top: 295px;
`;
const RadioTitle = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: bold;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  text-transform: uppercase;
  width: 70px;
  height: 20px;
  color: #656565;
  margin-bottom: 23px;
`;
const SubTitle = styled.div`
  height: 30px;
  width: fit-content;
  font-family: Noto Sans CJK KR;
  font-style: bold;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  padding-top: 335px;
  color: #303030;
`;
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
const StyledSpan = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  width: fit-content;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  text-transform: uppercase;
  margin-left: 10px;
  /* SuperCompany/Color/Red */

  color: #f93737;
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
const LeaveStandardDetail = () => {
  const location = useLocation();
  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */
  /*popup */
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  /*popup */
  const [isOpen, setIsOpen] = useState(false);

  const openSideBar = () => {
    setIsOpen(true);
  };
  const closeSideBar = () => {
    setIsOpen(false);
  };
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({
    id: 100001,
    type: "연봉제",
    unit: "일",
    month: "전월",
    monthDate: "1",
    year: "회계일",
    yearDate: "1",
    yearMin: "365",
  });
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

      setCheckedItem(ids);
    } else {
      setCheckedItem([]);
    }
  }
  const [checkedItem, setCheckedItem]: any = React.useState([]);
  const columns = [
    <div style={{ paddingTop: 9, width: 46, paddingLeft: 16 }}>
      <HcCheckBox
        checked={checkedItem.length > 0 ? true : false}
        onChange={(e) => checkAllHandler(e.target.checked)}
      />
    </div>,
    "근속연수",
    "연차 갯수",

    "-",
  ];
  /*Tabs */
  const [Tabs, setTabs] = React.useState("1");
  /*Tabs */
  return (
    <div style={{ width: "inherit" }}>
      <ComponentWrapper
        style={{
          display: "block",
          height: 1400,
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ marginTop: 20 }}>
          {" "}
          <HcTitleTextField
            titleName={edit == true ? "연월차 수정" : "연월차 상세"}
            isBackIcon
          />
        </div>
        {edit == false ? (
          <TextFieldContainer>
            <div
              className="first_block"
              style={{
                width: "386px",
                height: "fit-content",
                float: "left",
                marginRight: "80px",
              }}
            >
              <HcTextFieldLabel
                titleName="연차 기준 코드"
                name="id"
                required
                style={{ width: "387px", marginBottom: 20 }}
              >
                {data.id}
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="월차 발생 기준일"
                name="month"
                required
                style={{ width: "387px", marginBottom: 20 }}
              >
                {data.month}
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="연차 발생 기준"
                name="year"
                required
                style={{ width: "387px", marginBottom: 20 }}
              >
                {data.year}
              </HcTextFieldLabel>
            </div>
            <div
              className="first_block"
              style={{
                width: "386px",
                height: "fit-content",
                float: "left",
                marginRight: "80px",
              }}
            >
              <HcTextFieldLabel
                titleName="급여 형태"
                name="type"
                required
                style={{ width: "387px", marginBottom: 20 }}
              >
                {data.type}
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="월차 발생일"
                name="monthDate"
                required
                style={{ width: "387px", marginBottom: 20 }}
              >
                {data.monthDate}
              </HcTextFieldLabel>
              <HcTextFieldLabel
                titleName="연차 발생일"
                name="yearDate"
                required
                style={{ width: "387px", marginBottom: 20 }}
              >
                {data.yearDate}
              </HcTextFieldLabel>
            </div>
            <div
              className="first_block"
              style={{
                width: "386px",
                height: "fit-content",
                float: "left",
              }}
            >
              <Title style={{ marginBottom: 10, color: "#5D5D62" }}>
                사용 단위
              </Title>
              <StyledUl
                style={{ backgroundColor: "#F4F4F4", marginBottom: 108 }}
              >
                <TypeLi
                  onClick={(e: any) => {
                    setData({ ...data, unit: "일" });
                  }}
                  style={{
                    backgroundColor: data.unit == "일" ? "#5D5D62" : "#F4F4F4",
                    color: data.unit == "일" ? "white" : "#5D5D62",
                  }}
                >
                  일
                </TypeLi>
                <TypeLi
                  onClick={(e: any) => {
                    setData({ ...data, unit: "반차" });
                  }}
                  style={{
                    backgroundColor:
                      data.unit == "반차" ? "#5D5D62" : "#F4F4F4",
                    color: data.unit == "반차" ? "white" : "#5D5D62",
                  }}
                >
                  반차
                </TypeLi>
                <TypeLi
                  onClick={(e: any) => {
                    setData({ ...data, unit: "시간" });
                  }}
                  style={{
                    backgroundColor:
                      data.unit == "시간" ? "#5D5D62" : "#F4F4F4",
                    color: data.unit == "시간" ? "white" : "#5D5D62",
                  }}
                >
                  시간
                </TypeLi>
              </StyledUl>
              <HcTextFieldLabel
                titleName="연차 발생 최소일"
                name="yearMin"
                style={{ width: "387px" }}
                required
              >
                {data.yearMin}
              </HcTextFieldLabel>
            </div>
          </TextFieldContainer>
        ) : (
          <TextFieldContainer>
            <div
              className="first_block"
              style={{
                width: "387px",
                height: "100px",
                float: "left",
                marginRight: "80px",
              }}
            >
              <HcTextField
                titleName="연차 기준 코드"
                required
                name="name"
                style={{ width: "387px", marginBottom: 20 }}
                value={data.id}
                onChange={(e) => {
                  setData((prevState: any) => ({
                    ...prevState,
                    id: e.target.value,
                  }));
                }}
              />
              <HcSelect
                titleName="월차 발생 기준일"
                style={{ width: "387px", marginBottom: 20 }}
                required
              >
                <option value="" hidden>
                  {data.month}
                </option>
                <option value={" hc"}>{data.month}</option>
                <option value={"hc"}>1일</option>
              </HcSelect>
              <HcSelect
                titleName="연차 발생 기준"
                style={{ width: "387px", marginBottom: 20 }}
                required
              >
                <option value="" hidden>
                  {data.year}
                </option>
                <option value={" hc"}>{data.year}</option>
                <option value={"hc"}>1일</option>
              </HcSelect>
            </div>
            <div
              className="first_block"
              style={{
                width: "387px",
                height: "fit-content",
                float: "left",
                marginRight: "80px",
              }}
            >
              <HcSelect
                titleName="급여 형태"
                style={{ width: "387px", marginBottom: 20 }}
                required
              >
                <option value="" hidden>
                  {data.type}
                </option>
                <option value={" hc"}>{data.type}</option>
                <option value={"hc"}>월급제</option>
                <option value={"hc"}>일급제</option>
                <option value={"hc"}>시급제</option>
              </HcSelect>
              <HcTextField
                titleName="월차 발생일"
                name="monthDate"
                style={{ width: "387px", marginBottom: 20 }}
                value={data.monthDate}
                onChange={(e) => {
                  setData((prevState: any) => ({
                    ...prevState,
                    monthDate: e.target.value,
                  }));
                }}
              />
              <HcTextField
                titleName="연차 발생일"
                name="yearDate"
                style={{ width: "387px", marginBottom: 20 }}
                value={data.yearDate}
                onChange={(e) => {
                  setData((prevState: any) => ({
                    ...prevState,
                    yearDate: e.target.value,
                  }));
                }}
              />
            </div>
            <div
              className="first_block"
              style={{
                width: "386px",
                height: "fit-content",
                float: "left",
              }}
            >
              <Title style={{ marginBottom: 10, color: "#5D5D62" }}>
                사용 단위
              </Title>
              <StyledUl
                style={{ backgroundColor: "#F4F4F4", marginBottom: 108 }}
              >
                <TypeLi
                  onClick={(e: any) => {
                    setData({ ...data, unit: "일" });
                  }}
                  style={{
                    backgroundColor: data.unit == "일" ? "#5D5D62" : "#F4F4F4",
                    color: data.unit == "일" ? "white" : "#5D5D62",
                  }}
                >
                  일
                </TypeLi>
                <TypeLi
                  onClick={(e: any) => {
                    setData({ ...data, unit: "반차" });
                  }}
                  style={{
                    backgroundColor:
                      data.unit == "반차" ? "#5D5D62" : "#F4F4F4",
                    color: data.unit == "반차" ? "white" : "#5D5D62",
                  }}
                >
                  반차
                </TypeLi>
                <TypeLi
                  onClick={(e: any) => {
                    setData({ ...data, unit: "시간" });
                  }}
                  style={{
                    backgroundColor:
                      data.unit == "시간" ? "#5D5D62" : "#F4F4F4",
                    color: data.unit == "시간" ? "white" : "#5D5D62",
                  }}
                >
                  시간
                </TypeLi>
              </StyledUl>
              <HcTextField
                titleName="연차 발생 최소일"
                name="yearMin"
                style={{ width: "387px", marginBottom: 20 }}
                value={data.yearMin}
                onChange={(e) => {
                  setData((prevState: any) => ({
                    ...prevState,
                    yearMin: e.target.value,
                  }));
                }}
              />
            </div>
          </TextFieldContainer>
        )}
        <TableContainer style={{ display: "block" }}>
          <SubTitle>근속연수별 연차 설정</SubTitle>
          <HcButton
            styles="secondary"
            size="medium"
            style={{ marginBottom: 12, marginTop: 48 }}
          >
            +추가
          </HcButton>
          <table>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th style={{ maxWidth: 425, textAlign: "left" }}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody style={{ maxWidth: 425 }}>
              <tr>
                <td
                  style={{
                    overflow: " scroll",
                  }}
                >
                  <div style={{ paddingLeft: 16, marginTop: 9 }}>
                    <HcCheckBox
                      checked={checkedItem.includes(data.id)}
                      onChange={(e) => {
                        checkHandler(e.target.checked, data.id);
                      }}
                    />
                  </div>
                </td>
                <td>1년차</td>
                <td>11개</td>

                <td>
                  <TableActionBtn />
                </td>
              </tr>
            </tbody>
          </table>
        </TableContainer>

        <div
          className="first_block"
          style={{
            marginRight: "138px",
            display: "inline-block",
            marginTop: 96,
          }}
        >
          <Title style={{ marginBottom: 23, display: "inline-block" }}>
            주40시간제 시행 여부{" "}
            <HcButton
              styles={"line"}
              size={"small"}
              style={{ marginLeft: 10 }}
              onClick={openSideBar}
            >
              연차 사용 촉진 설정
            </HcButton>
            <span
              style={{
                marginLeft: 10,
                color: "#F93737",
                fontSize: "11px",
                textDecoration: "underLine",
              }}
              onClick={openModal}
            >
              관련 법령 확인
            </span>
          </Title>
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
        <div
          className="first_block"
          style={{
            marginRight: "297px",
            display: "inline-block",
            marginTop: 96,
          }}
        >
          <Title style={{ marginBottom: 23 }}>주40시간제 시행 여부</Title>
          <HcRadioGroup
            defaultValue="true"
            onChange={(value) => console.log("value: ", value)}
          >
            <HcRadioButton value="true">
              <span style={{ marginRight: 47, marginLeft: 8 }}>시행</span>
            </HcRadioButton>
            <HcRadioButton value="false">
              <span style={{ marginLeft: 8 }}>미시행</span>
            </HcRadioButton>
          </HcRadioGroup>
        </div>
        <div
          className="first_block"
          style={{
            marginRight: "80px",
            display: "inline-block",
            marginTop: 96,
          }}
        >
          <Title style={{ marginBottom: 23 }}>중도 입사자 연차 발생 여부</Title>
          <HcRadioGroup
            defaultValue="true"
            onChange={(value) => console.log("value: ", value)}
          >
            <HcRadioButton value="true">
              <span style={{ marginRight: 47, marginLeft: 8, marginTop: 20 }}>
                발생
              </span>
            </HcRadioButton>
            <HcRadioButton value="false">
              <span style={{ marginLeft: 8 }}>미발생</span>
            </HcRadioButton>
          </HcRadioGroup>
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

      <HcContentPopup
        header="연차 촉진법 법령"
        open={modalOpen}
        close={closeModal}
        style={{ zIndex: 2 }}
        height={""}
        primaryBtn={"확인"}
        secondBtn={""}
      >
        <>
          <HcTabsAdv
            items={[
              { to: "1", name: "연차 촉진" },
              { to: "2", name: "월차 촉진" },
            ]}
            size="normal"
            TabNumber={Tabs}
            SetTabNumber={setTabs}
          />
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              marginTop: 27,
              color: "#000000",
            }}
          >
            근로기준법 제61조 제1항(연차 유급휴가의 사용 촉진)
          </p>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: "#5D5D62",
            }}
          >
            2021.2.1 개정
          </p>
          {
            {
              "1": (
                <>
                  <p>
                    사용자가 제60조 제1항ㆍ제3항 및 제4항에 따른 유급휴가의
                    사용을 촉진하기 위하여 다음 각 호의 조치를 하였음에도
                    불구하고 근로자가 휴가를 사용하지 아니하여 제60조 제7항
                    본문에 따라 소멸된 경우에는 사용자는 그 사용하지 아니한
                    휴가에 대하여 보상할 의무가 없고, 제60조 제7항 단서에 따른
                    사용자의 귀책사유에 해당하지 아니하는 것으로 본다. 1. 제60조
                    제7항 본문에 따른{" "}
                    <b>
                      기간이 끝나기 6개월 전을 기준으로 10일 이내에 사용자가
                      근로자별로 사용하지 아니한 휴가 일수를 알려주고,
                    </b>{" "}
                    근로자가 그 사용 시기를 정하여 사용자에게 통보하도록
                    서면으로 촉구할 것. 2. 제1호에 따른 촉구에도 불구하고
                    근로자가 촉구를 받은 때부터 10일 이내에 사용하지 아니한
                    휴가의 전부 또는 일부의 사용 시기를 정하여 사용자에게
                    통보하지 아니하면 제60조 제7항 본문에 따른{" "}
                    <b>
                      기간이 끝나기 2개월 전까지 사용자가 사용하지 아니한 휴가의
                      사용 시기를 정하여 근로자에게 서면으로 통보할 것.
                    </b>
                  </p>
                </>
              ),
              "2": (
                <>
                  <p>
                    <b>
                      {" "}
                      1. 최초 1년의 근로기간이 끝나기 3개월 전을 기준으로 10일
                      이내에 사용자가 근로자별로 사용하지 아니한 휴가 일수를
                      알려주고, 근로자가 그 사용 시기를 정하여 사용자에게
                      통보하도록 서면으로 촉구
                    </b>
                    할 것. 다만 사용자가 촉구한 후 발생한 휴가에 대해서는 최초
                    1년의 근로기간이 끝나기 1개월 전을 기준으로 5일 이내에
                    촉구하여야 한다. 2. 제1호에 따른 촉구에도 불구하고 근로자가
                    촉구를 받은 때부터 10일 이내에 사용하지 아니한 휴가의 전부
                    또는 일부의 사용 시기를 정하여 사용자에게 통보하지 아니하면{" "}
                    <b>
                      최초 1년의 근로기간이 끝나기 1개월 전까지 사용자가
                      사용하지 아니한 휴가의 사용 시기를 정하여 근로자에게
                      서면으로 통보
                    </b>
                    할 것. 다만, 제1호 단서에 따라 촉구한 휴가에 대해서는 최초
                    1년의 근로기간이 끝나기 10일 전까지 서면으로 통보하여야
                    한다.
                  </p>
                </>
              ),
            }[Tabs]
          }
        </>
      </HcContentPopup>
      <SideBar header=" 연차 사용 촉진 설정" open={isOpen} close={closeSideBar}>
        test
      </SideBar>
    </div>
  );
};

export default LeaveStandardDetail;
