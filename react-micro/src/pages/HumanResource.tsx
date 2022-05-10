import React from "react";
import { Route } from "react-router-dom";
import {
  HRHome,
  HRAppointment,
  HRManagement,
  HRGroupManage,
  HRInfoDetail,
  HRInfoCreate,
  HRInfoCreated,
  HRAppointmentCreate,
  HRAppointmentDetail,
  HRAppointmentStandards,
  HROrganizationManagement,
  HRProfessionalManagement,
  HRProfessionalDetail,
  HRProfessionalCreate,
  HROrganizationType,
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
    title: "인사 관리",
    path: "/hr/management",
    submenu: [
      {
        title: "인사 정보 관리",
        path: "/hr/management",
      },
      { title: "사원 그룹 관리", path: "/hr/groupManagement" },
      { title: "역량 관리", path: "/hr/abilityManagement" },
      {
        title: "발령 관리",
        path: "/hr/appointment",
      },

      {
        title: "발령 기준 설정",
        path: "/hr/hrAppointmentStandards",
      },
    ],
  },
  {
    icon: "HR/Personnel_Management_Icon",
    title: "조직 관리",
    path: "/hr/hrOrganizationManagement",
    submenu: [
      { title: "조직 정보 관리", path: "/hr/hrOrganizationManagement" },
      {
        title: "직능 관리",
        path: "/hr/hrProfessionalManagement",
      },
      {
        title: "조직 유형 설정 관리",
        path: "/hr/hrOrganizationType",
      },
    ],
  },
  {
    icon: "HR/Personnel_Management_Icon",
    title: "근태 관리",
    path: "/hr/hrEmployeeStatus",
    submenu: [
      { title: "근태 관리", path: "/hr/hrEmployeeStatus" },
      { title: "근무 스케쥴 관리", path: "/hr/hrWorkSchedule" },
      { title: "휴가 관리", path: "/hr/hrLeaveManagement" },
      { title: "근무 유형 설정", path: "/hr/hrWorkManagement" },
      { title: "근무 항목 설정", path: "/hr/hrWorkCategory" },
      { title: "휴가 설정", path: "/hr/hrLeaveSetting" },
      { title: "연월차 설정", path: "/hr/hrLeaveStandard" },
      { title: "휴무일 설정", path: "/hr/hrHdManagement" },
    ],
  },
  {
    icon: "HR/Personnel_Management_Icon",
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
    icon: "HR/Personnel_Management_Icon",

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
      <Route
        path={`${props.match.url}/appointment`}
        component={HRAppointment}
      />
      <Route
        path={`${props.match.url}/abilityManagement`}
        component={AbilityManagement}
      />
      <Route
        path={`${props.match.url}/abilityDetail`}
        component={AbilityDetail}
      />
      <Route
        path={`${props.match.url}/abilityCreate`}
        component={AbilityCreate}
      />
      <Route path={`${props.match.url}/management`} component={HRManagement} />
      <Route
        path={`${props.match.url}/groupManagement`}
        component={HRGroupManage}
      />
      <Route
        path={`${props.match.url}/hrInfoDetail`}
        component={HRInfoDetail}
      />

      <Route
        path={`${props.match.url}/hrInfoCreate`}
        component={HRInfoCreate}
      />
      <Route
        path={`${props.match.url}/hrInfoCreated`}
        component={HRInfoCreated}
      />
      <Route
        path={`${props.match.url}/hrAppointmentCreate`}
        component={HRAppointmentCreate}
      />
      <Route
        path={`${props.match.url}/hrAppointmentDetail`}
        component={HRAppointmentDetail}
      />
      <Route
        path={`${props.match.url}/hrAppointmentStandards`}
        component={HRAppointmentStandards}
      />
      <Route
        path={`${props.match.url}/hrOrganizationManagement`}
        component={HROrganizationManagement}
      />
      <Route
        path={`${props.match.url}/hrOrganizationType`}
        component={HROrganizationType}
      />
      <Route
        path={`${props.match.url}/hrProfessionalManagement`}
        component={HRProfessionalManagement}
      />
      <Route
        path={`${props.match.url}/hrProfessionalDetail`}
        component={HRProfessionalDetail}
      />
      <Route
        path={`${props.match.url}/hrProfessionalCreate`}
        component={HRProfessionalCreate}
      />
      <Route
        path={`${props.match.url}/hrProfessionalHistory`}
        component={HRProfessionalHistory}
      />
      <Route
        path={`${props.match.url}/hrEmployeeStatus`}
        component={EmployeeStatus}
      />
      <Route
        path={`${props.match.url}/hrLeaveManagement`}
        component={LeaveManagement}
      />
      <Route
        path={`${props.match.url}/hrLeaveDetail`}
        component={LeaveDetail}
      />
      <Route
        path={`${props.match.url}/hrWorkCategory`}
        component={WorkCategory}
      />
      <Route
        path={`${props.match.url}/hrLeaveSetting`}
        component={LeaveSetting}
      />
      <Route
        path={`${props.match.url}/hrLeaveSettingDetail`}
        component={LeaveSettingDetail}
      />
      <Route
        path={`${props.match.url}/hrLeaveSettingCreate`}
        component={LeaveSettingCreate}
      />
      <Route
        path={`${props.match.url}/hrWorkManagement`}
        component={WorkManagement}
      />
      <Route
        path={`${props.match.url}/hrWorkManageDetail`}
        component={WorkManagementDetail}
      />
      <Route
        path={`${props.match.url}/hrWorkManageCreate`}
        component={WorkManagementCreate}
      />
      <Route
        path={`${props.match.url}/PromoteLeave`}
        component={PromoteLeave}
      />
      <Route
        path={`${props.match.url}/hrHdManagement`}
        component={HdManagement}
      />
      <Route
        path={`${props.match.url}/hrLeaveStandard`}
        component={LeaveStandardManagement}
      />
      <Route
        path={`${props.match.url}/hrLeaveStandardDetail`}
        component={LeaveStandardDetail}
      />
      <Route
        path={`${props.match.url}/hrWorkSchedule`}
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
    </div>
  );
};

export default HumanResourgcePage;
