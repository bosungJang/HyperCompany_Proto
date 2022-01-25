import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, { HcTitleTextField } from "common/HcTextField";
import HcTabs from "common/HcTabs";

const CustomerPage = () => {
  return (
    <>
      <ComponentWrapper>
        <div style={{ display: "block" }}>
          <HcTitleTextField titleName="고객" isBackIcon={false} />
          <div style={{ marginTop: "39px" }}>
            <HcTabs
              items={[
                { to: "1", name: "전체" },
                { to: "2", name: "개인 고객" },
                { to: "3", name: "기업고객" },
                { to: "notNumber", name: "Not Number" },
                { to: "5", name: "Tab 5" },
              ]}
              size="normal"
            />
          </div>
        </div>
      </ComponentWrapper>
    </>
  );
};
export default CustomerPage;
