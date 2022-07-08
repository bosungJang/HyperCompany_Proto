import React, { Component } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  Home,
  About,
  Posts,
  Table,
  Test,
  Finance,
  HumanResource,
  CustomerService,
  Sales
} from "pages";
import { LNBArrayProps, ISubmenuProps } from "components/LNB/LNB";
import { referenceEnhancer } from "mobx/dist/internal";
import HcCheckBox from "common/HcCheckBox";
import { ReactComponent as CollectiveIcon } from "resources/images/Collective_Registration_Icon.svg";
import { ReactComponent as ExportIcon } from "resources/images/Export_Icon.svg";
import { ReactComponent as ShareIcon } from "resources/images/Share_Icon.svg";
import { ReactComponent as PrintIcon } from "resources/images/Print_Icon.svg";
import InfoIconTooltip, { TooltipMessage } from "common/HcTooltip";
import { useCounter } from "router/Root";
import { autorun } from "mobx";
import { observer } from "mobx-react";
import { HcContentPopupAdv } from "common/HcPopup";
import HcButton from "common/HcButton";
import * as XLSX from "xlsx";
import { ToastContext } from "common/Toast";

interface AppProps {
  setLNBMenu?: (menu: LNBArrayProps[]) => void;
  forwardRef?: any;
}
const IconWrapper = styled.div`
  margin-right: 16px;
  display: inline-block;
  cursor: pointer;
  &: hover {
    rect {
      fill: #ededed;
      transition: all 0.5s ease;
    }
    svg {
      background-color: #ededed;
      transition: all 0.5s ease;
    }
  }
`;

const ButtonWrapper = styled.div`
  height: 32px;
  padding: 7.5px 18px 6px 10px;
  margin-right: 10px;
  display: inline-block;
  cursor: pointer;
  border: 1px solid #a7a7a7;
  border-radius: 2.5px;
  min-width: 76px;
  div {
    display: inline-block;
    font-family: Noto Sans KR;
    font-weight: 500;
    font-size: 13px;
    vertical-align: top;
    margin-left: 6px;
  }
  svg {
    width: 18px;
    height: 18px;
  }
`;

const SubInfoTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #5d5d62;
`;

const SubInfoCont = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-top: 9px;

  span {
    color: #f06666;
  }
`;

const UploadButton = styled.label`
  //width: 72px;
  height: 36px;
  border: 1px solid #a7a7a7;
  border-radius: 2.5px;
  font-family: "Noto Sans KR";
  font-weight: 500;
  font-size: 13px;
  display: inline-block;
  text-align: center;
  padding: 7px 18px;
  cursor: pointer;
`;

const FileNameWrapper = styled.div`
  display: inline-block;
  border: 1px solid #cecece;
  border-radius: 3px;
  width: 400px;
  height: 36px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  margin-right: 10px;
  padding: 7px 10px;
  vertical-align: bottom;
`;

const App = observer((prop: AppProps) => {
  const [iconState, setIconState] = React.useState(false);
  const [topTitle, setTopTitle] = React.useState("");
  const [openPop, setOpenPop] = React.useState(false);
  const { message, cancelAction } = React.useContext(ToastContext);

  const myCounter = useCounter();
  autorun(() => {
    console.log("title", myCounter.myTitle);
  });

  const RegiPopup = () => {
    const [file, setFile]: any = React.useState([]);
    const [fileName, setFileName] = React.useState("");

    const onFileAdded = (evt: any) => {
      console.log("start", evt.target.files[0]);
      const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(evt.target.files[0]);

        fileReader.onload = (e: any) => {
          const bufferArray = e.target.result;

          const wb = XLSX.read(bufferArray, { type: "buffer" });

          const wsname = wb.SheetNames[0];

          const ws = wb.Sheets[wsname];

          const columnA = [];

          for (let z in ws) {
            if (z.toString()[1] === "1" && z.toString()[2] === undefined) {
              columnA.push(ws[z].v);
            }
          }

          const data = XLSX.utils.sheet_to_json(ws);

          console.log(data);
          console.log(columnA);

          resolve(data);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      });

      promise.then((d) => {
        setFile(d);
        setFileName(evt.target.files[0].name);
      });
    };

    return (
      <HcContentPopupAdv
        open={openPop}
        width={"600px"}
        height={"450px"}
        header={"일괄 등록"}
        style={{
          width: "100%",
          position: "unset",
          top: "unset",
          right: "unset",
          marginTop: "24px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
        close={() => {
          setOpenPop(false);
        }}
      >
        <div style={{ marginLeft: "-10px" }}>
          <div>
            <SubInfoTitle>
              1. 엑셀 양식을 다운로드하여 작성해주세요.
            </SubInfoTitle>
            <SubInfoCont>
              <span>*</span>필수 입력 값을 모두 작성해주세요.
            </SubInfoCont>
            <HcButton
              onClick={() => {
                window.location.href = "/images/testFile.xlsx";
              }}
              styles="line"
              style={{ height: "29.09px", marginTop: "15px" }}
              size="medium"
            >
              엑셀 양식 다운로드
            </HcButton>
          </div>
          <div style={{ marginTop: "53px" }}>
            <SubInfoTitle>2. 엑셀 파일을 업로드해주세요.</SubInfoTitle>
            <SubInfoCont>
              <span>*</span>제공된 엑셀의 서식을 변경하거나 다른 엑셀 양식
              파일을 업로드하시면 인식 불가능합니다.
            </SubInfoCont>
            <div style={{ marginTop: "15px" }}>
              <FileNameWrapper>{fileName}</FileNameWrapper>
              <UploadButton htmlFor="ex_filename">{"파일 선택"}</UploadButton>
              <input
                type="file"
                id="ex_filename"
                className="upload-hidden"
                style={{ display: "none" }}
                onChange={onFileAdded}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            float: "right",
            position: "absolute",
            bottom: "30px",
            right: "30px",
          }}
        >
          <HcButton
            onClick={() => {
              message("일괄 등록을 완료하였습니다.", "test");
              setOpenPop(false);
            }}
            styles="primary"
            style={{ marginRight: "12px", height: "40px" }}
            size="medium"
            disabled={fileName === "" ? true : false}
          >
            일괄 등록
          </HcButton>
          <HcButton
            onClick={() => {
              setOpenPop(false);
            }}
            styles="line"
            style={{ height: "40px" }}
            size="medium"
          >
            취소
          </HcButton>
        </div>
      </HcContentPopupAdv>
    );
  };

  return (
    <div
      style={{
        //backgroundColor: " white",
        width: "1400px",
        display: "inline-block",
        textAlign: "initial",
        borderRadius: "10px",
        marginTop: "60px",
      }}
      className="app"
    >
      <div
        style={{
          width: "inherit",
          height: "60px",
          background: "#FFFFFF",
          position: "absolute",
          opacity: 0,
          transition: "all 0.3s",
          padding: "14px 40px",
          border: "1px solid black",
          zIndex: 99,
          textAlign: "initial",
          //top: "-50px",
        }}
        ref={(el) => (prop.forwardRef.current[0] = el)}
      >
        <div
          style={{
            fontFamily: "Noto Sans KR",
            fontWeight: 700,
            fontSize: "18px",
            paddingTop: "2px",
            display: "inline-block",
          }}
        >
          {myCounter.myTitle}
        </div>
        <div style={{ float: "right", display: "inline-block" }}>
          {iconState == true ? (
            <>
              <IconWrapper
                onClick={() => {
                  setIconState(!iconState);
                }}
              >
                <ExportIcon />
              </IconWrapper>
              <IconWrapper>
                <TooltipMessage message={"일괄등록"} ItemHeight={18}>
                  <CollectiveIcon />
                </TooltipMessage>
              </IconWrapper>
              <IconWrapper>
                <PrintIcon />
              </IconWrapper>
              <IconWrapper style={{ marginRight: "0px" }}>
                <ShareIcon />
              </IconWrapper>
            </>
          ) : (
            <>
              <ButtonWrapper
                onClick={() => {
                  setIconState(!iconState);
                }}
              >
                <ExportIcon />
                <div>내보내기</div>
              </ButtonWrapper>
              <ButtonWrapper
                onClick={() => {
                  setOpenPop(true);
                }}
              >
                <CollectiveIcon />
                <div>일괄등록</div>
              </ButtonWrapper>
              <ButtonWrapper>
                <PrintIcon />
                <div>인쇄</div>
              </ButtonWrapper>
              <ButtonWrapper style={{ marginRight: "0px" }}>
                <ShareIcon />
                <div>공유</div>
              </ButtonWrapper>
            </>
          )}
        </div>
      </div>
      <div
        style={{
          width: "inherit",
          height: "fit-content",
          background: "#FFFFFF",
          position: "absolute",
          opacity: 0,
          //transition: "all 0.5s",
          //padding: "16px 40px",
          //border: "1px solid black",
          zIndex: 99,
          textAlign: "center",
          //top: "-50px",
          backgroundColor: "rgba( 255, 255, 255, 0 )",
        }}
        ref={(el) => (prop.forwardRef.current[1] = el)}
      >
        <div style={{ display: "inline-block" }}>
          <table>
            <thead>
              <tr>
                <th style={{ width: "33.63px" }}>
                  <HcCheckBox checked onChange={() => {}} />
                </th>
                <th>계좌명</th>
                <th>계좌 구분</th>
                <th>은행명</th>
                <th style={{ width: "252.56px" }}>계좌 번호</th>
                <th>예금주</th>
                <th>사용 여부</th>
                <th>개설일</th>
                <th>만기일</th>
                <th style={{ width: "95.1px" }}>-</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <Route
        exact
        path="/"
        component={(props: any) => (
          <Home setLNBMenu={prop.setLNBMenu} {...props} />
        )}
      />
      <Switch>
        <Route path="/about/:name" component={About} />
        <Route path="/about" component={About} />
      </Switch>
      <Route path="/posts" component={Posts} />
      <Route path="/table" component={Table} />
      <Route path="/test" component={Test} />
      <Route
        path="/fi"
        component={(props: any) => (
          <Finance
            setLNBMenu={prop.setLNBMenu}
            forwardRef={prop.forwardRef}
            setTopTitle={setTopTitle}
            {...props}
            ref={(el: any) => (prop.forwardRef.current[2] = el)}
          />
        )}
      />
      <Route
        path="/hr"
        component={(props: any) => (
          <HumanResource
            setLNBMenu={prop.setLNBMenu}
            setTopTitle={setTopTitle}
            {...props}
          />
        )}
      />
      <Route
        path="/crm"
        component={(props: any) => (
          <CustomerService
            setLNBMenu={prop.setLNBMenu}
            setTopTitle={setTopTitle}
            {...props}
          />
        )}
      />
      <Route
        path="/sales"
        component={(props: any) => (
          <Sales
            setLNBMenu={prop.setLNBMenu}
            forwardRef={prop.forwardRef}
            setTopTitle={setTopTitle}
            {...props}
            ref={(el: any) => (prop.forwardRef.current[2] = el)}
          />
        )}
      />
      <RegiPopup />
    </div>
  );
});

export default App;
