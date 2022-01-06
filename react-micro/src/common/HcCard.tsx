import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 312px;
  height: 257px;
  background: #ffffff;
  float: left;
  padding: 20px 24px 20px 24px;
`;

const Card_title = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: #303030;
`;

const Card_date = styled.div`
  margin-top: 8px;
  margin-left: 1px;
  margin-bottom: 8px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #838383;
`;

interface CardProps {
  boxStyle: "solid" | "boxShadow";
  children: React.ReactNode;
  title: string;
  date: any;
}
export default function HcCard(props: CardProps) {
  const solid: any = {
    border: "1px solid #cecece",
    borderRadius: 5,
  };
  const boxShadow: any = {
    boxShadow: "0px 1px 4px rgba(153, 153, 153, 0.75)",
    borderRadius: "4px",
    backgroundColor: "#FFFFFF",
  };

  const handleStyle = (style: string) => {
    switch (style) {
      case "solid":
        return solid;
      case "boxShadow":
        return boxShadow;
    }
  };
  return (
    <>
      <Card style={handleStyle(props.boxStyle)}>
        <Card_title style={{ fontWeight: 800 }}>{props.title}</Card_title>
        <Card_date>{props.date}</Card_date>
        {props.children}
      </Card>
    </>
  );
}
