import React from "react";
import styled, { keyframes, Keyframes } from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import {
  ComponentWrapper,
  MultiLayout,
  VariableMultiLayout,
} from "common/HcCommonLayout";
import HcTree from "common/HcTree";
import HcTextField, {
  HcSelect,
  HcTagInput,
  HcSearchTextField,
  HcTagNoInput,
  HcTitleTextField,
  HcTextFieldLabel,
} from "common/HcTextField";

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
  height: 60px;
  width: 284px;
  padding: 12px;

  color: #000000;
  border-bottom: 1px solid #e0e0e0;
`;

const CreateTreeContAreaTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-transform: uppercase;
  height: 60px;
  width: 284px;
  padding: 12px;

  color: #000000;
  border: 1px solid #e0e0e0;
`;

const TreeTagAreaTitle = styled.label`
  font-size: 13px;
  display: block;
  margin-bottom: 10px;
`;

const items = [
  {
    id: "1000000",
    title: "[1000000] 자산",
    items: [
      {
        id: "110000",
        title: "[110000] 유동 자산",
        items: [
          {
            id: "110001",
            title: "[110001] 현금",
          },
          {
            id: "110002",
            title: "[110002] 현금성 자산",
          },
        ],
      },
      {
        id: "120000",
        title: "[120000] 비유동자산",
        items: [
          {
            id: "120001",
            title: "[120001] 장기금융상품",
          },
          {
            id: "120002",
            title: "[120002] 장기 매출 채권 및 기타 유동채권",
          },
        ],
      },
    ],
  },
  {
    id: "200000",
    title: "[200000] 부채",
    items: [
      { id: "2-1", title: "child 2-1" },
      {
        id: "2-2",
        title: "child 2-2",
      },
    ],
  },
  {
    id: "300000",
    title: "[300000] 자본",
  },
  {
    id: "400000",
    title: "[400000] 매출",
  },
  {
    id: "500000",
    title: "[500000] 매출 원가",
  },
];

const FiAccountManagement = ({ match }: RouteComponentProps<MatchParams>) => {
  /*TagInput */
  const [tags, setTags] = React.useState([
    "가수금 현금 입금",
    "물품 매각 관련 현금 입금",
    "용역제공 관련 현금 입금",
  ]);
  /*TagInput */

  /*Create */
  const [isCreate, setIsCreates] = React.useState(false);
  /*Create */

  function CreateStatus() {
    return (
      <>
        <CreateTreeContAreaTitle>[110001]현금</CreateTreeContAreaTitle>
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
              titleName="계정 코드"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              required
              style={{ width: "284px", marginBottom: 20 }}
            >
              110001
            </HcTextFieldLabel>
            <HcSelect titleName="차/대변계정설정" required>
              <option value="1">차변 계정</option>
              <option value="2">대변 계정</option>
              <option value="3">차대변 공통 계정</option>
            </HcSelect>
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
              titleName="계정과목명 *"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
              required
            />
            <HcTextFieldLabel
              titleName="권한계정"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px" }}
            >
              [100000]자산
            </HcTextFieldLabel>
          </div>
          <div
            className="first_block"
            style={{ width: "284px", height: "100px", float: "left" }}
          >
            <HcSelect
              titleName="계정 유형"
              required
              style={{ width: "284px", marginBottom: 20 }}
            >
              <option value="" hidden>
                계정 유형
              </option>
              <option value="1">전체</option>
              <option value="2">일반 계정</option>
              <option value="3">차감 계정</option>
            </HcSelect>
            <HcTextFieldLabel
              titleName="사용 여부"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px" }}
            >
              사용
            </HcTextFieldLabel>
          </div>
        </div>
        <div style={{ display: "block" }}>
          <TreeTagAreaTitle>적요</TreeTagAreaTitle>
          <HcTagNoInput
            tags={tags}
            setTags={setTags}
            style={{
              background: "#FFFFFF",
              width: "936px",
              minHeight: "168px",
              border: "1px solid #CECECE",
            }}
            delete={isCreate}
          />
        </div>
      </>
    );
  }

  function NormalStatus() {
    return (
      <>
        <TreeContAreaTitle>[110001]현금</TreeContAreaTitle>
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
              titleName="계정 코드"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
            >
              110001
            </HcTextFieldLabel>
            <HcTextFieldLabel
              titleName="차/대변계정설정"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px" }}
            >
              차변 계정
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
            <HcTextFieldLabel
              titleName="계정과목명"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
            >
              현금
            </HcTextFieldLabel>
            <HcTextFieldLabel
              titleName="권한계정"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px" }}
            >
              [100000]자산
            </HcTextFieldLabel>
          </div>
          <div
            className="first_block"
            style={{ width: "284px", height: "100px", float: "left" }}
          >
            <HcTextFieldLabel
              titleName="계정유형"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px", marginBottom: 20 }}
            >
              일반 계정
            </HcTextFieldLabel>
            <HcTextFieldLabel
              titleName="사용 여부"
              name="name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  alert("SUCCESS");
                }
              }}
              style={{ width: "284px" }}
            >
              사용
            </HcTextFieldLabel>
          </div>
        </div>
        <div style={{ display: "block" }}>
          <TreeTagAreaTitle>적요</TreeTagAreaTitle>
          <HcTagNoInput
            tags={tags}
            setTags={setTags}
            style={{
              background: "#FFFFFF",
              width: "936px",
              minHeight: "168px",
              border: "1px solid #CECECE",
            }}
            delete={false}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <ComponentWrapper>
        <div style={{ display: "block" }}>
          <HcTitleTextField titleName="계정과목관리" isBackIcon={false} />
          <div
            className="body_area"
            style={{ display: "flex", marginTop: "39px" }}
          >
            <HcTree
              items={items}
              title="계정과목"
              search={true}
              style={{ minHeight: "832px" }}
              isCreate={isCreate}
              setIsCreates={setIsCreates}
            />
            <div>
              <TreeContArea>
                {isCreate === true ? <CreateStatus /> : <NormalStatus />}
              </TreeContArea>
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </>
  );
};

export default FiAccountManagement;
