import { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import { DatePickerOption } from "common/HcDatePicker";
import { HcTabsAdv } from "common/HcTabs";
import HcButton from "common/HcButton";
import { SubHeading, Title, HcTitleTextField } from "common/HcTextField";
import { HcTable, HcTableContainer } from "common/HcTableComponent";
import styled from "styled-components";
import { HcContentPopup } from "common/HcPopup";
import InfoIconTooltip from "common/HcTooltip";
import { DatePicker } from "antd";
import { useHistory } from "react-router-dom";
const Person = styled(SubHeading)`
  font-weight: 800;
  font-size: 22px;
  line-height: 32px;
  color: #2d2d31;
`;
const Line = styled.div`
  position: absolute;
  width: 1px;
  height: 60px;
  top: 50px;
  background: #d9d9d9;
`;
export default function TaxReturnManagement() {
  /*Tabs */
  const [Tabs, setTabs] = useState("1");
  /*Tabs */
  const [date, setDate] = useState(new Date());
  /* pop up */
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  /* pop up */
  const history = useHistory();
  return (
    <>
      {" "}
      <ComponentWrapper style={{ display: "block", position: "relative" }}>
        <HcTitleTextField titleName="연말 정산 관리" isBackIcon={false} />
        <div style={{ marginTop: "37px" }}>
          <HcTabsAdv
            items={[
              { to: "1", name: "연말 정산" },
              { to: "2", name: "중도 정산" },
            ]}
            size="normal"
            TabNumber={Tabs}
            SetTabNumber={setTabs}
          />
        </div>
        {
          {
            "1": (
              <>
                <div style={{ display: "flex", margin: "36px 0px 39px 0px" }}>
                  <HcButton
                    onClick={openModal}
                    styles="line"
                    size="medium"
                    style={{ position: "absolute", top: 160, left: 1204 }}
                  >
                    연말 정산 기간 설정
                  </HcButton>
                  <SubHeading
                    titleName={`${String(date.getFullYear())}년`}
                    style={{ marginRight: "950px" }}
                  />
                  <DatePickerOption
                    option="year"
                    date={date}
                    setDate={setDate}
                  />
                </div>

                <SubHeading
                  titleName="연말 정산 요약"
                  style={{
                    margin: "39px 0px 22px 0px",
                    fontSize: "18px",
                    color: "#2D2D31",
                    fontWeight: 400,
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    width: "1320px",
                    height: "160px",
                    padding: "47px 0px 0px 117px",
                    border: "1px solid #CECECE",
                    borderRadius: "4px",
                  }}
                >
                  <div style={{ display: "flex", marginBottom: "12px" }}>
                    <Title style={{ marginRight: "253px" }}>
                      근로소득 확정 전
                    </Title>
                    <Line style={{ left: 329 }} />
                    <Title style={{ marginRight: "288px" }}>입력 중</Title>
                    <Line style={{ left: 659 }} />
                    <Title
                      style={{
                        marginRight: "275px",
                        position: "relative",
                        width: 70,
                        height: 25,
                      }}
                    >
                      제출 완료
                      <InfoIconTooltip message="제출된 연말 정산을 검토해주세요" />
                    </Title>
                    <Line style={{ left: 1009 }} />
                    <Title>검토 완료</Title>
                  </div>

                  <Person
                    titleName="200명"
                    style={{ position: "absolute", top: 80, left: 117 }}
                  />

                  <Person
                    titleName="0명"
                    style={{ position: "absolute", top: 80, left: 467 }}
                  />
                  <Person
                    titleName="0명"
                    style={{ position: "absolute", top: 80, left: 797 }}
                  />
                  <Person
                    titleName="0명"
                    style={{ position: "absolute", top: 80, left: 1147 }}
                  />
                </div>
                <SubHeading
                  titleName="연말 정산 대상자"
                  style={{
                    margin: "53px 0px 22px 0px",
                    fontSize: "18px",
                    color: "#2D2D31",
                    fontWeight: 400,
                  }}
                />
                <HcButton
                  styles="secondary"
                  size="medium"
                  style={{ marginBottom: "20px" }}
                  onClick={() => history.push({ pathname: "/hr/EarnedIncome" })}
                >
                  근로 소득 확인
                </HcButton>
                <HcTableContainer>
                  <HcTable>
                    <thead>
                      <tr>
                        <th style={{ width: "46px" }}>-</th>
                        <th style={{ width: "150px" }}>이름</th>
                        <th style={{ width: "150px" }}>사원번호</th>
                        <th style={{ width: "187px" }}>법인회사</th>
                        <th style={{ width: "187px" }}>조직</th>
                        <th style={{ width: "150px" }}>직책</th>
                        <th style={{ width: "150px" }}>직위</th>
                        <th style={{ width: "150px" }}>입사일</th>
                        <th style={{ width: "150px" }}>연말정산 상태</th>
                      </tr>
                    </thead>
                  </HcTable>
                </HcTableContainer>
                <HcTableContainer>
                  <HcTable>
                    <thead>
                      <tr>
                        <th style={{ width: "46px" }}>-</th>
                        <th style={{ width: "133px" }}>이름</th>
                        <th style={{ width: "133px" }}>사원번호</th>
                        <th style={{ width: "170px" }}>법인회사</th>
                        <th style={{ width: "170px" }}>조직</th>
                        <th style={{ width: "133px" }}>직책</th>
                        <th style={{ width: "133px" }}>직위</th>
                        <th style={{ width: "133px" }}>입사일</th>
                        <th style={{ width: "133px" }}>연말정산 상태</th>
                        <th style={{ width: "136px", textAlign: "center" }}>
                          제출 검토
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>-</td>
                        <td>이름</td>
                        <td>사원번호</td>
                        <td>법인회사</td>
                        <td>조직</td>
                        <td>직책</td>
                        <td>직위</td>
                        <td>입사일</td>
                        <td>연말정산 상태</td>
                        <td style={{ textAlign: "center" }}>
                          <HcButton
                            size="small"
                            styles="teriary"
                            onClick={() =>
                              history.push({
                                pathname: "/hr/SubmissionsReview",
                              })
                            }
                          >
                            제출 검토
                          </HcButton>
                        </td>
                      </tr>
                    </tbody>
                  </HcTable>
                </HcTableContainer>
              </>
            ),
            "2": <></>,
          }[Tabs]
        }
      </ComponentWrapper>
      <HcContentPopup
        header="연말정산 기간 설정"
        primaryBtn="적용"
        secondBtn="취소"
        width={460}
        height={385}
        open={modalOpen}
        close={closeModal}
        style={{ left: 40, overflowX: "visible" }}
      >
        <div style={{ position: "absolute", top: 0 }}>
          {" "}
          <div style={{ display: "flex", width: "200px" }}>
            <Title style={{ margin: 0 }} required>
              구성원 연말 정산 기간
            </Title>
            <div>
              <InfoIconTooltip message="구성원이 연말정산 내역을 입력할 기간을 입력합니다." />
            </div>
          </div>
          <div>
            <DatePicker
              style={{ width: "360px", position: "absolute", top: 30 }}
              placeholder=""
            />
          </div>
        </div>
        <div style={{ position: "absolute", top: 100 }}>
          <div style={{ display: "flex", width: "200px" }}>
            <Title style={{ margin: 0 }} required>
              최종 결과 확인 기간
            </Title>
            <div>
              <InfoIconTooltip message="검토 완료된 구성원이 연말 정산 결과를 확인할 수 있는 기간을 입력합니다." />
            </div>
          </div>
          <div>
            <DatePicker
              style={{ width: "360px", position: "absolute", top: 30 }}
              placeholder=""
            />
          </div>
        </div>
      </HcContentPopup>
    </>
  );
}
