import { HcTabsAdv } from "common/HcTabs";
import { ComponentWrapper } from "common/HcCommonLayout";
import { HcTitleTextField } from "common/HcTextField";
import { useState } from "react";
import { ContentTree } from "common/HcTree";
import {
  HcTableContainer,
  HcTable,
  TableSetting,
  TableActionBtn,
} from "common/HcTableComponent";

export default function CustomerClass() {
  const colorSet = {
    red: { color: "#F06666", background: "#FFE9E9" },
    yellow: { color: "#FFBB0B", background: "#FFF1CE" },
    orange: { color: "#FDA95C", background: "#FFF3E8" },
    blueGreen: { color: "#F06666", background: "#FFE9E9" },
    blue: { color: "#5799FB", background: "#DFECFF" },
    navy: { color: "#F06666", background: "#FFE9E9" },
    purple: { color: "#F06666", background: "#FFE9E9" },
    grey: { color: "#838181", background: "#CECECE" },
    black: { color: "#F06666", background: "#FFE9E9" },
    none: { color: "#000000", background: "none" },
  };
  const [treeItems, setTreeItems] = useState([
    {
      id: "0",
      title: "전체",
      color: colorSet.none,
    },
    {
      id: "1",
      title: "VIP",
      color: colorSet.red,
    },
    {
      id: "2",
      title: "Gold",
      color: colorSet.yellow,
    },
    {
      id: "3",
      title: "Silver",
      color: colorSet.grey,
    },
    {
      id: "4",
      title: "Bronze",
      color: colorSet.orange,
    },
    {
      id: "5",
      title: "Family",
      color: colorSet.blue,
    },
  ]);
  const [currentTreeData, setCurrentTreeData] = useState({
    id: "0",
    title: "전체",
  });
  const [Tabs, setTabs] = useState("1");
  const [isCreate, setIsCreate] = useState("");
  return (
    <ComponentWrapper style={{ display: "block" }}>
      <HcTitleTextField titleName="고객 등급" isBackIcon={false} />
      <div style={{ marginTop: "39px" }}>
        <HcTabsAdv
          items={[
            { to: "1", name: "개인 고객 등급(00)" },
            { to: "2", name: "기업고객 등급(00)" },
          ]}
          size="normal"
          TabNumber={Tabs}
          SetTabNumber={setTabs}
        />
        {
          {
            "1": (
              <>
                <div style={{ display: "flex", marginTop: 24 }}>
                  <div style={{ marginRight: 24 }}>
                    {" "}
                    <ContentTree
                      items={treeItems}
                      title="개인 고객 등급"
                      search={true}
                      style={{ minHeight: "832px" }}
                      isCreate={isCreate}
                      setIsCreates={setIsCreate}
                      currentData={currentTreeData}
                      setcurrentData={setCurrentTreeData}
                      placeholder="검색"
                      innerStyle={{
                        position: "absolute",
                        top: 7,
                        borderRadius: "2px",
                        height: 25,
                        padding: "3px 6px",
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    />
                    {currentTreeData.title}
                  </div>
                </div>
              </>
            ),
            "2": <></>,
          }[Tabs]
        }
      </div>
    </ComponentWrapper>
  );
}
