import React from "react";
import { Link, Route } from "react-router-dom";
import {
  FiHome,
  FiAccountManagement,
  FiCarryOver,
  DocumentManagementPage,
  DocumentTypePage,
} from "pages";
import { LNBArrayProps, ISubmenuProps } from "components/LNB/LNB";

interface FinanceProps {
  match: any;
  setLNBMenu: (menu: LNBArrayProps[]) => void;
}

const testArray = [
  { icon: "Home_Icon", title: "재무 회계 홈", path: "/fi" },
  {
    icon: "HR/Personnel_Management_Icon",
    title: "기초 정보 관리",
    path: "/fi/basicInfoManagement/accountManagement",
    submenu: [
      {
        title: "계정과목관리",
        path: "/fi/basicInfoManagement/accountManagement",
      },
      { title: "초기이월입력", path: "/fi/basicInfoManagement/carryOver" },
    ],
  },
  {
    icon: "HR/Personnel_Management_Icon",
    title: "전표 및 원장 정리",
    path: "/fi/documentLedgerManagement/documentManagement",
    submenu: [
      {
        title: "전표 관리",
        path: "/fi/documentLedgerManagement/documentManagement",
      },
      {
        title: "전표 유형 설정",
        path: "/fi/documentLedgerManagement/setDocumentType",
      },
      { title: "분개장", path: "/fi/documentLedgerManagement/journal" },
      {
        title: "계정별 원장",
        path: "/fi/documentLedgerManagement/accountLedger",
      },
      {
        title: "총계정 원장",
        path: "/fi/documentLedgerManagement/generalLedger",
      },
    ],
  },
];

const Finance = (props: FinanceProps) => {
  React.useEffect(() => {
    props.setLNBMenu(testArray);
  }, []);
  return (
    <div style={{ width: "inherit" }}>
      <Route exact path={props.match.url} component={FiHome} />
      <Route
        path={`${props.match.url}/basicInfoManagement/accountManagement`}
        component={FiAccountManagement}
      />
      <Route
        path={`${props.match.url}/basicInfoManagement/carryOver`}
        component={FiCarryOver}
      />
      <Route
        path={`${props.match.url}/documentLedgerManagement/documentManagement`}
        component={DocumentManagementPage}
      />
      <Route
        path={`${props.match.url}/documentLedgerManagement/setDocumentType`}
        component={DocumentTypePage}
      />
    </div>
  );
};

export default Finance;
