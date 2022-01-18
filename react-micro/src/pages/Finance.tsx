import React from "react";
import { Link, Route } from "react-router-dom";
import { FiHome, FiAccountManagement } from "pages";
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
    path: "/fi/basicInfoManagement",
    submenu: [
      {
        title: "계정과목관리",
        path: "/fi/basicInfoManagement/accountManagement",
      },
      { title: "초기이월입력", path: "/fi/basicInfoManagement/" },
    ],
  },
];

const Finance = (props: FinanceProps) => {
  React.useEffect(() => {
    props.setLNBMenu(testArray);
  }, []);
  return (
    <div>
      <Route exact path={props.match.url} component={FiHome} />
      <Route
        path={`${props.match.url}/basicInfoManagement`}
        component={FiAccountManagement}
      />
    </div>
  );
};

export default Finance;
