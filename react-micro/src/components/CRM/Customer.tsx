import React from "react";
import { ComponentWrapper } from "common/HcCommonLayout";
import HcTextField, { HcTitleTextField } from "common/HcTextField";
import HcTabs, { HcTabsAdv } from "common/HcTabs";
import { HcDropDownButton } from "common/HcButton";
import HcDropDownTable, {
  HcDropDownTableAnother,
} from "common/HcDropDownTable";

const CustomerPage = () => {
  const [Tabs, setTabs] = React.useState("1");
  return (
    <>
      <ComponentWrapper>
        <div style={{ display: "block" }}>
          <HcTitleTextField titleName="고객" isBackIcon={false} />
          <div style={{ marginTop: "39px" }}>
            <HcTabsAdv
              items={[
                { to: "1", name: "전체(100)" },
                { to: "2", name: "개인 고객(100)" },
                { to: "3", name: "기업 고객(100)" },
                { to: "4", name: "기업 컨택포인트(100)" },
              ]}
              size="normal"
              TabNumber={Tabs}
              SetTabNumber={setTabs}
            />
            <div
              className="body_area"
              style={{ display: "flex", marginTop: "20px" }}
            >
              {
                {
                  "1": (
                    <>
                      <div>
                        <HcDropDownButton
                          title="+ 생성"
                          dropDownMenu={[
                            {
                              title: "개인 고객 생성",
                              onClick: () => {
                                alert("개인 고객 생성");
                              },
                            },
                            {
                              title: "기업 고객 생성",
                              onClick: () => {
                                alert("기업 고객 생성");
                              },
                            },
                            {
                              title: "기업 컨택 포인트 생성",
                              onClick: () => {
                                alert("기업 컨택 포인트 생성");
                              },
                            },
                            {
                              title: "일괄 등록",
                              onClick: () => {
                                alert("일괄 등록");
                              },
                            },
                          ]}
                        />
                        <div>
                          <HcDropDownTableAnother />
                        </div>
                      </div>
                    </>
                  ),
                  "2": <>test</>,
                }[Tabs]
              }
            </div>
          </div>
        </div>
      </ComponentWrapper>
    </>
  );
};
export default CustomerPage;
