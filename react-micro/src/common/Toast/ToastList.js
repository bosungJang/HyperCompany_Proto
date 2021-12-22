import React from "react";
import styled from "styled-components";

import ToastItem from "./ToastItem";

const ToastListWrapper = styled.div`
  display: flex;
  flex-flow: column-reverse nowrap;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
`;

const ToastList = ({ toastList, clear }) => {
  return (
    <ToastListWrapper>
      {Object.entries(toastList).map(([id, message]) => (
        <ToastItem message={message} key={id} clear={() => clear(id)} />
      ))}
    </ToastListWrapper>
  );
};

export default ToastList;
