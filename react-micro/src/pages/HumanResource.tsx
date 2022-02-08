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
      { title: "사원 그룹 관리", path: "/hr/groupManagement" },
      {
        title: "발령 관리",
        path: "/hr/appointment",
      },
      {
        title: "인사 정보 관리",
        path: "/hr/management",
      },
      {
        title: "사원 그룹 관리",
        path: "/hr/groupManagement",
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
    </div>
  );
};

export default HumanResourgcePage;
