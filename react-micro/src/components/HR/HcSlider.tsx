import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export function NextArrow({ onClick }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 32,
        height: 32,
        display: "left",
        position: "absolute",
        marginTop: -125,
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
export function PrevArrow({ onClick }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 32,
        height: 32,
        display: "left",
        position: "absolute",
        marginTop: 94,
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

  .slick-dots li.slick-active button:before,
  .slick-dots li.slick-active button:after {
    background-color: #257cff;
    width: 24px;
    height: 8px;
    color: #00000;
    border-radius: 17px;
  }
`;
const Chip = styled.div`
  // display: flex;
  // flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 12px 3px;
  line-height: 19px;
  float: left;
  height: 26px;

  background: #dfecff;
  font-family: Noto Sans KR;
  font-size: 13px;
  border: 1px solid #5799fb;
  box-sizing: border-box;
  border-radius: 24px;
`;
const HcSlider = (props: any) => {
  //height: "medium" | "large"
  const data = Array(15)
    .fill(undefined)
    .map(() => ({
      name: "최민식",
      id: 2020111,
      organization: "EC2-4팀",
      responsibility: "사원",
      position: "연구원",
      ability: ["기획력", "데이터분석력", "커뮤니케이션능력"],
    }));

  const [state, setState] = React.useState({
    oldSlide: 0,
    activeSlide: 0,
    now: 0,
  });
  const Card = styled.div`
    background: #ffffff;
    box-shadow: 0px 1px 4px rgba(153, 153, 153, 0.75);
    border-radius: 4px;
    width: 350px;
    padding: 21.64px;
    border-radius: 4px;
    margin: 3px 30px 3px 30px;
  `;

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    style: { innerHeight: props.size === "medium" ? "240px" : "630px" },

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
        {data.map((x) => (
          <div>
            <Card
              style={{ height: props.size === "medium" ? "202px" : "607px" }}
            >
              {x.name} {x.organization} {x.position}
              {x.responsibility}
              <div>
                {" "}
                {x.ability.map((item) => (
                  <Chip
                    style={
                      x.ability.indexOf(item) % 3 == 0
                        ? styles["1st"]
                        : x.ability.indexOf(item) % 3 == 1
                        ? styles["2nd"]
                        : styles["3rd"]
                    }
                  >
                    {item}
                  </Chip>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </Styled_Slide>
    </>
  );
};

export default HcSlider;
