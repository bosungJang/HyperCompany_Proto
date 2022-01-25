import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField } from "common/HcTextField";

const DocumentType = () => {
  return (
    <>
      <div style={{ width: "inherit" }}>
        <ComponentWrapper>
          <HcTitleTextField titleName="전표 유형 설정" isBackIcon={false} />
          <div
            style={{ display: "block", marginTop: "39px", width: "inherit" }}
          ></div>
        </ComponentWrapper>
      </div>
    </>
  );
};

export default DocumentType;
