import React, { createContext, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "pages/Layout";
import Counter from "store/MobX/CounterStore";

const CounterContext = createContext();

export const useCounter = () => {
  const result = useContext(CounterContext);
  return result;
};

const Root = () => {
  const counter = new Counter();
  return (
    <BrowserRouter>
      <CounterContext.Provider value={counter}>
        <Layout />
      </CounterContext.Provider>
    </BrowserRouter>
  );
};

export default Root;
