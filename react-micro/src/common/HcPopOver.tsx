import React, { CSSProperties } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  background: #ffffff;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1201;
  padding: 28px 40px;
  transition: all 0.3s ease-out;
  &.open {
    width: 574px;
    div {
      opacity: 1;
    }
  }

  &.close {
    width: 0px;
    visibility: hidden;
    div {
      opacity: 0;
    }
  }
`;
const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.2;
  z-index: 1200;
`;

const HeaderWrapper = styled.div`
  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
  }
  margin-bottom: 27px;
`;

const ChildWrapper = styled.div`
  height: 100%;
`;

interface PopOverIProps {
  titleName?: string;
  style?: CSSProperties;
  isPopOver: boolean;
  setIsPopOver: (value: boolean) => void;
}
function useOutsideClick(ref: any, setIsPopOver: (open: boolean) => void) {
  function handleClickOutside(event: MouseEvent): void {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsPopOver(false);
    }
  }

  React.useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

const HcPopOver: React.FC<PopOverIProps> = ({ titleName, ...props }) => {
  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, props.setIsPopOver);

  React.useEffect(() => {
    return () => {
      if (props.isPopOver === false) {
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
      } else {
        document.getElementsByTagName("body")[0].style.overflow = "auto";
      }
    };
  }, [props.isPopOver]);

  return (
    <>
      <Wrapper
        ref={props.isPopOver === false ? null : wrapperRef}
        className={props.isPopOver ? "open" : "close"}
      >
        {titleName ? (
          <HeaderWrapper>
            <span>{titleName}</span>
          </HeaderWrapper>
        ) : null}

        <ChildWrapper>{props.children}</ChildWrapper>
      </Wrapper>
      {props.isPopOver ? <Mask /> : null}
    </>
  );
};

export default HcPopOver;
