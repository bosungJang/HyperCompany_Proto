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

  &:hover {
    svg {
      circle {
        transition: fill 0.3s ease;
        fill: #a7a7a7;
      }
    }
  }
  &:active {
    svg {
      circle {
        transition: fill 0.3s ease;
        fill: #5d5d62;
      }
    }
  }
`;

const AnimatedToastItem = animated(ToastItemWrapper);

const ToastItem = ({ message, clear }) => {
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

  return transition(
    (style, isShow) =>
      isShow && (
        <AnimatedToastItem style={style}>
          <span>{message}</span>
          <ExitIconWrapper>
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
