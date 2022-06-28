import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Title } from "common/HcTextField";
interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Styled_Slide = styled(Slider)`
  .slick-list {
    //카드3개 보여지는 컨테이너 크기
    width: 1170px;

    margin: 0 auto;
    overflow: hidden;
  }
  .slick-slider sc-cCcXHH kSJlQb slick-initialized {
    width: 1250px;
  }
  .slick-dots {
    margin-bottom: -5px;
    display: flex;
    button::before {
      color: none;
      opacity: 0;
    }
    li {
      width: 8px;
      height: 8px;
      background: #d9d9d9;
      color: #d9d9d9;
      border-radius: 16px;
      &:hover {
        background: #838181;
      }
      button {
        opacity: 0;
        padding-top: 0px;
      }
      button::before {
        opacity: 0;
        padding-top: 0px;
      }
    }
    .slick-active {
      width: 24px;
      height: 8px;

      margin-left: 5px;
      color: #257cff;
      border-radius: 16px;
      background: #257cff;
      &:hover {
        background: #257cff;
      }
      button {
        display: none;
      }
    }
  }
`;
const Profile = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 21px;
  left: 21px;
  border-radius: 50%;
  border: 2px solid #257cff;
`;
const Name = styled(Title)`
  color: #2d2d31;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
`;
const Info = styled(Title)`
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #5d5d62;
  position: absolute;
  top: 53px;
  left: 113px;
`;
const Position = styled(Title)`
  color: #5d5d62;
  font-size: 13px;
  display: flex;
  position: absolute;
  top: 108px;
  left: 22px;
  font-weight: 500;
`;
const Chip = styled.div<{ type?: string }>`
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
  padding: 3px 12px 3px;
  line-height: 15px;
  float: left;
  height: 26px;
  margin-right: 6px;
  font-family: Noto Sans KR;
  font-size: 13px;
  box-sizing: border-box;
  border-radius: 24px;
  ${(props) =>
    props.type === "1"
      ? "color:#5D5D62; border: 1px solid #838181;"
      : "color : white;"}

  background: ${(props) =>
    props.type === "1" ? "white" : props.type === "2" ? "#FDA95C" : "#5AC4CB"};
`;
const CandidateUl = styled.ul`
  margin: 14px 0px 0px 0px;
  padding: 0;
  height: 431px;
  overflow: hidden;
  li {
    position: relative;
    padding-top: 13px;
    width: 310px;
    height: 135px;
    background: #f9f9f9;
    border-radius: 4px;
  }
  li:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;
const HcSlider = (props: any) => {
  function PrevArrow({ onClick }: ArrowProps) {
    return (
      <div
        onClick={onClick}
        style={{
          width: 32,
          height: 32,
          display: "left",
          position: "absolute",
          marginTop: props.size === "medium" ? 94 : 288,
          marginLeft: 32,
        }}
      >
        <svg
          width="14"
          height="22"
          viewBox="0 0 14 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.7269 1.41445C11.9459 0.633397 10.6796 0.633397 9.89852 1.41445L1.43905 9.87391C1.43029 9.88237 1.42158 9.89092 1.41294 9.89956C0.631887 10.6806 0.631888 11.9469 1.41294 12.728L9.89822 21.2133C10.6793 21.9943 11.9456 21.9943 12.7266 21.2133C13.5077 20.4322 13.5077 19.1659 12.7266 18.3848L5.65581 11.314L12.7269 4.24287C13.508 3.46182 13.508 2.19549 12.7269 1.41445Z"
            fill="black"
          />
        </svg>
      </div>
    );
  }
  function NextArrow({ onClick }: ArrowProps) {
    return (
      <div
        onClick={onClick}
        style={{
          width: 32,
          height: 32,
          display: "left",
          position: "absolute",
          marginTop: props.size === "medium" ? -110 : -330,
          marginLeft: 1246,
        }}
      >
        <svg
          width="14"
          height="22"
          viewBox="0 0 14 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.27306 20.5856C2.0541 21.3666 3.32043 21.3666 4.10148 20.5856L12.561 12.1261C12.5697 12.1176 12.5784 12.1091 12.5871 12.1004C13.3681 11.3194 13.3681 10.0531 12.5871 9.27201L4.10178 0.786728C3.32074 0.00567967 2.05441 0.00567889 1.27336 0.786727C0.492309 1.56778 0.492309 2.83411 1.27336 3.61515L8.34419 10.686L1.27306 17.7571C0.492007 18.5382 0.492007 19.8045 1.27306 20.5856Z"
            fill="black"
          />
        </svg>
      </div>
    );
  }

  const [state, setState] = React.useState({
    oldSlide: 0,
    activeSlide: 0,
    now: 0,
  });
  const Card = styled.div`
    background: #ffffff;
    border: 1px solid #cecece;
    border-radius: 4px;
    width: 350px;
    padding: 16px 20px 16px 20px;
    margin: 3px 30px 3px 30px;
    position: relative;
  `;

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    style: { innerHeight: props.size === "medium" ? "220px" : "607px" },

    afterChange: (current: number) => setState({ ...state, now: current }),
  };
  const styles = {
    "1st": {
      color: "#E7A600",
      backgroundColor: "#FFF4D8",
      border: "1px solid #E7A600",
    },
    "2nd": {
      color: "#5799FB",
      backgroundColor: "#DFECFF",
      border: "1px solid #5799FB",
    },
    "3rd": {
      color: "#ED6262",
      backgroundColor: "#FFE2E2",
      border: "1px solid #ED6262",
    } as React.CSSProperties,
  };
  return (
    <>
      <Styled_Slide {...settings}>
        {props.data.map((x: any) => (
          <div>
            {props.size === "medium" ? (
              <Card style={{ height: "220px" }}>
                <Profile src="" />
                <Name
                  style={{ position: "absolute", top: "20px", left: "113px" }}
                >
                  {x.name}
                </Name>
                <Info>AB 본부 / Marketin실 기술지원 1팀</Info>
                <div style={{ marginTop: "94px" }}>
                  <Position>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.7071 18.2922C12.3166 18.6827 11.6834 18.6827 11.2929 18.2922C10.9024 17.9017 10.9024 17.2685 11.2929 16.878L15.1716 12.9993H6C5.44772 12.9993 5 12.5516 5 11.9993C5 11.447 5.44772 10.9993 6 10.9993H15.3135L11.2928 6.97859C10.9023 6.58807 10.9023 5.9549 11.2928 5.56438C11.6833 5.17385 12.3165 5.17385 12.707 5.56438L18.3509 11.2083L18.364 11.2211C18.7545 11.6116 18.7545 12.2448 18.364 12.6353L18.3638 12.6354L12.7071 18.2922Z"
                        fill="#5D5D62"
                      />
                    </svg>
                    {x.organization} /{x.position} / {x.responsibility}
                  </Position>
                  <div style={{ marginTop: 125, whiteSpace: "pre" }}>
                    {x.ability.map((item: any) => (
                      <Chip type={String((x.ability.indexOf(item) % 3) + 1)}>
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
              </Card>
            ) : (
              <Card style={{ height: "617px", display: "block" }}>
                <div>
                  <Position style={{ position: "static" }}>
                    {x.organization} /{x.position} / {x.responsibility}
                  </Position>
                  <div
                    style={{
                      margin: "15px 0px 12px 0px",
                      whiteSpace: "pre",
                      height: 68,
                    }}
                  >
                    {x.ability.map((item: any) => (
                      <Chip type={String((x.ability.indexOf(item) % 3) + 1)}>
                        {item}
                      </Chip>
                    ))}
                  </div>
                </div>
                <Title
                  style={{
                    color: "#818181",
                    fontSize: "12px",
                  }}
                >
                  후보자
                </Title>
                <CandidateUl>
                  <li>
                    <Profile
                      src=""
                      style={{ width: 50, height: 50, top: 14, left: 14 }}
                    />

                    <Name
                      style={{
                        margin: "0px 0px 0px 80px",
                        color: "#5D5D62",
                        fontSize: "14px",
                      }}
                    >
                      이지원
                    </Name>
                    <Title
                      style={{
                        margin: "2px 0px 16px 81px",
                        color: "#838181",
                        fontSize: "10px",
                      }}
                    >
                      PM 본부 / Product 1실 / Product 1팀 / 매니저
                    </Title>
                    <div style={{ marginLeft: 80 }}>
                      {" "}
                      {x.ability.slice(0, 3).map((item: any) => (
                        <Chip
                          type={"1"}
                          style={{ height: 22, fontSize: "10px" }}
                        >
                          {item} 60%
                        </Chip>
                      ))}
                    </div>
                  </li>
                </CandidateUl>
              </Card>
            )}
          </div>
        ))}
      </Styled_Slide>
    </>
  );
};

export default HcSlider;
