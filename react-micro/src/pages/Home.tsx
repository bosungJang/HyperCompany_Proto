import React from "react";

import Counter from "components/counter/Counter";
import { useCounter } from "router/Root";
import HcTabs from "common/HcTabs";

const Home = () => {
  const myCounter = useCounter();
  return (
    <div>
      <h2>홈</h2>
      <Counter counter={myCounter} />
      <div>
        <br />
        <HcTabs
          items={[
            { to: "1", name: "Tab 1" },
            { to: "2", name: "Tab 2" },
            { to: "3", name: "Tab 3 Tab 3 Tab 3 Tab 3" },
            { to: "notNumber", name: "Not Number" },
            { to: "5", name: "Tab 5" },
          ]}
          size="normal"
        />
        <br />
        <HcTabs
          items={[
            { to: "1", name: "Tab 1" },
            { to: "2", name: "Tab 2" },
            { to: "3", name: "Tab 3 Tab 3 Tab 3 Tab 3" },
            { to: "notNumber", name: "Not Number" },
            { to: "5", name: "Tab 5" },
          ]}
          size="small"
        />
      </div>
    </div>
  );
};

export default Home;
