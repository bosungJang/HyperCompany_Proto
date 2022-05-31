import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import styled from "styled-components";
import HcTextField, {
  HcSearchTextField,
  HcTitleTextField,
} from "common/HcTextField";
import { ReactComponent as CertificationIcon } from "resources/images/Certification_Icon.svg";
import HcButton from "common/HcButton";
import { ReactComponent as TrashIcon } from "resources/images/Trash_Icon.svg";

const CertificationWrapper = styled.div`
  border: 1px solid #cecece;
  border-radius: 4px;
  width: 648px;
  height: 380px;
  display: inline-flex;
  margin-bottom: 24px;
  transition: all 0.5s ease;
  overflow: hidden;
  padding-top: 19px;
  flex-direction: column;
`;

const RegistrationTag = styled.div<{ registerYn: boolean; expiredYn: boolean }>`
  border-radius: 24px;
  padding: 4px 12px 3px 12px;

  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 13px;
  display: inline-block;
  vertical-align: top;
  float: right;

  ${(props) =>
    props.expiredYn == false
      ? props.registerYn === true
        ? `color: #ffffff;   background: #4dad79;`
        : `border: 1px solid #2D2D31; color: #2D2D31;`
      : `background: #CECECE;color: #FFFFFF;`};
`;

const ContWrapper = styled.div`
  display: flow-root;
  margin-bottom: 20px;
  &: last-child {
    margin-bottom: 0px;
  }
`;

const ContTitle = styled.div`
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  display: inline-block;
  float: left;
`;

const ContInfo = styled.div`
  font-family: Noto Sans KR;
  font-weight: 400;
  font-size: 16px;
  color: #2d2d31;
  display: inline-block;
  float: right;
`;

const CertificateRegistration = () => {
  const [taxCertificationInfo, setTaxCertificationInfo] = React.useState({
    registerYn: false,
    expiredYn: false,
  });
  const [homeTaxCertificationInfo, setHomeTaxCertificationInfo] =
    React.useState({ registerYn: false, expiredYn: false });

  const BodyArea = (props: any) => {
    return (
      <>
        {props.data.registerYn == true ? (
          <>
            <div
              style={{
                padding: "24px",
                width: "568px",
                height: "204px",
                border: "1px solid #CECECE",
                borderRadius: "4px",
                position: "absolute",
                top: "calc(50% - 30px)",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div>
                <ContWrapper>
                  <ContTitle>인증서명</ContTitle>
                  <ContInfo>CN - 테스트 - 77_000...</ContInfo>
                </ContWrapper>
                <ContWrapper>
                  <ContTitle>구분</ContTitle>
                  <ContInfo>법인</ContInfo>
                </ContWrapper>
                <ContWrapper>
                  <ContTitle>등록일자 / 만료일자</ContTitle>
                  <ContInfo>2022.01.01 / 2024.01.01</ContInfo>
                </ContWrapper>
                <ContWrapper>
                  <ContTitle>인증 기관</ContTitle>
                  <ContInfo>TradeSign</ContInfo>
                </ContWrapper>
              </div>
            </div>
            <div
              className="footer_area"
              style={{
                background: "#F9F9F9",
                height: "40px",
                position: "absolute",
                bottom: "0",
                width: "100%",
                padding: "8px",
              }}
            >
              <TrashIcon
                onClick={() => {
                  props.setData({ ...props.data, registerYn: false });
                }}
                style={{ float: "right", cursor: "pointer" }}
              />
            </div>
          </>
        ) : (
          <HcButton
            onClick={() => {
              props.setData({ ...props.data, registerYn: true });
            }}
            styles="line"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            size="big"
          >
            + 인증서 등록
          </HcButton>
        )}
      </>
    );
  };
  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper style={{ width: "inheirt", display: "block" }}>
          <div style={{ display: "block", width: "inherit" }}>
            <HcTitleTextField
              titleName="인증서 등록"
              isBackIcon={false}
              style={{ display: "inline-block" }}
            />
            <div style={{ marginTop: "47px" }}>
              <CertificationWrapper>
                <div
                  className="certificate_header"
                  style={{ width: "100%", padding: "0px 20px 0px 12px " }}
                >
                  <CertificationIcon style={{ verticalAlign: "top" }} />
                  <div
                    className="title_area"
                    style={{ display: "inline-block", marginLeft: "6px" }}
                  >
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: 500,
                        fontFamily: "Noto Sans KR",
                        color: "#303030",
                      }}
                    >
                      세금 계산서 인증서
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        fontFamily: "Noto Sans KR",
                        color: "#5D5D62",
                      }}
                    >
                      세금 계산서를 발행하기 위한 인증서
                    </div>
                  </div>
                  <RegistrationTag
                    registerYn={taxCertificationInfo.registerYn}
                    expiredYn={taxCertificationInfo.expiredYn}
                    onClick={() => {
                      setTaxCertificationInfo({
                        ...taxCertificationInfo,
                        expiredYn: !taxCertificationInfo.expiredYn,
                      });
                    }}
                  >
                    {taxCertificationInfo.expiredYn == false
                      ? taxCertificationInfo.registerYn
                        ? "등록완료"
                        : "미등록"
                      : "만료됨"}
                  </RegistrationTag>
                </div>
                <div
                  className="body_area"
                  style={{ height: "100%", position: "relative" }}
                >
                  <BodyArea
                    data={taxCertificationInfo}
                    setData={setTaxCertificationInfo}
                  />
                </div>
              </CertificationWrapper>

              <CertificationWrapper style={{ marginLeft: "24px" }}>
                <div
                  className="certificate_header"
                  style={{ width: "100%", padding: "0px 20px 0px 12px " }}
                >
                  <CertificationIcon style={{ verticalAlign: "top" }} />
                  <div
                    className="title_area"
                    style={{ display: "inline-block", marginLeft: "6px" }}
                  >
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: 500,
                        fontFamily: "Noto Sans KR",
                        color: "#303030",
                      }}
                    >
                      홈택스 인증서
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        fontFamily: "Noto Sans KR",
                        color: "#5D5D62",
                      }}
                    >
                      홈택스에서 매입 세금계산서를 수집하기 위한 인증서
                    </div>
                  </div>
                  <RegistrationTag
                    registerYn={homeTaxCertificationInfo.registerYn}
                    expiredYn={homeTaxCertificationInfo.expiredYn}
                  >
                    {homeTaxCertificationInfo.expiredYn == false
                      ? homeTaxCertificationInfo.registerYn
                        ? "등록완료"
                        : "미등록"
                      : "만료됨"}
                  </RegistrationTag>
                </div>
                <div
                  className="body_area"
                  style={{ height: "100%", position: "relative" }}
                >
                  <BodyArea
                    data={homeTaxCertificationInfo}
                    setData={setHomeTaxCertificationInfo}
                  />
                </div>
              </CertificationWrapper>
            </div>
          </div>
        </ComponentWrapper>
      </div>
    </>
  );
};

export default CertificateRegistration;
