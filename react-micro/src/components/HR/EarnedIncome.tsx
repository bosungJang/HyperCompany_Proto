import { ComponentWrapper, Container } from "common/HcCommonLayout";
import { HcTitleTextField, SubHeading } from "common/HcTextField";
import { HcTable, HcTableContainer, NullTbody } from "common/HcTableComponent";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import styled from "styled-components";
import React, { useState } from "react";
import { HcContentPopup } from "common/HcPopup";

const FirstTh = styled.th`
  box-shadow: -1px 0 0 0 #d9d9d9 inset;
`;
const StyledTr = styled.tr`
  box-sizing: border-box;
  td {
    text-align: right;
    position: relative;
  }
`;

export const Warning = (props: { message?: any }) => {
  const [styles, setStyle] = useState({ display: "none" });
  const MessageBox = styled.div`
    background: #2d2d31;
    border-radius: 3px;
    height: max-content;
    width: max-content;
    color: #ffffff;
    position: absolute;
    display: block;
    white-space: pre-line;
    text-align: left;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    clear: both;
    z-index: 10;
    bottom: 47px;
    left: 85px;
    padding: 10px 14px 10px 14px;
  `;
  return (
    <>
      <MessageBox style={styles}>{props.message}</MessageBox>
      <svg
        style={Object.assign(
          {
            zIndex: 10,
            position: "absolute",
            bottom: 38,
            right: 8,
          } as React.CSSProperties,
          styles
        )}
        width="17"
        height="12"
        viewBox="0 0 17 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.20581 12L0.205811 0L16.2058 1.36279e-06L8.20581 12Z"
          fill="#2D2D31"
        />
      </svg>

      <svg
        onMouseEnter={(e) => {
          setStyle({ display: "inline-block" });
          e.preventDefault();
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
          e.preventDefault();
        }}
        style={{
          width: 22,
          height: 22,
          right: 8,
          position: "absolute",
          top: 13,
        }}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.8334 10.0001C16.8334 13.774 13.774 16.8334 10 16.8334C6.22607 16.8334 3.16669 13.774 3.16669 10.0001C3.16669 6.22614 6.22607 3.16675 10 3.16675C13.774 3.16675 16.8334 6.22614 16.8334 10.0001ZM18.3334 10.0001C18.3334 14.6025 14.6024 18.3334 10 18.3334C5.39765 18.3334 1.66669 14.6025 1.66669 10.0001C1.66669 5.39771 5.39765 1.66675 10 1.66675C14.6024 1.66675 18.3334 5.39771 18.3334 10.0001ZM10.8854 10.835C10.8562 11.3025 10.4685 11.6667 10.0001 11.6667C9.53164 11.6667 9.14396 11.3025 9.11474 10.835L8.81645 6.06246C8.78047 5.48676 9.23768 5.00008 9.81451 5.00008H10.1856C10.7624 5.00008 11.2196 5.48676 11.1837 6.06246L10.8854 10.835ZM11.25 13.7501C11.25 14.4404 10.6904 15.0001 10 15.0001C9.30966 15.0001 8.75002 14.4404 8.75002 13.7501C8.75002 13.0597 9.30966 12.5001 10 12.5001C10.6904 12.5001 11.25 13.0597 11.25 13.7501Z"
          fill="#F06666"
        />
      </svg>
    </>
  );
};
export function Table(props?: { empthy?: boolean }) {
  const [isEmpty, setEmpty] = useState(props?.empthy ? props.empthy : false);

  return (
    <HcTableContainer
      style={Object.assign(
        {
          width: "1240px",
          maxHeight: "556px",
          boxSizing: "borderBox",
          marginTop: 40,
        },
        isEmpty ? { overflow: "hidden" } : ""
      )}
    >
      <HcTable>
        <thead>
          <tr style={{ borderBottom: "1px solid #D9D9D9" }}>
            <FirstTh
              colSpan={3}
              style={{
                minWidth: 246,
                zIndex: 5,
                position: "sticky",
                left: 0,
              }}
            />
            <FirstTh style={{ minWidth: "994px" }} colSpan={8}>
              근로소득지급명세서
            </FirstTh>
            <FirstTh style={{ minWidth: "500px" }} colSpan={2}>
              비과세
            </FirstTh>
            <FirstTh style={{ minWidth: "992px" }} colSpan={8}>
              기납부세액
            </FirstTh>
            <th style={{ minWidth: "1116px" }} colSpan={9}>
              납부특레세액
            </th>
          </tr>
          <tr style={{ backgroundColor: "#F4F4F4 !important" }}>
            <FirstTh
              colSpan={3}
              style={{
                backgroundColor: "#F4F4F4",
                borderRadius: 0,
                minWidth: 246,
                left: 0,
                zIndex: 5,
                position: "sticky",
              }}
            />
            <th
              style={{
                minWidth: "994px",
                backgroundColor: "#F4F4F4",
              }}
              colSpan={8}
            >
              총 급여
            </th>
            <th
              style={{
                minWidth: "250px",
                backgroundColor: "#F4F4F4",
              }}
            >
              급여명세서 작업대상 비과세 소득
            </th>
            <th
              style={{
                minWidth: "250px",
                backgroundColor: "#F4F4F4",
              }}
            >
              급여명세서 작업대상 비과세 소득
            </th>
            <th
              style={{
                minWidth: "496px",
                backgroundColor: "#F4F4F4",
              }}
              colSpan={4}
            >
              차감 원천 징수액
            </th>
            <th
              style={{
                minWidth: "496px",
                backgroundColor: "#F4F4F4",
              }}
              colSpan={4}
            >
              징수의무자 자체 증빙 지출액 소득공제
            </th>
            <th
              style={{
                minWidth: "372px",
                backgroundColor: "#F4F4F4",
              }}
              colSpan={3}
            >
              소득세
            </th>
            <th
              style={{
                minWidth: "330px",
                backgroundColor: "#F4F4F4",
              }}
              colSpan={3}
            >
              지방소득세
            </th>
            <th
              style={{
                minWidth: "414px",
                backgroundColor: "#F4F4F4",
              }}
              colSpan={4}
            >
              농어촌특별세
            </th>
          </tr>
          <tr>
            <th
              style={{
                backgroundColor: "#F4F4F4",
                minWidth: 46,
                maxWidth: 46,
                width: 46,
                left: 0,
                zIndex: 5,
                position: "sticky",
              }}
            >
              -
            </th>
            <th
              style={{
                backgroundColor: "#F4F4F4",
                minWidth: 100,
                maxWidth: 100,
                width: 100,
                left: 46,
                zIndex: 5,
                position: "sticky",
              }}
            >
              이름
            </th>
            <th
              style={{
                backgroundColor: "#F4F4F4",
                minWidth: 100,
                maxWidth: 100,
                width: 100,
                left: 146,
                zIndex: 5,
                position: "sticky",
                boxShadow: "-1px 0 0 0 #d9d9d9 inset",
              }}
            >
              사원번호{" "}
            </th>

            <th
              style={{
                width: 124,
                backgroundColor: " #f9f9f9",
                textAlign: "center",
              }}
            >
              급여
            </th>
            <th
              style={{
                width: 124,
                backgroundColor: " #f9f9f9",
                textAlign: "center",
              }}
            >
              상여
            </th>
            <th
              style={{
                width: 124,
                backgroundColor: " #f9f9f9",
                textAlign: "center",
              }}
            >
              인정상여
            </th>
            <th
              style={{
                width: 124,
                backgroundColor: " #f9f9f9",
                textAlign: "center",
              }}
            >
              주직매수선택
            </th>
            <th
              style={{
                width: 124,
                backgroundColor: " #f9f9f9",
                textAlign: "center",
              }}
            >
              우리사주조합
            </th>
            <th
              style={{
                width: 124,
                backgroundColor: " #f9f9f9",
                textAlign: "center",
              }}
            >
              임원퇴직소득
            </th>
            <th
              style={{
                width: 124,
                backgroundColor: " #f9f9f9",
                textAlign: "center",
              }}
            >
              직무발명보상
            </th>
            <th
              style={{
                width: 126,
                backgroundColor: " #f9f9f9",
                boxShadow: "-1px 0 0 0 #d9d9d9 inset",
                textAlign: "center",
              }}
            >
              합계
            </th>
            <th
              style={{
                width: 250,
                backgroundColor: " #f9f9f9",
                textAlign: "center",
              }}
            >
              급여
            </th>
            <th
              style={{
                width: 250,
                backgroundColor: " #f9f9f9",
                boxShadow: "-1px 0 0 0 #d9d9d9 inset",
                textAlign: "center",
              }}
            >
              합계
            </th>
            <th style={{ width: 124, backgroundColor: " #f9f9f9" }}>소득세</th>
            <th style={{ width: 124, backgroundColor: " #f9f9f9" }}>
              지방소득세
            </th>
            <th style={{ width: 124, backgroundColor: " #f9f9f9" }}>
              농어촌특별세
            </th>
            <th style={{ width: 124, backgroundColor: " #f9f9f9" }}>
              외국납부세액
            </th>
            <th style={{ width: 124, backgroundColor: " #f9f9f9" }}>
              국민연금
            </th>
            <th style={{ width: 124, backgroundColor: " #f9f9f9" }}>
              건강보험
            </th>
            <th style={{ width: 124, backgroundColor: " #f9f9f9" }}>
              고용보험
            </th>
            <th
              style={{
                width: 124,
                backgroundColor: " #f9f9f9",
                boxShadow: "-1px 0 0 0 #d9d9d9 inset",
              }}
            >
              기부금
            </th>
            <th colSpan={9} style={{ backgroundColor: " #f9f9f9" }}>
              0
            </th>
          </tr>
        </thead>
        {isEmpty === true ? (
          <tbody style={{ width: 1240 }}>
            <NullTbody colspan={30} style={{ paddingLeft: 560, height: 465 }} />
          </tbody>
        ) : (
          <tbody>
            <StyledTr>
              <td
                style={{
                  textAlign: "left",
                  left: 0,
                  zIndex: 5,
                  position: "sticky",
                }}
              >
                -
              </td>
              <td
                style={{
                  textAlign: "left",
                  left: 46,
                  zIndex: 5,
                  position: "sticky",
                }}
              >
                홍길동
              </td>
              <td
                style={{
                  textAlign: "left",
                  left: 146,
                  zIndex: 5,
                  position: "sticky",
                  boxShadow: "-1px 0 0 0 #d9d9d9 inset",
                }}
              >
                2020001
              </td>
              <td
                style={{
                  boxShadow: " 0 0 0 1px #F06666 inset",
                  paddingRight: "31px",
                  overflow: "visible",
                }}
              >
                0
                <Warning
                  message={`총 급여가 산출되지 않았습니다.\n 명세를 확인해 주세요.`}
                />
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td style={{ fontWeight: 700 }}>4,000,000,000</td>
              {/*합계 */}
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </StyledTr>
          </tbody>
        )}
      </HcTable>
    </HcTableContainer>
  );
}

export default function EarnedIncome() {
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */
  /* pop up */
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  /* pop up */
  return (
    <>
      <ComponentWrapper style={{ display: "block" }}>
        <HcTitleTextField titleName="근로 소득 확인" isBackIcon />
        <SubHeading
          titleName="2021년"
          style={{ marginTop: "53px", marginBottom: "26px" }}
        />
        <Container
          title="이상 근로 소득"
          maxHeight={140}
          defaultHeight={68}
          width={1320}
        >
          {/* <Table /> */}
          <div
            style={{
              borderTop: "1px solid #cecece",
              height: 46,
              paddingTop: 20,
              width: 1272,
              color: "#838181",
              margin: "-5px 0px 0px -10px",
              fontFamily: "Noto Sans KR",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            이상 근로 소득이 없습니다.
          </div>
        </Container>
        <Container
          title="이상 근로 소득"
          maxHeight={698}
          defaultHeight={68}
          width={1320}
        >
          <Table />
        </Container>
        <Container
          title="미확정 근로 소득"
          maxHeight={698}
          defaultHeight={68}
          width={1320}
        >
          <Table empthy />
        </Container>
        <Container
          title="확정 근로 소득"
          maxHeight={698}
          defaultHeight={68}
          width={1320}
        >
          <Table />
        </Container>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400, zIndex: 55 }}>
        <div>
          <HcButton
            onClick={openModal}
            styles="primary"
            style={{ marginRight: "5px" }}
            size="big"
          >
            근로 소득 확정
          </HcButton>
          <HcButton
            onClick={() => {}}
            styles="line"
            style={{ marginRight: "5px" }}
            size="big"
          >
            취소
          </HcButton>
        </div>
      </HcBottomBar>
      <HcContentPopup
        header="근로 소득 확정"
        primaryBtn="근로 소득 확정"
        secondBtn="취소"
        width={602}
        height={339}
        open={modalOpen}
        close={closeModal}
        style={{
          left: 40,
          color: "#5D5D62",
          fontSize: "16px",
        }}
      >
        근로 소득을 확정하시겠습니까?
        <br />
        근로 소득이 확정된 구성원은 연말정산 기간이 되면 <br />
        연말정산을 진행할 수 있습니다.
      </HcContentPopup>
    </>
  );
}
