import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import HcButton from "common/HcButton";
import { ReactComponent as ExitIcon } from "../../fonts/images/ExitIcon.svg";

const ToastItemWrapper = styled.div`
  min-width: 341px;
  height: 46px;
  padding: 12px 24px;
  padding-right: 12px;
  background: #2d2d31;
  color: #ffffff;
  border-radius: 30px;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 40px;
  text-align: left;

  &:nth-child(n + 2) {
    margin-bottom: 10px;
  }
`;
const ExitIconWrapper = styled.div`
  float: right;
  display: flex;
  align-items: center;

  div {
    display: inline-block;
    margin-right: 17px;
    margin-left: 11px;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    color: #cecece;
    cursor: pointer;
  }

  svg {
    cursor: pointer;
    &:hover {
      circle {
        transition: fill 0.3s ease;
        fill: #a7a7a7;
      }
    }
    &:active {
      circle {
        transition: fill 0.3s ease;
        fill: #5d5d62;
      }
    }
  }
`;

const AnimatedToastItem = animated(ToastItemWrapper);

const ToastItem = ({ message, clear, cancelAction }) => {
  const timer = useRef();
  const [isShow, setIsShow] = useState(false);

  const transition = useTransition(isShow, {
    from: { opacity: 0, transform: "translateY(10px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(10px)" },
  });

  useEffect(() => {
    timer.current = setTimeout(() => setIsShow(true), 0);
  }, []);

  useEffect(() => {
    if (isShow) {
      setTimeout(() => {
        setIsShow(false);
        clearTimeout(timer.current);
        clear();
      }, 100000);
    }
  }, [isShow, clear]);

  const cancelClicked = (cancelAction) => {
    if (cancelAction === "test") {
      alert("cancelBtn Clicked");
    }
  };

  return transition(
    (style, isShow) =>
      isShow && (
        <AnimatedToastItem style={style}>
          <span>{message}</span>

          <ExitIconWrapper>
            <div
              style={{
                width: 1,
                height: 15,
                background: "#838181",
                display: "inline-block",
              }}
            ></div>
            <div
              onClick={() => {
                cancelClicked(cancelAction);
                setIsShow(false);
                clearTimeout(timer.current);
                clear();
              }}
            >
              실행 취소
            </div>
            <ExitIcon
              onClick={() => {
                setIsShow(false);
                clearTimeout(timer.current);
                clear();
              }}
            />
          </ExitIconWrapper>
        </AnimatedToastItem>
      )
  );
};

export default ToastItem;
