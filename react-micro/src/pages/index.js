import React from "react";
import loadable from "@loadable/component";

const Loading = <div>Loading...</div>;

export const Home = loadable(() => import("./Home"), {
  fallback: Loading,
});

export const About = loadable(() => import("./About"), {
  fallback: Loading,
});

export const Posts = loadable(() => import("./Posts"), {
  fallback: Loading,
});

export const Post = loadable(() => import("../components/Post"), {
  fallback: Loading,
});

export const Table = loadable(() => import("./Table"), {
  fallback: Loading,
});

export const Test = loadable(() => import("./TestPage"), {
  fallback: Loading,
});

export const Finance = loadable(() => import("./Finance"), {
  fallback: Loading,
});

export const HumanResource = loadable(() => import("./HumanResource"), {
  fallback: Loading,
});

/*HR START*/
export const HRHome = loadable(() => import("../components/HR/Home"), {
  fallback: Loading,
});

export const HRAppointment = loadable(
  () => import("../components/HR/Appointment"),
  {
    fallback: Loading,
  }
);

export const HRManagement = loadable(
  () => import("../components/HR/Management"),
  {
    fallback: Loading,
  }
);
/*HR END*/

/*Fi START*/
export const FiHome = loadable(() => import("../components/Fi/Home"), {
  fallback: Loading,
});

export const FiAccountManagement = loadable(
  () => import("../components/Fi/AccountManagement"),
  {
    fallback: Loading,
  }
);
/*Fi END*/
