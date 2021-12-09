import React from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  block: inline-block;
  width: 312px;
  height: 257px;
  background: #ffffff;
  float: left;
  margin: 20px;
`;

const Card_title = styled.div`
  position: absolute;
  width: 100px;
  height: 24px;
  left: 25px;
  top: 20px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: #303030;
`;

const Card_date = styled.div`
  position: absolute;
  width: 206px;
  height: 21px;
  left: 26px;
  top: 52px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #838383;
`;
const Card_numberOf = styled.div`
  position: absolute;
  width: 89px;
  height: 70px;
  left: 32px;
  top: 156px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 71px;
  color: #000000;
`;
const Card_count = styled.div`
  position: absolute;
  width: 50px;
  height: 23.46px;
  left: 120px;
  top: 191px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 15.641px;
  line-height: 23px;
  color: #ff7070;
`;
export default function HcCard() {
  return (
    <>
      <Card
        style={{
          boxShadow: "0px 4px 10px rgba(153, 153, 153, 0.25)",
          borderRadius: "10px",
        }}
      >
        <Card_title style={{ fontWeight: 1500 }}>전체 상품 수</Card_title>
        <Card_date>주 단위 : 2021.10.11~2021.10.17</Card_date>
        <Card_numberOf>321</Card_numberOf>
        <Card_count>
          52개
          <svg
            width="11"
            height="8"
            style={{ marginBottom: 2, marginLeft: 3 }}
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.83975 0.602051L10.9193 7.64051H0.760178L5.83975 0.602051Z"
              fill="#FF7070"
            />
          </svg>
        </Card_count>
      </Card>

      <Card style={{ border: "1px solid #E0E0E0", borderRadius: "8px" }}>
        <Card_title style={{ fontWeight: 400 }}>전체 상품 수</Card_title>
        <Card_date>주 단위 : 2021.10.11~2021.10.17</Card_date>
        <Card_numberOf>321</Card_numberOf>
        <Card_count>
          52개
          <svg
            width="11"
            height="8"
            style={{ marginBottom: 2, marginLeft: 3 }}
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.83975 0.602051L10.9193 7.64051H0.760178L5.83975 0.602051Z"
              fill="#FF7070"
            />
          </svg>
        </Card_count>
      </Card>

      <Card
        style={{
          boxShadow: "0px 1px 4px rgba(153, 153, 153, 0.75)",
          borderRadius: "10px",
        }}
      >
        <Card_title style={{ fontWeight: 800 }}>전체 상품 수</Card_title>
        <Card_date>주 단위 : 2021.10.11~2021.10.17</Card_date>
        <Card_numberOf>321</Card_numberOf>
        <Card_count>
          52개
          <svg
            width="11"
            height="8"
            style={{ marginBottom: 2, marginLeft: 3 }}
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.83975 0.602051L10.9193 7.64051H0.760178L5.83975 0.602051Z"
              fill="#FF7070"
            />
          </svg>
        </Card_count>
      </Card>
    </>
  );
}
