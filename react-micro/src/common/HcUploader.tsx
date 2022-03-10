import React, { useState } from "react";
import styled, { keyframes, Keyframes } from "styled-components";
import { ReactComponent as CloseIcon } from "resources/images/Close_Icon.svg";

const CloseIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 6px;
  margin-right: 6px;
  opacity: 0;
`;

const ImageWrapper = styled.div`
  display: inline-block;
  position: relative;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  margin-right: 10px;
  &: last-child {
    margin-right: 0;
  }
  &:hover {
    ${CloseIconWrapper} {
      opacity: 1;
    }
  }
`;

const UploaderWrapper = styled.div`
  border: 1px solid #cecece;
  border-radius: 3px;
  width: 100%;
  min-height: 200px;
  padding: 6px 7px;
`;

const UploaderButton = styled.label`
  border: 1px solid #a7a7a7;
  box-sizing: border-box;
  border-radius: 2.5px;
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 13px;
  color: #000000;
  top: 50%;
  left: 50%;
  position: relative;
  width: 122px;
  height: 32px;
  padding: 6px 18px;
`;

const ImageUploader = () => {
  const [files, setFiles]: any = useState([]);
  const [images, setImages]: any = useState([]);

  const handleImageChange = (e: any) => {
    console.log("handleImageChange");
    // FileList to Array
    let fileList = Array.from(e.target.files);
    console.log("fileList", fileList);
    // File Reader for Each file and and update state arrays
    fileList.forEach((files: any, i) => {
      let reader = new FileReader();

      reader.onloadend = () => {
        setFiles((prevFiles: any) => [...prevFiles, files]);
        setImages((prevImages: any) => [...prevImages, reader.result]);
      };

      reader.readAsDataURL(files);
    });
  };

  return (
    <UploaderWrapper>
      <input
        //className="upload"
        type="file"
        onChange={handleImageChange}
        multiple
        id="upload"
        style={{
          top: "50%",
          left: "50%",
          position: "relative",
          display: "none",
        }}
      />
      {images.length !== 0 ? (
        <></>
      ) : (
        <UploaderButton htmlFor="upload">+ 이미지 업로드</UploaderButton>
      )}

      <div>
        {images.map((image: any, i: number) => {
          return (
            <ImageWrapper key={i}>
              <img
                style={{ width: "170px", height: "188px" }}
                src={image}
                alt="a"
              />
              <CloseIconWrapper
                onClick={() => {
                  let temp = JSON.parse(JSON.stringify(images));
                  temp.splice(i, 1);
                  setImages(temp);
                }}
              >
                <CloseIcon style={{ width: "16px", height: "16px" }} />
              </CloseIconWrapper>
            </ImageWrapper>
          );
        })}
      </div>
    </UploaderWrapper>
  );
};
export default ImageUploader;
