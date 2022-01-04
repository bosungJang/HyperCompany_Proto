import React, { createContext, useState } from "react";
import uniqid from "uniqid";

import ToastList from "./ToastList";

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toastList, setToastList] = useState({});

  const message = (newMessage, cancelAction) => {
    setToastList((prevState) => ({
      ...prevState,
      [uniqid()]: { message: newMessage, cancelAction: cancelAction },
    }));
  };

  const clear = (id) =>
    setToastList((prevState) => {
      delete prevState[id];
      return prevState;
    });

  return (
    <ToastContext.Provider value={{ message }}>
      {children}
      <ToastList toastList={toastList} clear={clear} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
