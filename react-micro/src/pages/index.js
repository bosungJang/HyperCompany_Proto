import React from "react";
import loadable from "@loadable/component";

const Loading = <div>Loading...</div>;

export const Home = loadable(() => import("./Home"), {
  fallback: Loading,
});

export const About = loadable(() => import("./About"), {
  fallback: Loading,
});

export const Posts = loadable(() => import("./Posts"), {
  fallback: Loading,
});

export const Post = loadable(() => import("../components/Post"), {
  fallback: Loading,
});

export const Table = loadable(() => import("./Table"), {
  fallback: Loading,
});

export const Test = loadable(() => import("./TestPage"), {
  fallback: Loading,
});

export const Finance = loadable(() => import("./Finance"), {
  fallback: Loading,
});

export const HumanResource = loadable(() => import("./HumanResource"), {
  fallback: Loading,
});

export const CustomerService = loadable(() => import("./CustomerCare"), {
  fallback: Loading,
});

/*HR START*/
export const HRHome = loadable(() => import("../components/HR/Home"), {
  fallback: Loading,
});

export const Order = loadable(() => import("../components/HR/Order"), {
  fallback: Loading,
});

export const HRManagement = loadable(
  () => import("../components/HR/HRInfoManagement"),
  {
    fallback: Loading,
  }
);

export const HRGroupManage = loadable(
  () => import("../components/HR/GroupManagement"),
  {
    fallback: Loading,
  }
);

export const HRInfoDetail = loadable(
  () => import("../components/HR/HRInfoDetail"),
  {
    fallback: Loading,
  }
);
export const HRInfoCreate = loadable(
  () => import("../components/HR/HRInfoCreate"),
  {
    fallback: Loading,
  }
);
export const HRInfoCreated = loadable(
  () => import("../components/HR/HRInfoCreated"),
  {
    fallback: Loading,
  }
);
export const OrderCreate = loadable(
  () => import("../components/HR/OrderCreate"),
  {
    fallback: Loading,
  }
);
export const OrderDetail = loadable(
  () => import("../components/HR/OrderDetail"),
  {
    fallback: Loading,
  }
);
export const OrderCreated = loadable(
  () => import("../components/HR/OrderCreated"),
  {
    fallback: Loading,
  }
);
export const OrderStandards = loadable(
  () => import("../components/HR/OrderStandards"),
  {
    fallback: Loading,
  }
);
export const HROrganizationManagement = loadable(
  () => import("../components/HR/OrganizationManagement"),
  {
    fallback: Loading,
  }
);
export const HRProfessionalManagement = loadable(
  () => import("../components/HR/ProfessionalManagement"),
  {
    fallback: Loading,
  }
);
export const AbilityManagement = loadable(
  () => import("../components/HR/AbilityManagement"),
  {
    fallback: Loading,
  }
);
export const AbilityDetail = loadable(
  () => import("../components/HR/AbillityDetail"),
  {
    fallback: Loading,
  }
);
export const AbilityCreate = loadable(
  () => import("../components/HR/AbilityCreate"),
  {
    fallback: Loading,
  }
);
export const HROrganizationType = loadable(
  () => import("../components/HR/OrganizationType"),
  {
    fallback: Loading,
  }
);
export const HROrganizationHistory = loadable(
  () => import("../components/HR/OrganizationHistory"),
  {
    fallback: Loading,
  }
);
export const HRProfessionalDetail = loadable(
  () => import("../components/HR/ProfessionalDetail"),
  {
    fallback: Loading,
  }
);
export const HRProfessionalCreate = loadable(
  () => import("../components/HR/ProfessionalCreate"),
  {
    fallback: Loading,
  }
);
export const HRProfessionalHistory = loadable(
  () => import("../components/HR/ProfessionalHistory"),
  {
    fallback: Loading,
  }
);
export const EmployeeStatus = loadable(
  () => import("../components/HR/EmployeeStatus"),
  {
    fallback: Loading,
  }
);
export const LeaveManagement = loadable(
  () => import("../components/HR/LeaveManagement"),
  {
    fallback: Loading,
  }
);
export const PromoteLeave = loadable(
  () => import("../components/HR/PromoteLeave"),
  {
    fallback: Loading,
  }
);
export const LeaveSetting = loadable(
  () => import("../components/HR/LeaveSetting"),
  {
    fallback: Loading,
  }
);
export const LeaveSettingDetail = loadable(
  () => import("../components/HR/LeaveSettingDetail"),
  {
    fallback: Loading,
  }
);
export const LeaveSettingCreate = loadable(
  () => import("../components/HR/LeaveSettingCreate"),
  {
    fallback: Loading,
  }
);
export const LeaveDetail = loadable(
  () => import("../components/HR/LeaveDetail"),
  {
    fallback: Loading,
  }
);
export const WorkManagement = loadable(
  () => import("../components/HR/WorkManagement"),
  {
    fallback: Loading,
  }
);
export const WorkCategory = loadable(
  () => import("../components/HR/WorkCategory"),
  {
    fallback: Loading,
  }
);
export const WorkManagementDetail = loadable(
  () => import("../components/HR/WorkManagementDetail"),
  {
    fallback: Loading,
  }
);
export const WorkManagementCreate = loadable(
  () => import("../components/HR/WorkManagementCreate"),
  {
    fallback: Loading,
  }
);
export const HdManagement = loadable(
  () => import("../components/HR/HdManagement"),
  {
    fallback: Loading,
  }
);
export const LeaveStandardDetail = loadable(
  () => import("../components/HR/LeaveStandardDetail"),
  {
    fallback: Loading,
  }
);
export const LeaveStandardManagement = loadable(
  () => import("../components/HR/LeaveStandardManagement"),
  {
    fallback: Loading,
  }
);
export const WorkSchedule = loadable(
  () => import("../components/HR/WorkSchedule"),
  {
    fallback: Loading,
  }
);
export const PayManagement = loadable(
  () => import("../components/HR/PayManagement"),
  {
    fallback: Loading,
  }
);
export const PayCalculation = loadable(
  () => import("../components/HR/PayCalculation"),
  {
    fallback: Loading,
  }
);
export const PayCalcSummary = loadable(
  () => import("../components/HR/PayCalcSummary"),
  {
    fallback: Loading,
  }
);
export const PayCalcDetail = loadable(
  () => import("../components/HR/PayCalcDetail"),
  {
    fallback: Loading,
  }
);
export const PayRoll = loadable(() => import("../components/HR/PayRoll"), {
  fallback: Loading,
});
export const PayStubMail = loadable(
  () => import("../components/HR/PayStubMail"),
  {
    fallback: Loading,
  }
);
export const ExtraPayManagement = loadable(
  () => import("../components/HR/ExtraPayManagement"),
  {
    fallback: Loading,
  }
);
export const ExtraPayDetail = loadable(
  () => import("../components/HR/ExtraPayDetail"),
  {
    fallback: Loading,
  }
);
export const ExtraPayCreate = loadable(
  () => import("../components/HR/ExtraPayCreate"),
  {
    fallback: Loading,
  }
);
export const DeductManagement = loadable(
  () => import("../components/HR/DeductManagement"),
  {
    fallback: Loading,
  }
);
export const DeductDetail = loadable(
  () => import("../components/HR/DeductDetail"),
  {
    fallback: Loading,
  }
);
export const DeductCreate = loadable(
  () => import("../components/HR/DeductCreate"),
  {
    fallback: Loading,
  }
);
export const EvaluationManagement = loadable(
  () => import("../components/HR/EvaluationManagement"),
  {
    fallback: Loading,
  }
);
export const EvaluationDetail = loadable(
  () => import("../components/HR/EvaluationDetail"),
  {
    fallback: Loading,
  }
);
export const EvaluationResult = loadable(
  () => import("../components/HR/EvaluationResult"),
  {
    fallback: Loading,
  }
);
export const CalcResignationPay = loadable(
  () => import("../components/HR/CalcResignationPay"),
  {
    fallback: Loading,
  }
);
export const ResignationPayManagement = loadable(
  () => import("../components/HR/ResignationPayManagement"),
  {
    fallback: Loading,
  }
);
export const ResignationPayDetail = loadable(
  () => import("../components/HR/ResignationPayDetail"),
  {
    fallback: Loading,
  }
);
export const KPIManagement = loadable(
  () => import("../components/HR/KPIManagement"),
  {
    fallback: Loading,
  }
);
export const EvaluationPlan = loadable(
  () => import("../components/HR/EvaluationPlan"),
  {
    fallback: Loading,
  }
);
export const EvaluationPlanDetail = loadable(
  () => import("../components/HR/EvaluationPlanDetail"),
  {
    fallback: Loading,
  }
);
export const EvaluationPlanCreate = loadable(
  () => import("../components/HR/EvaluationPlanCreate"),
  {
    fallback: Loading,
  }
);
export const RaterManagement = loadable(
  () => import("../components/HR/RaterManagement"),
  {
    fallback: Loading,
  }
);
export const GoalAndPerformance = loadable(
  () => import("../components/HR/GoalAndPerformance"),
  {
    fallback: Loading,
  }
);
export const GoalAndPerformanceDetail = loadable(
  () => import("../components/HR/GoalAndPerformanceDetail"),
  {
    fallback: Loading,
  }
);
export const GoalAndPerformanceCreate = loadable(
  () => import("../components/HR/GoalAndPerformanceCreate"),
  {
    fallback: Loading,
  }
);
export const EvaluationEnvironment = loadable(
  () => import("../components/HR/EvaluationEnvironment"),
  {
    fallback: Loading,
  }
);
export const EvaluationStepDetail = loadable(
  () => import("../components/HR/EvaluationStepDetail"),
  {
    fallback: Loading,
  }
);
export const EvaluationStepCreate = loadable(
  () => import("../components/HR/EvaluationStepCreate"),
  {
    fallback: Loading,
  }
);
export const EtcEvaluationDetail = loadable(
  () => import("../components/HR/EtcEvaluationDetail"),
  {
    fallback: Loading,
  }
);
export const EtcEvaluationCreate = loadable(
  () => import("../components/HR/EtcEvaluationCreate"),
  {
    fallback: Loading,
  }
);
export const Evaluation = loadable(
  () => import("../components/HR/Evaluation"),
  {
    fallback: Loading,
  }
);
export const TaxReturnManagement = loadable(
  () => import("../components/HR/TaxReturnManagement"),
  {
    fallback: Loading,
  }
);
export const EarnedIncome = loadable(
  () => import("../components/HR/EarnedIncome"),
  {
    fallback: Loading,
  }
);
export const SubmissionsReview = loadable(
  () => import("../components/HR/SubmissionsReview"),
  {
    fallback: Loading,
  }
);
export const Receipt = loadable(() => import("../components/HR/Receipt"), {
  fallback: Loading,
});
export const ReceiptList = loadable(
  () => import("../components/HR/ReceiptList"),
  {
    fallback: Loading,
  }
);
/*HR END*/

export const FiHome = loadable(() => import("../components/Fi/Home"), {
  fallback: Loading,
});

export const FiAccountManagement = loadable(
  () => import("../components/Fi/AccountManagement"),
  {
    fallback: Loading,
  }
);

export const FiCarryOver = loadable(
  () => import("../components/Fi/CarryOver"),
  {
    fallback: Loading,
  }
);

export const DocumentManagementPage = loadable(
  () => import("../components/Fi/DocumentManagement"),
  {
    fallback: Loading,
  }
);

export const DocumentTypePage = loadable(
  () => import("../components/Fi/DocumentType"),
  {
    fallback: Loading,
  }
);

export const JournalPage = loadable(() => import("../components/Fi/Journal"), {
  fallback: Loading,
});

export const AccountLedgerPage = loadable(
  () => import("../components/Fi/AccountLedger"),
  {
    fallback: Loading,
  }
);

export const GeneralLedgerPage = loadable(
  () => import("../components/Fi/GeneralLedger"),
  {
    fallback: Loading,
  }
);

export const TotalTrialBalancePage = loadable(
  () => import("../components/Fi/TotalTrialBalance"),
  {
    fallback: Loading,
  }
);

export const IncomeStatementPage = loadable(
  () => import("../components/Fi/IncomeStatement"),
  {
    fallback: Loading,
  }
);

export const BalanceSheetPage = loadable(
  () => import("../components/Fi/BalanceSheet"),
  {
    fallback: Loading,
  }
);
export const BankAccountManagementPage = loadable(
  () => import("../components/Fi/BankAccountManagement"),
  {
    fallback: Loading,
  }
);
export const AccountDetailPage = loadable(
  () => import("../components/Fi/AccountDetail"),
  {
    fallback: Loading,
  }
);
export const EmployeeAccountManagementPage = loadable(
  () => import("../components/Fi/EmployeeAccountManagement"),
  {
    fallback: Loading,
  }
);
export const CardManagementPage = loadable(
  () => import("../components/Fi/CardManagement"),
  {
    fallback: Loading,
  }
);
export const CardAprrovalHistoryPage = loadable(
  () => import("../components/Fi/CardAprrovalHistory"),
  {
    fallback: Loading,
  }
);
export const BillingCurrentStatusPage = loadable(
  () => import("../components/Fi/BillingCurrentStatus"),
  {
    fallback: Loading,
  }
);

export const BillingTypePage = loadable(
  () => import("../components/Fi/BillingType"),
  {
    fallback: Loading,
  }
);

export const CreditFinancialStatusPage = loadable(
  () => import("../components/Fi/CreditFinancialStatus"),
  {
    fallback: Loading,
  }
);

export const CustomerCreditFinancePage = loadable(
  () => import("../components/Fi/CustomerCreditFinance"),
  {
    fallback: Loading,
  }
);

export const CashDisbursementVoucherPage = loadable(
  () => import("../components/Fi/CashDisbursementVoucher"),
  {
    fallback: Loading,
  }
);

export const BillManagementPage = loadable(
  () => import("../components/Fi/BillManagement"),
  {
    fallback: Loading,
  }
);

export const BudgetAllocationPage = loadable(
  () => import("../components/Fi/BudgetAllocation"),
  {
    fallback: Loading,
  }
);

export const FundsPlanningPage = loadable(
  () => import("../components/Fi/FundsPlanning"),
  {
    fallback: Loading,
  }
);

export const BudgetApplicationPage = loadable(
  () => import("../components/Fi/BudgetApplication"),
  {
    fallback: Loading,
  }
);

export const BudgetRevisionPage = loadable(
  () => import("../components/Fi/BudgetRevision"),
  {
    fallback: Loading,
  }
);

export const ExecutiveBudgetComparisonPage = loadable(
  () => import("../components/Fi/ExecutiveBudgetComparison"),
  {
    fallback: Loading,
  }
);

export const DigitalTaxInvoicePage = loadable(
  () => import("../components/Fi/DigitalTaxInvoice"),
  {
    fallback: Loading,
  }
);

export const SumTaxIInvoicesPage = loadable(
  () => import("../components/Fi/SumTaxIInvoices"),
  {
    fallback: Loading,
  }
);

export const VATReportingManagementPage = loadable(
  () => import("../components/Fi/VATReportingManagement"),
  {
    fallback: Loading,
  }
);

export const CertificateRegistrationPage = loadable(
  () => import("../components/Fi/CertificateRegistration"),
  {
    fallback: Loading,
  }
);

export const VATReportingPage = loadable(
  () => import("../components/Fi/VATReporting"),
  {
    fallback: Loading,
  }
);

export const FixedAssetListPage = loadable(
  () => import("../components/Fi/FixedAssetList"),
  {
    fallback: Loading,
  }
);

export const FinancialStatementSettingPage = loadable(
  () => import("../components/Fi/FinancialStatementSetting"),
  {
    fallback: Loading,
  }
);

export const FinancialSystemSettingPage = loadable(
  () => import("../components/Fi/FinancialSystemSetting"),
  {
    fallback: Loading,
  }
);

export const AccountGroupRegisterPage = loadable(
  () => import("../components/Fi/AccountGroupRegister"),
  {
    fallback: Loading,
  }
);

export const DeadLineCarryOverManagementPage = loadable(
  () => import("../components/Fi/DeadLineCarryOverManagement"),
  {
    fallback: Loading,
  }
);
/*Fi END*/

/*CRM Start*/
export const CRMHome = loadable(() => import("../components/CRM/Home"), {
  fallback: Loading,
});
export const CustomerPage = loadable(
  () => import("../components/CRM/Customer"),
  {
    fallback: Loading,
  }
);
export const CustomerCreate = loadable(
  () => import("../components/CRM/CustomerCreate"),
  {
    fallback: Loading,
  }
);
export const CustomerDetail = loadable(
  () => import("../components/CRM/CustomerDetail"),
  {
    fallback: Loading,
  }
);
export const CustomerClass = loadable(
  () => import("../components/CRM/CustomerClass"),
  {
    fallback: Loading,
  }
);
export const Benefit = loadable(() => import("../components/CRM/Benefit"), {
  fallback: Loading,
});
export const BenefitCreate = loadable(
  () => import("../components/CRM/BenefitCreate"),
  {
    fallback: Loading,
  }
);
export const LeadPage = loadable(() => import("../components/CRM/Lead"), {
  fallback: Loading,
});
export const LeadCreate = loadable(
  () => import("../components/CRM/LeadCreate"),
  {
    fallback: Loading,
  }
);
export const LeadDetail = loadable(
  () => import("../components/CRM/LeadDetail"),
  {
    fallback: Loading,
  }
);
/*CRM END*/

/*Sales Start*/
export const Sales = loadable(() => import("./Sales"), {
  fallback: Loading,
});

export const SalesHome = loadable(() => import("../components/Sales/Home"), {
  fallback: Loading,
});

export const SalesPlanningPage = loadable(
  () => import("../components/Sales/SalesPlanning"),
  {
    fallback: Loading,
  }
);
/*Sales END*/
