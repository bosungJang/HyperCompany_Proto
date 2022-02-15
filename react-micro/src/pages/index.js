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

export const HRAppointment = loadable(
  () => import("../components/HR/Appointment"),
  {
    fallback: Loading,
  }
);

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
export const HRAppointmentCreate = loadable(
  () => import("../components/HR/HRAppointmentCreate"),
  {
    fallback: Loading,
  }
);
export const HRAppointmentDetail = loadable(
  () => import("../components/HR/HRAppointmentDetail"),
  {
    fallback: Loading,
  }
);
export const HRAppointmentStandards = loadable(
  () => import("../components/HR/HRAppointmentStandards"),
  {
    fallback: Loading,
  }
);
export const HROrganizationManagemetnt = loadable(
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
export const HROrganizationType = loadable(
  () => import("../components/HR/OrganizationType"),
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
export const WorkManagementDetail = loadable(
  () => import("../components/HR/WorkManagementDetail"),
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
export const LeaveStandardManagement = loadable(
  () => import("../components/HR/LeaveStandardManagement"),
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
/*CRM END*/
