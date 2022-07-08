import React from "react";
import { Link, Route } from "react-router-dom";
import { LNBArrayProps, ISubmenuProps } from "components/LNB/LNB";
import { SalesHome, SalesPlanningPage } from "pages";

interface SalesProps {
  match: any;
  setLNBMenu: (menu: LNBArrayProps[]) => void;
  forwardRef?: any;
  setTopTitle: (value: string) => void;
}

const testArray = [
  { icon: "Home_Icon", title: "영업 홈", path: "/sales" },
  { icon: "Sales/Customer_Care_Icon", title: "고객", path: "/sales/customer" },
  {
    icon: "Sales/Managing_Sales_Opportunities_Icon",
    title: "영업 기회 관리",
    path: "/sales/salesOpportunitiesManagement/salesPlanning",
    submenu: [
      {
        title: "영업 기획",
        path: "/sales/salesOpportunitiesManagement/salesPlanning",
      },
      {
        title: "영업 활동",
        path: "/sales/salesOpportunitiesManagement/salesOperation",
      },
    ],
  },
  {
    icon: "Sales/Contract_Management_Icon",
    title: "견적 / 계약 관리",
    path: "/sales/contractManagement/quotation",
    submenu: [
      {
        title: "견적",
        path: "/sales/contractManagement/quotation",
      },
      {
        title: "계약",
        path: "/sales/contractManagement/contract",
      },
    ],
  },
  {
    icon: "Sales/SlaesCollection_Management_Icon",
    title: "매출 / 수금 관리",
    path: "/sales/salesAndCollectionManagement/sales",
    submenu: [
      {
        title: "매출",
        path: "/sales/salesAndCollectionManagement/sales",
      },
      {
        title: "수금",
        path: "/sales/salesAndCollectionManagement/collection",
      },
    ],
  },
];

const Sales = React.forwardRef((props: SalesProps, ref) => {
  React.useEffect(() => {
    props.setLNBMenu(testArray);
    props.setTopTitle("재무");
  }, []);

  return (
    <div style={{ width: "inherit" }}>
      <Route exact path={props.match.url} component={SalesHome} />
      <Route
        path={`${props.match.url}/salesOpportunitiesManagement/salesPlanning`}
        component={SalesPlanningPage}
      />
    </div>
  );
});

export default Sales;
