import React from "react";
import { Link, Route } from "react-router-dom";
import { LNBArrayProps, ISubmenuProps } from "components/LNB/LNB";
import { CRMHome, CustomerPage } from "pages";

interface CustomerProps {
  match: any;
  setLNBMenu: (menu: LNBArrayProps[]) => void;
}

const LNBArray = [
  { icon: "Home_Icon", title: "고객 관리 홈", path: "/crm" },
  {
    icon: "HR/Personnel_Management_Icon",
    title: "고객",
    path: "/crm/customerPage",
  },
  {
    icon: "HR/Personnel_Management_Icon",
    title: "로열티 등급 관리",
    path: "/crm/royaltyManagement",
  },
];

const CustomerCare = (props: CustomerProps) => {
  React.useEffect(() => {
    props.setLNBMenu(LNBArray);
  }, []);

  return (
    <div style={{ width: "inherit" }}>
      <Route exact path={props.match.url} component={CRMHome} />
      <Route
        path={`${props.match.url}/customerPage`}
        component={CustomerPage}
      />
    </div>
  );
};

export default CustomerCare;
