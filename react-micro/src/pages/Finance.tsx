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
  BillingCurrentStatusPage,
  BillingTypePage,
  CreditFinancialStatusPage,
  CustomerCreditFinancePage,
  CashDisbursementVoucherPage,
  BillManagementPage,
  FundsPlanningPage,
  BudgetAllocationPage,
  BudgetApplicationPage,
  BudgetRevisionPage,
  ExecutiveBudgetComparisonPage,
  DigitalTaxInvoicePage,
  SumTaxIInvoicesPage,
  VATReportingManagementPage,
  CertificateRegistrationPage,
  VATReportingPage,
  FixedAssetListPage,
} from "pages";
import { LNBArrayProps, ISubmenuProps } from "components/LNB/LNB";

interface FinanceProps {
  match: any;
  setLNBMenu: (menu: LNBArrayProps[]) => void;
  forwardRef?: any;
  setTopTitle: (value: string) => void;
}

const testArray = [
  { icon: "Home_Icon", title: "재무 회계 홈", path: "/fi" },
  {
    icon: "Finance/Basic_Information_Management",
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
    icon: "Finance/Statement_And_Director",
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
    icon: "Finance/Financial_Statement",
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
    icon: "Finance/Account_And_Card_Management",
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
  {
    icon: "Finance/Billing_Management",
    title: "청구 관리",
    path: "/fi/billingManagement/billingCurrentStatus",
    submenu: [
      {
        title: "비용 청구 현황",
        path: "/fi/billingManagement/billingCurrentStatus",
      },
      {
        title: "비용 청구 유형 설정",
        path: "/fi/billingManagement/billingType",
      },
    ],
  },
  {
    icon: "Finance/Debt",
    title: "채권 / 채무관리",
    path: "/fi/creditAndFinancialManagement/creditAndFinancialCurrentStatus",
    submenu: [
      {
        title: "채권 / 채무 현황",
        path: "/fi/creditAndFinancialManagement/creditAndFinancialCurrentStatus",
      },
      {
        title: "거래처별 채권 / 채무 관리",
        path: "/fi/creditAndFinancialManagement/customerCreditAndFinancialManagement",
      },
    ],
  },
  {
    icon: "Finance/Fund_Management",
    title: "자금 관리",
    path: "/fi/fundManagement/cashDisbursementVoucher",
    submenu: [
      {
        title: "지출결의서 관리",
        path: "/fi/fundManagement/cashDisbursementVoucher",
      },
      {
        title: "자금계획",
        path: "/fi/fundManagement/fundsPlanning",
      },
      {
        title: "어음 관리",
        path: "/fi/fundManagement/billManagement",
      },
    ],
  },
  {
    icon: "Finance/Budget_Management",
    title: "예산 관리",
    path: "/fi/budgetManagement/budgetAllocation",
    submenu: [
      {
        title: "예산 배정",
        path: "/fi/budgetManagement/budgetAllocation",
      },
      {
        title: "예산 신청",
        path: "/fi/budgetManagement/budgetApplication",
      },
      {
        title: "예산 변경",
        path: "/fi/budgetManagement/budgetRevision",
      },
      {
        title: "예실대비현황",
        path: "/fi/budgetManagement/executiveBudgetComparison",
      },
    ],
  },
  {
    icon: "Finance/Tax_Management",
    title: "세무 관리",
    path: "/fi/taxManagement/budgetAllocation",
    submenu: [
      {
        title: "인증서 등록",
        path: "/fi/taxManagement/certificateRegistration",
      },
      {
        title: "전자 세금 계산서",
        path: "/fi/taxManagement/digitalTaxInvoice",
      },
      {
        title: "세금계산서 합계표",
        path: "/fi/taxManagement/sumTaxIInvoices",
      },
      {
        title: "부가세 신고 문서 서식관리",
        path: "/fi/taxManagement/VATReportingManagement",
      },
      {
        title: "부가세 신고",
        path: "/fi/taxManagement/VATReporting",
      },
    ],
  },
  {
    icon: "Finance/FixedAssets_Management",
    title: "고정자산 관리",
    path: "/fi/fixedAssetsManagement/fixedAssetsList",
    submenu: [
      {
        title: "고정자산 목록",
        path: "/fi/fixedAssetsManagement/fixedAssetsList",
      },
    ],
  },
];

const Finance = React.forwardRef((props: FinanceProps, ref) => {
  React.useEffect(() => {
    props.setLNBMenu(testArray);
    props.setTopTitle("재무");
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
        component={(prop: any) => (
          <BankAccountManagementPage
            ref={ref}
            forwardRef={props.forwardRef}
            {...prop}
          />
        )}
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
      <Route
        path={`${props.match.url}/billingManagement/billingCurrentStatus`}
        component={BillingCurrentStatusPage}
      />
      <Route
        path={`${props.match.url}/billingManagement/billingType`}
        component={BillingTypePage}
      />
      <Route
        path={`${props.match.url}/creditAndFinancialManagement/creditAndFinancialCurrentStatus`}
        component={CreditFinancialStatusPage}
      />
      <Route
        path={`${props.match.url}/creditAndFinancialManagement/customerCreditAndFinancialManagement`}
        component={CustomerCreditFinancePage}
      />
      <Route
        path={`${props.match.url}/fundManagement/cashDisbursementVoucher`}
        component={CashDisbursementVoucherPage}
      />
      <Route
        path={`${props.match.url}/fundManagement/fundsPlanning`}
        component={FundsPlanningPage}
      />
      <Route
        path={`${props.match.url}/fundManagement/billManagement`}
        component={BillManagementPage}
      />
      <Route
        path={`${props.match.url}/budgetManagement/budgetAllocation`}
        component={BudgetAllocationPage}
      />
      <Route
        path={`${props.match.url}/budgetManagement/budgetApplication`}
        component={BudgetApplicationPage}
      />
      <Route
        path={`${props.match.url}/budgetManagement/budgetRevision`}
        component={BudgetRevisionPage}
      />
      <Route
        path={`${props.match.url}/budgetManagement/executiveBudgetComparison`}
        component={ExecutiveBudgetComparisonPage}
      />
      <Route
        path={`${props.match.url}/taxManagement/digitalTaxInvoice`}
        component={DigitalTaxInvoicePage}
      />
      <Route
        path={`${props.match.url}/taxManagement/sumTaxIInvoices`}
        component={SumTaxIInvoicesPage}
      />
      <Route
        path={`${props.match.url}/taxManagement/VATReportingManagement`}
        component={VATReportingManagementPage}
      />
      <Route
        path={`${props.match.url}/taxManagement/certificateRegistration`}
        component={CertificateRegistrationPage}
      />
      <Route
        path={`${props.match.url}/taxManagement/VATReporting`}
        component={VATReportingPage}
      />
      <Route
        path={`${props.match.url}/fixedAssetsManagement/fixedAssetsList`}
        component={FixedAssetListPage}
      />
    </div>
  );
});

export default Finance;
