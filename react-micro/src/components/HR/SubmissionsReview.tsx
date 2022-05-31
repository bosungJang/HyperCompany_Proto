import { ComponentWrapper, Container } from "common/HcCommonLayout";
import { HcTable, HcTableContainer, NullTbody } from "common/HcTableComponent";
import HcBottomBar from "common/HcBottomBar";
import HcButton from "common/HcButton";
import styled from "styled-components";
import React, { useState } from "react";
import { HcContentPopup } from "common/HcPopup";
import HcFileUploader from "common/HcFileUploader";
import { HcTitleTextField, Title, HcTextFieldLabel } from "common/HcTextField";
import { HRTree } from "common/HcTree";

const Name = styled(Title)`
  border-bottom: 1px solid #ececec;
  width: 400px;
  height: 60px;
  padding: 12px 10px 11px 10px;
  font-size: 24px;
  color: #000000;
  font-weight: 500;
`;
const HrData = [
  { id: 1, name: "최지수", position: "PM 본부 / Product실 / Product 매니저" },
  { id: 2, name: "박지원", position: "PM 본부 / Product실 / Product 매니저" },
  { id: 3, name: "김민수", position: "PM 본부 / Product실 / Product 매니저" },
  { id: 4, name: "이화령", position: "PM 본부 / Product실 / Product 매니저" },
  { id: 5, name: "박은별", position: "PM 본부 / Product실 / Product 매니저" },
  { id: 6, name: "홍길동", position: "PM 본부 / Product실 / Product 매니저" },
  { id: 7, name: "고민주", position: "PM 본부 / Product실 / Product 매니저" },
  { id: 8, name: "박은별", position: "PM 본부 / Product실 / Product 매니저" },
];
const category: string[] = [
  "사업자명",
  "사업자등록번호",
  "13.급여",
  "14.상여",
  "15.인정상여",
  "15-1.주식매수선택권행사이익",
  "15-2.우리사주조합인출금",
  "15-3.임원퇴직소득한도초과액",
  "15-4.직무발명보상금",
  "16.급여계",
  "16-2.출산,6세이하보육수당",
  "20.제출비과세계",
  "20-1.감면소득계",
  "미제출비과세",
  "건강보험료",
  "건강보험료(국세청간소화)",
  "건강보험료(국세청간소화)",
  "장기요양보험료",
];
export default function SubmissionsReview() {
  const [etc, setEtc] = useState(true);
  const [payStub, setPayStub] = useState(true);
  const [selected, setSelected] = useState(2);
  const [file, setFile]: any = useState([]);
  const now: any = HrData.find((data) => data.id === selected);
  /*BottomBar */
  const [barOpen, setbarOpen] = useState(true);
  /*BottomBar */
  /* pop up */
  const [viewAll, setViewAll] = useState(false);
  const [examined, setExamined] = useState(false);

  /* pop up */
  return (
    <>
      <ComponentWrapper style={{ display: "block", position: "relative" }}>
        <div style={{ position: "absolute", top: 44, right: 40 }}>
          <HcButton styles="line" size="medium">
            전체 원천징수 영수증 다운로드
          </HcButton>
          <HcButton styles="line" size="medium" style={{ marginLeft: "10px" }}>
            전체 소득공제신고서 다운로드
          </HcButton>
        </div>
        <HcTitleTextField titleName="제출 자료 검토" isBackIcon />
        <div style={{ display: "flex", marginTop: "37px" }}>
          <HRTree
            title="연말정산 자료 검토 대상자"
            state={selected}
            setState={setSelected}
            items={HrData}
          >
            <Title
              style={{ color: "000000", margin: "17px 0px 14px 8px" }}
              onClick={() => setViewAll(true)}
            >
              전체 검사 대상자 보기
            </Title>
          </HRTree>
          <div style={{ display: "block", marginLeft: 24 }}>
            <Name>{now.name}</Name>
            <Container
              title="국세청 자료 외 제출 자료"
              state={etc}
              setState={setEtc}
              maxHeight={497}
              defaultHeight={68}
              width={988}
            >
              <div style={{ left: 24, position: "absolute", width: 940 }}>
                <HcFileUploader file={file} setFile={setFile} />
              </div>
            </Container>
            <Container
              title="급여 명세"
              state={payStub}
              setState={setPayStub}
              maxHeight={1053}
              defaultHeight={68}
              width={988}
            >
              <HcTextFieldLabel
                titleName="납입금액 계"
                style={{ width: 287, marginBottom: 20 }}
              >
                73,600,000
              </HcTextFieldLabel>
              <HcTableContainer
                style={{
                  overflowX: "auto",
                  width: 908,
                  maxHeight: 860,
                  overflowY: "hidden",
                }}
              >
                <HcTable>
                  <thead>
                    <tr style={{ borderBottom: "1px solid #D9D9D9" }}>
                      <th
                        style={{
                          minWidth: "200px",
                          position: "sticky",
                          left: 0,
                          zIndex: 5,
                        }}
                      >
                        구분
                      </th>
                      <th
                        style={{
                          minWidth: "200px",
                          textAlign: "center",
                          position: "sticky",
                          left: 200,
                          zIndex: 5,
                        }}
                      >
                        합계
                      </th>
                      <th style={{ minWidth: "200px", textAlign: "center" }}>
                        급여내역
                      </th>
                      <th style={{ minWidth: "200px", textAlign: "center" }}>
                        연말
                      </th>
                      <th style={{ minWidth: "200px" }}>종전1</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.map((item) => (
                      <tr style={{ pointerEvents: "none" }}>
                        <td
                          style={{
                            backgroundColor: "#f4f4f4",
                            left: 0,
                            position: "sticky",
                            zIndex: 5,
                            fontWeight: 400,
                            fontSize: 13,
                            color: "#5d5d62",
                            borderRight: "1px solid #d9d9d9",
                            boxSizing: "border-box",
                          }}
                        >
                          {item}
                        </td>
                        <td
                          style={{
                            backgroundColor: "#F4F4F4",
                            left: 200,
                            position: "sticky",
                            fontWeight: 700,
                          }}
                        >
                          50,600,000
                        </td>
                        <td style={{ backgroundColor: "#F9F9F9" }}>-</td>
                        <td style={{ backgroundColor: "#fffff" }}>-</td>
                        <td style={{ backgroundColor: "#fffff" }}>-</td>
                      </tr>
                    ))}
                  </tbody>
                </HcTable>
              </HcTableContainer>
            </Container>
          </div>
        </div>
      </ComponentWrapper>
      <HcBottomBar open={barOpen} style={{ width: 1400, zIndex: 55 }}>
        <div>
          <HcButton
            styles="primary"
            onClick={() => {
              setExamined(true);
            }}
            style={{ marginRight: "5px" }}
            size="big"
          >
            검토 완료
          </HcButton>
          <HcButton
            onClick={() => {}}
            styles="line"
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
          <HcButton onClick={() => {}} styles="line" size="big">
            취소
          </HcButton>
        </div>
      </HcBottomBar>
      <HcContentPopup
        header="연말 정산 자료 검토 대상자"
        primaryBtn="확인"
        width={1354}
        height={727}
        open={viewAll}
        close={() => setViewAll(false)}
        style={{
          left: 40,
        }}
      >
        <HcTableContainer>
          <HcTable>
            <thead>
              <tr>
                <th style={{ width: 150 }}>이름</th>
                <th style={{ width: 150 }}>사원번호</th>
                <th style={{ width: 187 }}>법인회사</th>
                <th style={{ width: 187 }}>조직</th>
                <th style={{ width: 150 }}>직책</th>
                <th style={{ width: 150 }}>직위</th>
                <th style={{ width: 150 }}>입사일</th>
                <th style={{ width: 150 }}>연말정산 상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>홍길동</td>
                <td>2020001</td>
                <td>티맥스에이앤씨</td>
                <td>AB본부 / AB2-4</td>
                <td>팀장</td>
                <td>연구원</td>
                <td>2020.01.01</td>
                <td>제출완료</td>
              </tr>
            </tbody>
          </HcTable>
        </HcTableContainer>
      </HcContentPopup>
      <HcContentPopup
        header="연말 정산 자료 검토 완료"
        primaryBtn="검토 완료"
        secondBtn="취소"
        width={620}
        height={339}
        open={examined}
        close={() => setExamined(false)}
        style={{
          left: 40,
        }}
      >
        모든 증명 서류가 제출되었음을 확인하고 연말 정산 자료 검토를
        완료하시겠습니까?
        <br />
        최종 결과 확인 가능일이 되면 구성원이 검토 완료 결과를 열람할 수
        있습니다.
      </HcContentPopup>
    </>
  );
}
