import React from "react";
import { Link, Route } from "react-router-dom";
import { LNBArrayProps, ISubmenuProps } from "components/LNB/LNB";
import {
  CRMHome,
  CustomerPage,
  LeadPage,
  CustomerCreate,
  CustomerDetail,
  LeadCreate,
  LeadDetail,
  CustomerClass,
  Benefit,
  BenefitCreate,
  BenefitDetail,
} from "pages";

interface CustomerProps {
  match: any;
  setLNBMenu: (menu: LNBArrayProps[]) => void;
}

const LNBArray = [
  { icon: "Home_Icon", title: "고객", path: "/crm" },
  {
    icon: "CRM/Customer_Icon",
    title: "고객",
    path: "/crm/customerPage",
  },
  {
    icon: "CRM/Lead_Icon",
    title: "리드",
    path: "/crm/lead",
  },
  {
    icon: "CRM/Class_Icon",
    title: "고객 등급 관리",
    path: "/crm/customerClassManagement",
    submenu: [
      {
        title: "고객 등급",
        path: "/crm/customerClassManagement",
      },
      {
        title: "혜택",
        path: "/crm/benefit",
      },
    ],
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
      <Route
        path={`${props.match.url}/customerCreate`}
        component={CustomerCreate}
      />
      <Route
        path={`${props.match.url}/customerDetail`}
        component={CustomerDetail}
      />
      <Route
        path={`${props.match.url}/customerClassManagement`}
        component={CustomerClass}
      />
      <Route path={`${props.match.url}/benefit`} component={Benefit} />
      <Route
        path={`${props.match.url}/benefitCreate`}
        component={BenefitCreate}
      />
      <Route
        path={`${props.match.url}/benefitDetail`}
        component={BenefitDetail}
      />
      <Route path={`${props.match.url}/lead`} component={LeadPage} />
      <Route path={`${props.match.url}/leadCreate`} component={LeadCreate} />
      <Route path={`${props.match.url}/leadDetail`} component={LeadDetail} />
    </div>
  );
};

export default CustomerCare;
