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
    title: "발령 관리",
    path: "/hr/appointment",
  },
  {
    icon: "HR/Personnel_Management_Icon",
    title: "인사 정보 관리",
    path: "/hr/management",
  },
  {
    icon: "HR/Personnel_Management_Icon",
    title: "사원 그룹 관리",
    path: "/hr/groupManagement",
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
    </div>
  );
};

export default HumanResourgcePage;
