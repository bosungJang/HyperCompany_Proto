import React from "react";
import { Link, Route } from "react-router-dom";
import { HRHome, HRAppointment, HRManagement, HRGroupManage } from "pages";
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
    title: "인사관리",
    path: "/hr/appointment",
  },
  {
    icon: "HR/Personnel_Management_Icon",
    title: "인사정보관리",
    path: "/hr/management",
  },
  {
    icon: "HR/Personnel_Management_Icon",
    title: "사원그룹관리",
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
    </div>
  );
};

export default HumanResourgcePage;
