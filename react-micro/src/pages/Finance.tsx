import React from "react";
import { Link, Route } from "react-router-dom";
import {
  FiHome,
  FiAccountManagement,
  FiCarryOver,
  DocumentManagementPage,
  DocumentTypePage,
  JournalPage,
  AccountLedgerPage,
  GeneralLedgerPage,
  TotalTrialBalancePage,
  IncomeStatementPage,
  BalanceSheetPage,
  BankAccountManagementPage,
  AccountDetailPage,
  EmployeeAccountManagementPage,
  CardManagementPage,
  CardAprrovalHistoryPage,
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
  {
    icon: "HR/Personnel_Management_Icon",
    title: "결산 및 재무 제표",
    path: "/fi/closingFinancialStatements/totalTrialBalance",
    submenu: [
      {
        title: "합계잔액시산표",
        path: "/fi/closingFinancialStatements/totalTrialBalance",
      },
      {
        title: "손익계산서",
        path: "/fi/closingFinancialStatements/incomeStatement",
      },
      {
        title: "재무 상태표",
        path: "/fi/closingFinancialStatements/balanceSheet",
      },
    ],
  },
  {
    icon: "HR/Personnel_Management_Icon",
    title: "계좌 및 카드 관리",
    path: "/fi/accountAndCardManagement/bankAccountManagement",
    submenu: [
      {
        title: "계좌 관리",
        path: "/fi/accountAndCardManagement/bankAccountManagement",
      },
      {
        title: "계좌 거래 내역 조회",
        path: "/fi/accountAndCardManagement/accountDetail",
      },
      {
        title: "사원 계좌 관리",
        path: "/fi/accountAndCardManagement/employeeAccountManagement",
      },
      {
        title: "카드 관리",
        path: "/fi/accountAndCardManagement/cardManagement",
      },
      {
        title: "카드 승인 내역",
        path: "/fi/accountAndCardManagement/cardApprovalHistory",
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
      <Route
        path={`${props.match.url}/documentLedgerManagement/journal`}
        component={JournalPage}
      />
      <Route
        path={`${props.match.url}/documentLedgerManagement/accountLedger`}
        component={AccountLedgerPage}
      />
      <Route
        path={`${props.match.url}/documentLedgerManagement/generalLedger`}
        component={GeneralLedgerPage}
      />
      <Route
        path={`${props.match.url}/closingFinancialStatements/totalTrialBalance`}
        component={TotalTrialBalancePage}
      />
      <Route
        path={`${props.match.url}/closingFinancialStatements/incomeStatement`}
        component={IncomeStatementPage}
      />
      <Route
        path={`${props.match.url}/closingFinancialStatements/balanceSheet`}
        component={BalanceSheetPage}
      />
      <Route
        path={`${props.match.url}/accountAndCardManagement/bankAccountManagement`}
        component={BankAccountManagementPage}
      />
      <Route
        path={`${props.match.url}/accountAndCardManagement/accountDetail`}
        component={AccountDetailPage}
      />
      <Route
        path={`${props.match.url}/accountAndCardManagement/employeeAccountManagement`}
        component={EmployeeAccountManagementPage}
      />
      <Route
        path={`${props.match.url}/accountAndCardManagement/cardManagement`}
        component={CardManagementPage}
      />
      <Route
        path={`${props.match.url}/accountAndCardManagement/cardApprovalHistory`}
        component={CardAprrovalHistoryPage}
      />
    </div>
  );
};

export default Finance;
