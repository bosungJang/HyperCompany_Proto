import React from "react";
import { Link, Route } from "react-router-dom";
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
  HROrganizationManagemetnt,
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
} from "pages";
import { RouteComponentProps } from "react-router-dom";
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
    path: "/hr/hrOrganizationManagemetnt",
    submenu: [
      { title: "조직 정보 관리", path: "/hr/hrOrganizationManagemetnt" },
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
    submenu: [{ title: "급여 계산/관리", path: "/hr/PayManagement" }],
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
        path={`${props.match.url}/hrOrganizationManagemetnt`}
        component={HROrganizationManagemetnt}
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
    </div>
  );
};

export default HumanResourgcePage;
