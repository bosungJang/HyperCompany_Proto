import { RouteComponentProps, useHistory } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import HcCheckBox from "common/HcCheckBox";
import { HcTabsAdv } from "common/HcTabs";
import { ComponentWrapper, MultiLayout } from "common/HcCommonLayout";
import { HcTitleTextField, SubHeading } from "common/HcTextField";
import HcButton from "common/HcButton";
import HcSlider from "./HcSlider";
import {
  TableActionBtn,
  HcTable,
  HcTableContainer,
  NullTbody,
  TableSetting,
} from "common/HcTableComponent";
interface MatchParams {
  id: string;
}
let num = 1;
function getId() {
  return num++;
}
const Candidate = Array(15)
  .fill(undefined)
  .map(() => ({
    name: "최민식",
    id: getId(),
    organization: "EC2-4팀",
    responsibility: "팀원",
    position: "연구원",
    ability: ["리더쉽", "인재 분석", "커뮤니케이션 능력", "데이터 분석력"],
  }));

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg<{ disabled?: boolean }>`
  fill: none;
  stroke: ${(props) => (props.disabled ? "#C4C4C4" : "#257cff")};
  stroke-width: 3px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const ContentContainer = styled.div`
  background: #ffffff;
  height: 401px;
  width: 1320px;
  border: 1px solid #cecece;
  border-radius: 5px;
  padding: 20px 24px 30px 24px;
`;

const SubContent = styled.div`
  width: 400px;
  height: 21px;
  margin-top: 18px;
  margin-bottom: 40px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;

  color: #717171;
`;

const StyledCheckbox = styled.div<{ checked: boolean; disabled?: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.disabled ? "#EDEDED" : "#ffffff")};
  border-radius: 2px;
  border: ${(props) =>
    props.disabled
      ? "1.5px solid #CECECE"
      : props.checked
      ? "1.5px solid #257CFF"
      : " 1.5px solid #a7a7a7;"};
  transition: all 150ms;

  ${HiddenCheckbox}:hover + & {
    ${(props) => (props.disabled ? null : "box-shadow: 0 0 0 1px #257cff")};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

interface IProps {
  className?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelWrap?: boolean;
  disabled?: boolean;
}

const Checkbox: React.FC<IProps> = ({
  className,
  checked,
  labelWrap = true,
  ...props
}) => {
  const content = (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked} disabled={props.disabled}>
        <Icon viewBox="0 5 24 24" disabled={props.disabled}>
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );

  return labelWrap ? <label>{content}</label> : <>{content}</>;
};

const Order = ({ match }: RouteComponentProps<MatchParams>) => {
  const [Tabs, setTabs] = React.useState("1");
  let num = 100000;
  const getId = () => {
    num = num + 1;
    return num;
  };
  const [checkedItem, setCheckedItem]: any = React.useState([]);
  const history = useHistory();

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

  const data = Array(107)
    .fill(undefined)
    .map(() => ({
      id: getId(),
      content: "Tmax Enterprise 인사 이동",
      hc: Math.floor(Math.random() * 4) + 1,
      start: "2022.1.10",
      end: "2022.1.29",
      action: <TableActionBtn />,
    }));

  return (
    <ComponentWrapper>
      <div
        style={{
          width: 1320,
        }}
      >
        <HcTitleTextField titleName="발령 관리" isBackIcon={false} />

        <div style={{ marginTop: 39 }}>
          <HcTabsAdv
            items={[
              { to: "1", name: "발령 현황" },
              { to: "2", name: "발령 분석" },
            ]}
            size="normal"
            TabNumber={Tabs}
            SetTabNumber={setTabs}
          />
        </div>
        <div
          className="Order status"
          style={{ display: Tabs == "1" ? "" : "none", marginTop: "23px" }}
        >
          <div style={{ display: "flex" }}>
            <HcButton
              style={{
                marginRight: 1100,
                display: checkedItem.length == 0 ? "inline" : "none",
              }}
              onClick={() => {
                history.push({
                  pathname: "/hr/pas/OrderCreate",
                });
              }}
              size="medium"
              styles="secondary"
            >
              +생성
            </HcButton>
            <HcButton
              styles="line"
              size="medium"
              style={{
                marginRight: 10,
                display: checkedItem.length == 1 ? "inline" : "none",
              }}
              onClick={() => {
                const sendData: any = data.find((e) => e.id == checkedItem[0]);
                console.log(sendData);
                history.push({
                  pathname: "/hr/pas/OrderDetail",
                  state: {
                    id: sendData.id,
                    content: sendData.content,
                    hc: sendData.hc,
                    start: sendData.start,
                    end: sendData.end,
                    edit: true,
                  },
                });
              }}
            >
              수정
            </HcButton>
            <HcButton
              styles="line"
              size="medium"
              style={{
                display: checkedItem.length > 0 ? "inline" : "none",
                marginRight: checkedItem.length === 1 ? 1027 : 1106,
              }}
            >
              삭제
            </HcButton>
            <TableSetting style={{}} />
          </div>

          <HcTableContainer style={{ width: "1320px", marginTop: "20px" }}>
            <HcTable>
              <thead>
                <tr style={{ textAlign: "left" }}>
                  {/* {columns.map((column: any) => (
                    <th key={column}>{column}</th>
                  ))} */}
                  <th style={{ width: 46, marginLeft: 4 }}>
                    <div style={{ paddingTop: 7 }}>
                      <HcCheckBox
                        checked={checkedItem.length > 0 ? true : false}
                        onChange={(e) => checkAllHandler(e.target.checked)}
                      />
                    </div>
                  </th>
                  <th style={{ width: 178 }}>발령 번호</th>
                  <th style={{ width: 336 }}>발령 내용</th>
                  <th style={{ width: 160 }}>발령 구분</th>
                  <th style={{ width: 160 }}>발령 인원</th>
                  <th style={{ width: 160 }}>발령 일시</th>
                  <th style={{ width: 160 }}>시행 일시</th>
                  <th style={{ width: 120 }}>액션 버튼</th>
                </tr>
              </thead>
              <tbody>
                {data.map(({ id, content, hc, start, end, action }) => (
                  <tr
                    style={{
                      textAlign: "left",
                      backgroundColor: checkedItem.includes(id)
                        ? "#DFECFF"
                        : "",
                    }}
                    onClick={() => {
                      history.push({
                        pathname: "/hr/pas/OrderDetail",
                        state: {
                          id: id,
                          content: content,
                          hc: hc,
                          start: start,
                          end: end,
                          edit: false,
                        },
                      });
                    }}
                  >
                    <td
                      style={{ marginLeft: 4 }}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <Checkbox
                        checked={checkedItem.includes(id)}
                        onChange={(e) => {
                          checkHandler(e.target.checked, id);
                        }}
                      />
                    </td>
                    <td>{id}</td>
                    <td>{content}</td>
                    <td>입사</td>
                    <td>{hc}</td>
                    <td>{start}</td>
                    <td>{end}</td>
                    <td>{action}</td>
                  </tr>
                ))}
              </tbody>
            </HcTable>
          </HcTableContainer>
        </div>
        {/*발령 현황 끝*/}
        <div style={{ display: Tabs == "2" ? "" : "none" }}>
          {/*발령 분석*/}
          <ContentContainer style={{ height: 401, marginTop: 24 }}>
            <SubHeading titleName="직책 후보자 추천" />
            <SubContent>
              직책별 후보자를 업무 성취도가 높은 구성원으로 추천합니다.
            </SubContent>
            <div style={{ marginTop: 40 }}>
              <HcSlider size="medium" data={Candidate} />
            </div>
          </ContentContainer>
          <ContentContainer style={{ height: 788, marginTop: 23 }}>
            <SubHeading titleName="적합 부서 추천" />
            <SubContent>
              구성원의 역량을 기반으로 적합한 부서를 추천합니다.
            </SubContent>
            <div style={{ marginTop: 40 }}>
              <HcSlider size="large" data={Candidate} />
            </div>
          </ContentContainer>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Order;
