import React from "react";
import styled, { keyframes, Keyframes } from "styled-components";
import { ReactComponent as CloseIcon } from "resources/images/Close_Icon_White.svg";
import { ReactComponent as DownloadIcon } from "resources/images/Download_Icon.svg";
import { ReactComponent as ExcelIcon } from "resources/images/Excel_Icon.svg";
import { ReactComponent as NoFileIcon } from "resources/images/NoFile_Icon.svg";

const ApprovalContent = styled.div`
  background: #f9f9f9;
  border-radius: 4px;
  //padding: 13px;
  height: 50px;
  margin-bottom: 6px;
  &: last-child {
    margin-bottom: 0;
  }
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: 15px;
  font-family: Noto Sans KR;
  color: #5d5d62;
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
  padding: 9px 18px;
`;

const UploadFileWrapper = styled.div`
  border: 1px solid #cecece;
  border-radius: 6px;
  padding: 10px 10px;
  min-height: 172px;
  margin-top: 16px;
`;

interface FileUploaderProps {
  file: [];
  setFile: (value: any) => void;
  style?: React.CSSProperties;
}
const HcFileUploader = (props: FileUploaderProps) => {
  //const [files, setFiles]: any = React.useState(props.file);
  const onFileAdded = (evt: any) => {
    let fileList = Array.from(evt.target.files);
    console.log("fileList", fileList);
    fileList.forEach((files: any, i) => {
      let reader = new FileReader();

      reader.onloadend = () => {
        //setFiles((prevFiles: any) => [...prevFiles, files]);
        props.setFile((prevFiles: any) => [...prevFiles, files]);
      };

      reader.readAsDataURL(files);
    });

    console.log(props.file);
  };
  return (
    <>
      <div className="filebox" style={{ width: "100%" }}>
        <UploadButton htmlFor="ex_filename">{"파일 업로드 하기"}</UploadButton>
        <input
          type="file"
          id="ex_filename"
          className="upload-hidden"
          style={{ display: "none" }}
          onChange={onFileAdded}
        />
        {props.file.length != 0 ? (
          <UploadFileWrapper style={props.style}>
            {props.file.map((f: any, i: number) => (
              <>
                <ApprovalContent>
                  <div
                    style={{
                      display: "inline-table",
                      width: "50px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <DownloadIcon style={{ verticalAlign: "middle" }} />
                  </div>
                  <div
                    style={{
                      display: "inline-table",
                      width: "406px",
                      overflow: "hidden",
                    }}
                  >
                    <ExcelIcon
                      style={{
                        width: 28,
                        height: 28,
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginRight: "8px",
                      }}
                    />
                    {f.name}
                  </div>
                  <div style={{ display: "inline-block", width: "256px" }}>
                    {(f.size / 1000).toFixed(1)}KB
                  </div>
                  <div style={{ display: "inline-block", width: "289px" }}>
                    {"2022.01.01"}
                  </div>
                  <div style={{ display: "inline-block", width: "201px" }}>
                    {"홍길동"}
                  </div>
                  <div
                    style={{
                      display: "inline-table",
                      width: "50px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => {}}
                  >
                    <CloseIcon style={{ verticalAlign: "middle" }} />
                  </div>
                </ApprovalContent>
              </>
            ))}
          </UploadFileWrapper>
        ) : (
          <div style={{ marginTop: "16px", width: "100%" }}>
            <div
              style={Object.assign(
                {
                  width: "100%",
                  minHeight: "172px",
                  background: "#F9F9F9",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                props.style
              )}
            >
              <div>
                {/* 
                <NoFileIcon />
                */}
                <div
                  style={{ fontSize: 14, color: "#A7A7A7", fontWeight: 500 }}
                >
                  첨부된 파일이 없습니다.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HcFileUploader;
