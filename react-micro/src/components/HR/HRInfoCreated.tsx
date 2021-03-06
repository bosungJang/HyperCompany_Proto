import React, { useState } from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import {
  HcTitleTextField,
  SubHeading,
  Title,
  TextField,
  HcTextArea,
} from "common/HcTextField";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";
import HcButton from "common/HcButton";
import { useLocation } from "react-router";
import { ToastContext } from "common/Toast";
import { HcContentPopup } from "common/HcPopup";
import { HcTabsAdv } from "common/HcTabs";

const TextStyle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
`;
const MailContent = styled(TextStyle)`
  height: 305px;
  width: 1320px;
  border-radius: 4px;
  border: 1px solid #cecece;
  font-size: 13px;
  line-height: 300%;
  color: #5d5d62;
  white-space: pre-wrap;
  margin-top: 10px;
  padding: 20px 16px 20px 16px;
  overflow-y: scroll;
`;
const NewHRInfo = styled.div`
  width: 1320px;
  height: 178px;
  position: relative;
  float: left;
`;
const MainSendContainer = styled.div`
  width: 1320px;
  height: 450px;
  margin-top: 311px;
  display: inline;
`;
const HRCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(153, 153, 153, 0.75);
  border-radius: 4px;
  height: 110px;
  width: 424px;
  float: left;
  margin-top: 18px;
  margin-bottom: 60px;
  padding: 20px 0px 20px 115px;
  display: block;
  position: relative;
`;
const Name = styled(TextStyle)`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #5d5d62;
`;
const Info = styled(Title)`
  color: #838181;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
`;
const Profile = styled.img`
  width: 75px;
  height: 65px;
  position: absolute;
  top: 21px;
  left: 19px;
  border-radius: 50%;
  border: 1px solid #257cff;
`;
const Chip = styled.div<{ essensial?: boolean }>`
  height: 26px;
  width: fit-content;
  align-items: center;
  padding: 3px 12px 3px;
  border: 1px solid #2d2d31;
  border-radius: 24px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  margin-right: 6px;
  margin-bottom: 10px;
  ${(props) =>
    props.essensial ? "color: #FFFFFF; background: #2D2D31;" : "color:#00000;"}
`;
export default function () {
  const location = useLocation();
  const [title, setTitle] = useState(
    `${location.state.company}????????? ???????????????!`
  );
  const [mail, setMail]: any = useState(
    `??????????????? ${location.state.name}???! \n ${location.state.company}????????? ???????????? ???????????????! \nSuperComapny??? ${location.state.company}?????? ???????????? erp ??????????????????. \n?????? ??? ???????????? ????????? ?????? ??? ????????? ????????????, ?????? ??????????????? ???????????????. \n?????? SuperComapny??? ${location.state.name}?????? ????????? ?????? ????????? ????????? ??????????????????!`
  );
  const [mailEdit, setMailEdit]: any = useState(``);
  /*Toast */
  const { message, cancelAction } = React.useContext(ToastContext);
  /*Toast */
  const [mailModal, setMailModal] = useState(false);
  const [HrModal, setHrModal] = useState(false);
  /*Tabs */
  const [Tabs, setTabs] = React.useState("1");
  /*Tabs */
  const hrInfo = [
    { name: "????????????", essensial: true },
    { name: "?????????", essensial: false },
    { name: "?????????", essensial: true },
    { name: "??????????????????", essensial: true },
    { name: "??????", essensial: true },
    { name: "???????????? ?????? ?????? ??????", essensial: false },
  ];
  const document = [
    { name: "??????????????????", essensial: true },
    { name: "?????????????????????", essensial: false },
    { name: "???????????????", essensial: true },
    { name: "???????????????", essensial: true },
    { name: "?????? ?????? ?????????", essensial: false },
    { name: "????????? ?????? ?????????", essensial: false },
    { name: "?????? ?????????", essensial: false },
    { name: "?????????????????????????????????", essensial: false },
    { name: "??? ?????? ?????????????????????", essensial: true },
    { name: "???????????????", essensial: true },
    { name: "??????/?????? ?????? ?????? ??????", essensial: false },
    { name: "?????? ?????? ??????", essensial: true },
  ];
  const HRInfo = (props: any) => {
    return (
      <>
        {" "}
        <HRCard style={props.style}>
          <Profile src="" />
          <Name>?????????</Name>
          <Info>AB?????? / AB2??? / AB2-4???</Info>
          <Info style={{ color: "#2D2D31", fontSize: "13px" }}>
            2020.01.01 ??????
          </Info>
        </HRCard>
      </>
    );
  };
  return (
    <ComponentWrapper style={{ display: "block", height: 1013 }}>
      <div
        style={{
          float: "left",
          height: 40,
          marginBottom: 60,
          width: "364px",
        }}
      >
        <HcTitleTextField
          titleName="?????? ?????? ?????? ?????????????????????."
          isBackIcon={false}
        />
      </div>
      <svg
        style={{ float: "left" }}
        width="44"
        height="42"
        viewBox="0 0 44 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.8145 14.9324L27.8873 30.3428L6.29486 36.2212L3.77664 32.3686L17.8145 14.9324Z"
          fill="#FF6666"
        />
        <path
          d="M41.6482 26.3733C37.2618 25.553 32.9148 24.9476 28.9057 25.5636C32.8458 26.2588 36.6545 26.3662 41.0362 28.5998C41.1539 27.8588 41.6298 27.2533 41.6482 26.3733Z"
          fill="#FFC738"
        />
        <path
          d="M43.8436 15.2791C42.6446 14.5217 42.1559 14.5627 40.9276 13.7407C37.8654 19.8556 30.2506 22.2693 27.36 23.5617C32.782 22.6922 38.2505 21.4052 43.8436 15.2791V15.2791Z"
          fill="#00CBD8"
        />
        <path
          d="M24.5735 21.3565C32.2215 18.2982 37.0148 8.81473 37.2968 1.86954C34.558 2.54489 32.8588 2.74214 30.954 1.56399C32.8351 7.50075 30.6364 14.3168 23.9534 21.2251C23.9534 21.2251 23.7979 21.6109 24.5735 21.3565Z"
          fill="#257CFF"
        />
        <path
          d="M23.1425 18.0346C25.3659 14.3867 26.9787 10.6501 26.0098 6.64063C25.0689 7.03884 24.6185 7.56819 23.1624 7.67512C24.6262 11.2746 23.549 14.6207 23.1425 18.0346Z"
          fill="#EF3DA8"
        />
      </svg>

      <NewHRInfo>
        <svg
          width="43"
          height="13"
          viewBox="0 0 43 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", right: 18, top: 20 }}
          onClick={() => setHrModal(true)}
        >
          <path
            d="M3.48749 9.518H4.63149V6.71H7.27049V5.631H4.63149V2.823H3.48749V5.631H0.848492V6.71H3.48749V9.518ZM10.3426 2.433H14.3336V1.341H9.00355V9.154H9.92655C12.1106 9.154 13.5406 9.076 15.1656 8.764L15.0356 7.685C13.5406 7.958 12.2536 8.023 10.3426 8.036V2.433ZM16.8426 0.249V4.422H13.6966V5.527H16.8426V12.027H18.1816V0.249H16.8426ZM22.9125 4.097H28.4765V6.021H22.9125V4.097ZM26.3575 9.466V7.1H29.8025V1.042H28.4765V3.018H22.9125V1.042H21.5865V7.1H25.0185V9.466H20.3905V10.571H31.0245V9.466H26.3575ZM33.0125 1.497V2.589H37.1985C36.9645 5.293 35.5085 7.36 32.4275 8.842L33.1425 9.908C37.1725 7.958 38.5765 4.994 38.5765 1.497H33.0125ZM40.6955 0.262V12.001H42.0345V0.262H40.6955Z"
            fill="black"
          />
        </svg>

        <SubHeading titleName="?????? ?????? ??????" />
        <HRInfo style={{ marginRight: 24 }} />
        <HRInfo style={{ marginRight: 24 }} />
        <HRInfo />
      </NewHRInfo>
      <MainSendContainer>
        <SubHeading titleName="?????? ?????? ??????" />
        <HcButton
          onClick={() => {
            message("?????? ?????? ?????? ?????????????????????.", "test");
          }}
          styles="secondary"
          style={{
            margin: "18px 0px 16px 0px",
          }}
          size="medium"
        >
          ?????? ??????
        </HcButton>
        <HcButton
          onClick={() => setMailModal(true)}
          styles="line"
          style={{
            marginLeft: "10px",
            margin: "18px 0px 16px 10px",
          }}
          size="medium"
        >
          ??????
        </HcButton>
        <Title style={{ marginLeft: "10px" }}>?????? ????????????</Title>
        <MailContent>{mail}</MailContent>
      </MainSendContainer>
      <HcContentPopup
        width={746}
        height={799}
        open={mailModal}
        primaryBtn={"??????"}
        secondBtn={"??????"}
        close={() => setMailModal(false)}
        header="?????? ?????? ??????"
        style={{
          left: 30,
          top: 65,
          fontSize: "15px",
          color: "#000000",
          display: "block",
        }}
        primaryFunc={() => {
          setMailModal(false);
          setMail(mailEdit);
        }}
      >
        <p
          style={{
            fontSize: "14px",
            fontFamily: "Noto Sans KR",
            fontWeight: 500,
            color: "#2D2D31",
            marginBottom: "28px",
          }}
        >
          ??????????????? ????????? ????????? ???????????????
        </p>
        <>?????? ??????</>
        <TextField
          value="[?????????]????????? ???????????????!"
          style={{
            width: "686px",
            color: "#5D5D62",
            margin: "9px 0px 18px 0px",
          }}
        />
        <div>?????? ??????</div>
        <HcTextArea
          // contentEditable="true"

          style={{
            width: "686px",
            height: "234px",
            margin: "9px 0px 30px 0px",
            lineHeight: "200%",
            whiteSpace: "pre",
            overflowY: "scroll",
          }}
          // onInput={(e) => {
          //   console.log(e.currentTarget.textContent);
          //   console.log(typeof e.currentTarget.textContent);

          //   if (e.currentTarget.textContent !== null)
          //     setMailEdit(ReactHtmlParser(e.currentTarget.textContent));
          // }}
          value={mail}
          onChange={(e: any) => setMailEdit(e.target.value)}
        />
        <div>?????? ??????</div>
        <div style={{ marginTop: "15px" }}>
          <HcTabsAdv
            items={[
              { to: "1", name: "?????? ??????" },
              { to: "2", name: "?????? ??????" },
            ]}
            size="normal"
            TabNumber={Tabs}
            SetTabNumber={setTabs}
          />
          <Title style={{ margin: "12px 0px 11px 0px" }}>
            ?????? ??????({Tabs === "1" ? 3 : 5})
          </Title>
          {
            {
              "1": (
                <div
                  style={{
                    width: "686px",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {hrInfo.map((info) => (
                    <Chip essensial={info.essensial}>{info.name}</Chip>
                  ))}
                </div>
              ),
              "2": (
                <div
                  style={{
                    width: "686px",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {document.map((info) => (
                    <Chip essensial={info.essensial}>{info.name}</Chip>
                  ))}
                </div>
              ),
            }[Tabs]
          }
        </div>
      </HcContentPopup>
      <HcContentPopup
        width={504}
        height={736}
        open={HrModal}
        primaryBtn={"??????"}
        close={() => setHrModal(false)}
        header="?????? ?????? ??????"
        style={{
          left: 37,
          top: 83,
        }}
      >
        <ul
          style={{
            padding: 0,
            margin: 0,
            height: 546,
            width: 435,
            overflow: "auto",
          }}
        >
          {hrInfo.map(() => (
            <li>
              <HRInfo style={{ margin: "0px 0px 14px 2px" }} />
            </li>
          ))}
        </ul>
      </HcContentPopup>
    </ComponentWrapper>
  );
}
