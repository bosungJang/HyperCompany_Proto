import React from "react";
import { Route } from "react-router-dom";
import {
  HRHome,
  Order,
  HRManagement,
  HRGroupManage,
  HRInfoDetail,
  HRInfoCreate,
  HRInfoCreated,
  OrderCreate,
  OrderDetail,
  OrderCreated,
  OrderStandards,
  HROrganizationManagement,
  HRProfessionalManagement,
  HRProfessionalDetail,
  HRProfessionalCreate,
  HROrganizationType,
  HROrganizationHistory,
  HRProfessionalHistory,
  EmployeeStatus,
  LeaveManagement,
  WorkManagement,
  WorkManagementDetail,
  WorkManagementCreate,
  HdManagement,
  LeaveStandardManagement,
  LeaveStandardDetail,
  LeaveDetail,
  LeaveSetting,
  PromoteLeave,
  LeaveSettingDetail,
  LeaveSettingCreate,
  WorkCategory,
  AbilityManagement,
  AbilityDetail,
  AbilityCreate,
  WorkSchedule,
  PayManagement,
  PayCalculation,
  PayCalcSummary,
  PayCalcDetail,
  PayRoll,
  PayStubMail,
  ExtraPayManagement,
  ExtraPayDetail,
  ExtraPayCreate,
  DeductManagement,
  EvaluationDetail,
  DeductDetail,
  DeductCreate,
  ResignationPayManagement,
  ResignationPayDetail,
  CalcResignationPay,
  EvaluationManagement,
  EvaluationResult,
  KPIManagement,
  EvaluationPlan,
  EvaluationPlanDetail,
  EvaluationPlanCreate,
  RaterManagement,
  GoalAndPerformance,
  GoalAndPerformanceDetail,
  GoalAndPerformanceCreate,
  EvaluationEnvironment,
  EvaluationStepDetail,
  EvaluationStepCreate,
  EtcEvaluationDetail,
  EtcEvaluationCreate,
  Evaluation,
  TaxReturnManagement,
  EarnedIncome,
  SubmissionsReview,
  Receipt,
  ReceiptList,
} from "pages";

import { LNBArrayProps, ISubmenuProps } from "components/LNB/LNB";

interface HRProps {
  match: any;
  setLNBMenu: (menu: LNBArrayProps[]) => void;
}

const testArray = [
  { icon: "Home_Icon", title: "인사 홈", path: "/hr" },
  {
    icon: "HR/Personnel_Management_Icon",
    title: "인사 기본 관리",
    path: "/hr/pas/management",
    submenu: [
      {
        title: "인사 정보 관리",
        path: "/hr/pas/management",
      },
      { title: "사원 그룹 관리", path: "/hr/pas/groupManagement" },
      { title: "역량 관리", path: "/hr/pas/abilityManagement" },
      {
        title: "발령 관리",
        path: "/hr/pas/Order",
      },

      {
        title: "발령 기준 설정",
        path: "/hr/pas/OrderStandards",
      },
    ],
  },
  {
    icon: "HR/Organization_Management_Icon",
    title: "조직 관리",
    path: "/hr/orm/OrganizationManagement",
    submenu: [
      { title: "조직 정보 관리", path: "/hr/orm/OrganizationManagement" },
      {
        title: "직능 관리",
        path: "/hr/orm/ProfessionalManagement",
      },
      {
        title: "조직 유형 설정 관리",
        path: "/hr/orm/OrganizationType",
      },
    ],
  },
  {
    icon: "HR/Working_Hours_Management_Icon",
    title: "근태 관리",
    path: "/hr/tam/EmployeeStatus",
    submenu: [
      { title: "근태 관리", path: "/hr/tam/EmployeeStatus" },
      { title: "근무 스케쥴 관리", path: "/hr/tam/WorkSchedule" },
      { title: "휴가 관리", path: "/hr/tam/LeaveManagement" },
      { title: "근무 유형 설정", path: "/hr/tam/WorkManagement" },
      { title: "근무 항목 설정", path: "/hr/tam/WorkCategory" },
      { title: "휴가 설정", path: "/hr/tam/LeaveSetting" },
      { title: "연월차 설정", path: "/hr/tam/LeaveStandard" },
      { title: "휴무일 설정", path: "/hr/tam/HdManagement" },
    ],
  },
  {
    icon: "HR/Salary_Icon",
    title: "급여 관리",
    path: "/hr/PayManagement",
    submenu: [
      { title: "급여 계산/관리", path: "/hr/PayManagement" },
      { title: "퇴직금 계산/관리", path: "/hr/ResignationPayManagement" },
      { title: "수당/지급설정", path: "/hr/ExtraPayManagement" },
      { title: "공제 설정", path: "/hr/DeductManagement" },
    ],
  },
  {
    icon: "HR/Performance_Icon",

    title: "연말 정산",
    path: "/hr/TaxReturnManagement",
    submenu: [
      { title: "연말 정산 관리", path: "/hr/TaxReturnManagement" },
      { title: "원천징수 영수증", path: "/hr/ReceiptList" },
    ],
  },
  {
    icon: "HR/Performance_Icon",

    title: "성과 및 평가",
    path: "/hr/EvaluationManagement",
    submenu: [
      { title: "목표  및 성과 관리", path: "/hr/GoalAndPerformance" },
      { title: "KPI 관리", path: "/hr/KPIManagement" },
      { title: "평가 관리", path: "/hr/EvaluationManagement" },
      { title: "평가자 관리", path: "/hr/RaterManagement" },
      { title: "평가 계획", path: "/hr/EvaluationPlan" },
      { title: "평가 환경 설정", path: "/hr/EvaluationEnvironment" },
    ],
  },
];

const HumanResourgcePage = (props: HRProps) => {
  React.useEffect(() => {
    props.setLNBMenu(testArray);
  }, []);
  return (
    <div>
      <Route exact path={props.match.url} component={HRHome} />
      <Route path={`${props.match.url}/pas/Order`} component={Order} />
      <Route
        path={`${props.match.url}/pas/abilityManagement`}
        component={AbilityManagement}
      />
      <Route
        path={`${props.match.url}/pas/abilityDetail`}
        component={AbilityDetail}
      />
      <Route
        path={`${props.match.url}/pas/abilityCreate`}
        component={AbilityCreate}
      />
      <Route
        path={`${props.match.url}/pas/management`}
        component={HRManagement}
      />
      <Route
        path={`${props.match.url}/pas/groupManagement`}
        component={HRGroupManage}
      />
      <Route
        path={`${props.match.url}/pas/hrInfoDetail`}
        component={HRInfoDetail}
      />

      <Route
        path={`${props.match.url}/pas/hrInfoCreate`}
        component={HRInfoCreate}
      />
      <Route
        path={`${props.match.url}/pas/hrInfoCreated`}
        component={HRInfoCreated}
      />
      <Route
        path={`${props.match.url}/pas/OrderCreate`}
        component={OrderCreate}
      />
      <Route
        path={`${props.match.url}/pas/OrderDetail`}
        component={OrderDetail}
      />
      <Route
        path={`${props.match.url}/pas/OrderCreated`}
        component={OrderCreated}
      />
      <Route
        path={`${props.match.url}/pas/OrderStandards`}
        component={OrderStandards}
      />
      <Route
        path={`${props.match.url}/orm/OrganizationManagement`}
        component={HROrganizationManagement}
      />
      <Route
        path={`${props.match.url}/orm/OrganizationHistory`}
        component={HROrganizationHistory}
      />
      <Route
        path={`${props.match.url}/orm/OrganizationType`}
        component={HROrganizationType}
      />
      <Route
        path={`${props.match.url}/orm/ProfessionalManagement`}
        component={HRProfessionalManagement}
      />
      <Route
        path={`${props.match.url}/orm/ProfessionalDetail`}
        component={HRProfessionalDetail}
      />
      <Route
        path={`${props.match.url}/orm/ProfessionalCreate`}
        component={HRProfessionalCreate}
      />
      <Route
        path={`${props.match.url}/orm/ProfessionalHistory`}
        component={HRProfessionalHistory}
      />
      <Route
        path={`${props.match.url}/tam/EmployeeStatus`}
        component={EmployeeStatus}
      />
      <Route
        path={`${props.match.url}/tam/LeaveManagement`}
        component={LeaveManagement}
      />
      <Route
        path={`${props.match.url}/tam/LeaveDetail`}
        component={LeaveDetail}
      />
      <Route
        path={`${props.match.url}/tam/WorkCategory`}
        component={WorkCategory}
      />
      <Route
        path={`${props.match.url}/tam/LeaveSetting`}
        component={LeaveSetting}
      />
      <Route
        path={`${props.match.url}/tam/LeaveSettingDetail`}
        component={LeaveSettingDetail}
      />
      <Route
        path={`${props.match.url}/tam/LeaveSettingCreate`}
        component={LeaveSettingCreate}
      />
      <Route
        path={`${props.match.url}/tam/WorkManagement`}
        component={WorkManagement}
      />
      <Route
        path={`${props.match.url}/tam/WorkManageDetail`}
        component={WorkManagementDetail}
      />
      <Route
        path={`${props.match.url}/tam/WorkManageCreate`}
        component={WorkManagementCreate}
      />
      <Route
        path={`${props.match.url}/tam/PromoteLeave`}
        component={PromoteLeave}
      />
      <Route
        path={`${props.match.url}/tam/HdManagement`}
        component={HdManagement}
      />
      <Route
        path={`${props.match.url}/tam/LeaveStandard`}
        component={LeaveStandardManagement}
      />
      <Route
        path={`${props.match.url}/tam/LeaveStandardDetail`}
        component={LeaveStandardDetail}
      />
      <Route
        path={`${props.match.url}/tam/WorkSchedule`}
        component={WorkSchedule}
      />
      <Route
        path={`${props.match.url}/PayManagement`}
        component={PayManagement}
      />
      <Route
        path={`${props.match.url}/PayCalculation`}
        component={PayCalculation}
      />
      <Route
        path={`${props.match.url}/PayCalcSummary`}
        component={PayCalcSummary}
      />
      <Route
        path={`${props.match.url}/PayCalcDetail`}
        component={PayCalcDetail}
      />
      <Route path={`${props.match.url}/PayRoll`} component={PayRoll} />
      <Route path={`${props.match.url}/PayStubMail`} component={PayStubMail} />
      <Route
        path={`${props.match.url}/ExtraPayManagement`}
        component={ExtraPayManagement}
      />
      <Route
        path={`${props.match.url}/ExtraPayDetail`}
        component={ExtraPayDetail}
      />
      <Route
        path={`${props.match.url}/ExtraPayCreate`}
        component={ExtraPayCreate}
      />
      <Route
        path={`${props.match.url}/DeductManagement`}
        component={DeductManagement}
      />
      <Route
        path={`${props.match.url}/DeductDetail`}
        component={DeductDetail}
      />
      <Route
        path={`${props.match.url}/DeductCreate`}
        component={DeductCreate}
      />
      <Route
        path={`${props.match.url}/ResignationPayManagement`}
        component={ResignationPayManagement}
      />
      <Route
        path={`${props.match.url}/ResignationPayDetail`}
        component={ResignationPayDetail}
      />
      <Route
        path={`${props.match.url}/CalcResignationPay`}
        component={CalcResignationPay}
      />
      <Route
        path={`${props.match.url}/EvaluationDetail`}
        component={EvaluationDetail}
      />
      <Route
        path={`${props.match.url}/EvaluationResult`}
        component={EvaluationResult}
      />
      <Route
        path={`${props.match.url}/EvaluationManagement`}
        component={EvaluationManagement}
      />
      <Route
        path={`${props.match.url}/KPIManagement`}
        component={KPIManagement}
      />
      <Route
        path={`${props.match.url}/EvaluationPlan`}
        component={EvaluationPlan}
      />
      <Route
        path={`${props.match.url}/EvaluationPlanDetail`}
        component={EvaluationPlanDetail}
      />
      <Route
        path={`${props.match.url}/EvaluationPlanCreate`}
        component={EvaluationPlanCreate}
      />
      <Route
        path={`${props.match.url}/GoalAndPerformance`}
        component={GoalAndPerformance}
      />
      <Route
        path={`${props.match.url}/RaterManagement`}
        component={RaterManagement}
      />
      <Route
        path={`${props.match.url}/GoalAndPerformanceDetail`}
        component={GoalAndPerformanceDetail}
      />
      <Route
        path={`${props.match.url}/GoalAndPerformanceCreate`}
        component={GoalAndPerformanceCreate}
      />
      <Route
        path={`${props.match.url}/EvaluationEnvironment`}
        component={EvaluationEnvironment}
      />
      <Route
        path={`${props.match.url}/EvaluationStepDetail`}
        component={EvaluationStepDetail}
      />
      <Route
        path={`${props.match.url}/EvaluationStepCreate`}
        component={EvaluationStepCreate}
      />
      <Route
        path={`${props.match.url}/EtcEvaluationDetail`}
        component={EtcEvaluationDetail}
      />
      <Route
        path={`${props.match.url}/EtcEvaluationCreate`}
        component={EtcEvaluationCreate}
      />
      <Route path={`${props.match.url}/Evaluation`} component={Evaluation} />
      <Route
        path={`${props.match.url}/TaxReturnManagement`}
        component={TaxReturnManagement}
      />
      <Route
        path={`${props.match.url}/EarnedIncome`}
        component={EarnedIncome}
      />
      <Route
        path={`${props.match.url}/SubmissionsReview`}
        component={SubmissionsReview}
      />
      <Route path={`${props.match.url}/Receipt`} component={Receipt} />
      <Route path={`${props.match.url}/ReceiptList`} component={ReceiptList} />
    </div>
  );
};

export default HumanResourgcePage;
