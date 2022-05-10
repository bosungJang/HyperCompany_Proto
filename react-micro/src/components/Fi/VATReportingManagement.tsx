import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import styled from "styled-components";
import HcTextField, {
  HcSearchTextField,
  HcTitleTextField,
} from "common/HcTextField";
import { ReactComponent as AddIcon } from "resources/images/Add_Icon_Blue.svg";

const ContentWrapper = styled.div<{ keys: boolean; add: boolean }>`
  width: 312px;
  height: 180px;
  border: 1px solid #cecece;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 24px;
  padding: 16px;
  margin-left: ${(props) => (props.keys === false ? `24px` : `0px`)};
  transition: all 0.5s ease;
  overflow: auto;
  ${(props) =>
    props.add === true
      ? `&:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transition: all 0.5s ease;
  }`
      : ``}
`;

const VATReportingManagement = () => {
  const [data, setData] = React.useState([
    { title: "매출처별 세금 계산서 합계표" },
    { title: "매출처별 세금 계산서 합계표" },
    { title: "매출처별 세금 계산서 합계표" },
    { title: "매출처별 세금 계산서 합계표" },
    { title: "매출처별 세금 계산서 합계표" },
  ]);

  const onClickNew = () => {
    setData((prev) => [...prev, { title: "새로운 거" }]);
  };
  return (
    <>
      <div style={{ width: "100%" }}>
        <ComponentWrapper style={{ width: "inheirt", display: "block" }}>
          <div style={{ display: "block", width: "100%" }}>
            <HcTitleTextField
              titleName="부가세 신고문서 서식 관리"
              isBackIcon={false}
              style={{ display: "inline-block" }}
            />
            <div style={{ marginTop: "47px", width: "100%" }}>
              {data.map((item, key) => (
                <>
                  {key == 0 ? (
                    <ContentWrapper
                      keys={key % 4 === 0 ? true : false}
                      onClick={onClickNew}
                      add={true}
                      style={{
                        overflow: "hidden",
                        textAlign: "center",
                      }}
                    >
                      <div>
                        <AddIcon />
                        <div
                          style={{
                            marginTop: "14px",
                            color: "#5D5D62",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          새 양식 생성
                        </div>
                      </div>
                    </ContentWrapper>
                  ) : (
                    <></>
                  )}
                  <ContentWrapper
                    keys={(key + 1) % 4 === 0 ? true : false}
                    add={false}
                  >
                    <div>
                      <div
                        style={{
                          background: "#F4F4F4",
                          borderRadius: "2px",
                          height: "35px",
                        }}
                      >
                        {item.title}
                      </div>
                    </div>
                  </ContentWrapper>
                </>
              ))}
            </div>
          </div>
        </ComponentWrapper>
      </div>
    </>
  );
};

export default VATReportingManagement;
