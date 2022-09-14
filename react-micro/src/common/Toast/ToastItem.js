import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { animated, useTransition } from "react-spring";
import HcButton from "common/HcButton";
import { ReactComponent as ExitIcon } from "../../resources/images/ExitIcon.svg";

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
const ToastAdvWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 12px;
  width: fit-content;
  height: 44px;
  background: #2d2d31;
  border-radius: 3px;
`;
const ExitIconWrapper = styled.div`
  float: right;
  display: flex;
  align-items: center;

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

const CancelBtnWrapper = styled.div`
  width: 60px;
  height: 24px;
  line-height: 24px;
  display: inline-block;
  margin-right: 8px;
  margin-left: 8px;
  text-align: center;
  border-radius: 2px;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: #cecece;
  cursor: pointer;

  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #cecece;
    color: #ffffff;
  }
  &:active {
    background: #a7a7a7;
    color: #ffffff;
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
      }, 5000);
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
            <CancelBtnWrapper
              onClick={() => {
                cancelClicked(cancelAction);
                setIsShow(false);
                clearTimeout(timer.current);
                clear();
              }}
            >
              실행 취소
            </CancelBtnWrapper>
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
const AnimatedToastAdv = animated(ToastAdvWrapper);
const ToastAdv = ({ message, clear, cancelAction }) => {
  const timer = useRef();
  const [isShow, setIsShow] = useState(false);

  const transition = useTransition(isShow, {
    from: { opacity: 0, transform: "translateX(-10px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(-10px)" },
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
      }, 5000);
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
            <CancelBtnWrapper
              onClick={() => {
                cancelClicked(cancelAction);
                setIsShow(false);
                clearTimeout(timer.current);
                clear();
              }}
            >
              실행 취소
            </CancelBtnWrapper>
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
