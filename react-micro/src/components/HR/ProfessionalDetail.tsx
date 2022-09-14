import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import HcCheckBox from "common/HcCheckBox";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, {
  HcTitleTextField,
  HcTextFieldLabel,
  HcSelect,
  SubHeading,
} from "common/HcTextField";
import HcButton from "common/HcButton";
import HcRadioGroup, { HcRadioButton } from "common/HcRadioButton";
import HcBottomBar from "common/HcBottomBar";
const TextFieldContainer = styled.div`
  margin-top: 59px;
  height: 255px;
  width: 1320px;
  float: left;
`;
const Required = styled.span`
  content: *;
  color: #f06666;
`;
const TableContainer = styled.div`
  width: 1320px;
  height: 926px;
  margin-top: 37px;
  border-top: 1px solid #d9d9d9;
  display: block;
  padding: 0px;
  border-collapes: collapes;

  div {
    margin: 0px;
    min-height: 46px;
    height: inherit;
    padding-left: 12px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
  }
  .row {
    padding: 0px;
    border-bottom: 1px solid #d9d9d9;
    height: 46px;
  }
  .th {
    background: #ededed;
    color: #5d5d62;
    font-weight: 500;
    width: 200px;
    padding-left: 12px;
    font-size: 13px;
    line-height: 19px;
    border-bottom: 1px solid #d9d9d9;
    border-collapes: collapes;
  }
`;
const RadioTitle = styled.div`
  font-family: Noto Sans KR;
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

const ProfessionalDetail = () => {
  const location = useLocation();
  /*BottomBar */
  const [barOpen, setbarOpen] = React.useState(true);
  /*BottomBar */
  //   const [edit, setEdit] = useState(false);
  const [data, setData] = useState(location.state);
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
    <div style={{ paddingTop: 9, width: 46, paddingLeft: 16 }}>
      <HcCheckBox
        checked={checkedItem.length > 0 ? true : false}
        onChange={(e) => checkAllHandler(e.target.checked)}
      />
    </div>,
    "역량",
    "필요등급",
    "중요도",
    "-",
  ];

  return (
    <div style={{ width: "inherit" }}>
      <ComponentWrapper style={{ display: "block", height: 1400 }}>
        <div
          style={{
            marginTop: 20,
            width: "100%",
            justifyContent: "space-between",
            display: "flex",
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
              width: "100%",
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
        {data.type !== "1" ? (
          <>
            {data.edit == false ? (
              <TextFieldContainer>
                <div
                  className="first_block"
                  style={{
                    width: "284px",
                    height: "100px",
                    float: "left",
                    marginRight: "80px",
                  }}
                >
                  <HcTextFieldLabel
                    titleName="직무명"
                    name="name"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        alert("SUCCESS");
                      }
                    }}
                    style={{ width: "387px", marginBottom: 20 }}
                  >
                    {data.name}
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
                    {data.comment}
                  </HcTextFieldLabel>
                </div>
                <div
                  className="first_block"
                  style={{
                    width: "387px",
                    height: "100px",
                    float: "left",
                    marginRight: "80px",
                    marginLeft: "80px",
                  }}
                >
                  <HcTextFieldLabel
                    titleName="직무 그룹"
                    name="group"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        alert("SUCCESS");
                      }
                    }}
                    style={{ width: "387px", marginBottom: 20 }}
                  >
                    {data.group}
                  </HcTextFieldLabel>
                </div>
                <div
                  className="first_block"
                  style={{
                    width: "284px",
                    height: "100px",
                    float: "left",
                    marginRight: "80px",
                  }}
                >
                  <RadioTitle>활성화 여부</RadioTitle>
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
                    titleName="생성자"
                    name="name"
                    onKeyDown={(e: any) => {
                      if (e.key === "Enter") {
                        alert("SUCCESS");
                      }
                    }}
                    style={{ width: "387px", marginBottom: 20 }}
                    value={data.name}
                    onChange={(e) => {
                      setData((prevState: any) => ({
                        ...prevState,
                        name: e.target.value,
                      }));
                    }}
                  />
                  <HcTextField
                    titleName="급여 형태"
                    name="type"
                    onKeyDown={(e: any) => {
                      if (e.key === "Enter") {
                        alert("SUCCESS");
                      }
                    }}
                    style={{ width: "387px", marginBottom: 20 }}
                    value={data.type}
                    onChange={(e) => {
                      setData((prevState: any) => ({
                        ...prevState,
                        type: e.target.value,
                      }));
                    }}
                  />
                  <HcTextField
                    titleName="설명"
                    name="comment"
                    onKeyDown={(e: any) => {
                      if (e.key === "Enter") {
                        alert("SUCCESS");
                      }
                    }}
                    style={{ width: "1320px", marginBottom: 20 }}
                    value={data.comment}
                    onChange={(e) => {
                      setData((prevState: any) => ({
                        ...prevState,
                        comment: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div
                  className="first_block"
                  style={{
                    width: "387px",
                    height: "100px",
                    float: "left",
                    marginRight: "80px",
                  }}
                >
                  <HcSelect
                    titleName="직무 그룹"
                    style={{ width: "387px", marginBottom: 20 }}
                    required
                  >
                    <option value="" hidden>
                      {data.group}
                    </option>
                    <option value={" hc"}>{data.group}</option>
                    <option value={"hc"}>개발</option>
                  </HcSelect>
                  <HcSelect
                    titleName="급여 형태"
                    style={{ width: "387px", marginBottom: 20 }}
                    required
                  >
                    {" "}
                    <option value="" hidden>
                      {data.grade}
                    </option>
                    <option value={" hc"}>1등급</option>
                    <option value={"hc"}>2등급</option>
                  </HcSelect>
                </div>
                <div
                  className="first_block"
                  style={{
                    width: "284px",
                    height: "100px",
                    float: "left",
                    marginRight: "80px",
                  }}
                >
                  <RadioTitle>활성화 여부</RadioTitle>
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
              </TextFieldContainer>
            )}
            <SubHeading
              titleName="필요역량"
              required
              style={{ paddingTop: 335 }}
            />
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
                    <th style={{ maxWidth: 346, textAlign: "left" }}>
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody style={{ maxWidth: 346 }}>
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
                  <td>시장분석</td>
                  <td>A</td>
                  <td>5</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <TableContainer>
            <div className="row">
              <div className="th">
                직군
                <Required />
              </div>
              <div style={{ width: "483px" }}>{data.group}</div>
              <div className="th">직종</div>
              <div>마케팅</div>
            </div>
            <div className="row">
              <div className="th">직군</div>
              <div style={{ width: "483px" }}>{data.group}</div>
              <div className="th">직종</div>
              <div>마케팅</div>
            </div>
            <div className="row" style={{ height: "92px" }}>
              {" "}
              <div className="th">직무 목적</div>
              <div>
                마케팅은 ㉠고객이 누구이고 그들이 원하는 것이 무엇인지
                발견하는것 ㉡고객의 욕구를 만족하게 할 제품을 개발하는것 ㉢그
                제품을 고객이 소유하게 만드는 것 등에 목표를 둔다.{" "}
              </div>
            </div>
            <div className="row" style={{ height: "360px" }}>
              <div className="th">직무 역량</div>
              <div style={{ width: "1120px" }}>
                마케팅 비용 및 예산 집행 기업이 한 해 동안 사용하게 될 적정
                마케팅 비용을 산출한 후, 이를 각 활동에 적정 배분해 효율적으로
                사용한다. 또한 지출한 마케팅 비용 대비 효과를 측정하는(ROI) 등의
                업무를 진행한다. 시장조사 및 경쟁사 동향 파악 각 제품 및
                서비스에 대한 매출, 판매량, 이익률, 고객의 평가 등을 분석한다.
                이를 통해 자사 제품의 강점과 약점, 기회와 위기(SWOT)를 분석해
                소비자 타깃을 설정하고, 그에 맞는 제품 홍보 전략 등을 수립한다.
                또한 적정한 가격을 책정하거나 현 시장에 없는 새로운 제품 등을
                기획하기도 한다. 광고 집행 및 제품 홍보, 판촉활동 기업 브랜드,
                제품, 서비스 등을 고객에게 널리 알리기 위해 TV, 라디오, 신문 등
                다양한 매체를 이용해 홍보활동을 펼친다. 이때 광고 제작사에
                의뢰해 자사 이미지에 부합하는 광고를 제작하는 일을 진행하며, 이
                외에도 다양한 행사나 박람회 등 오프라인 행사를 진행해 판촉활동을
                실시한다.
              </div>
            </div>
            <div className="row" style={{ height: "382px" }}>
              <div className="th">직무 역량</div>
              <div style={{ width: "1120px" }}>table</div>
            </div>
          </TableContainer>
        )}
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400 }}>
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
    </div>
  );
};

export default ProfessionalDetail;
