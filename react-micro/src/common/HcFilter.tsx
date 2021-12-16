import React, { CSSProperties, useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  position: relative;
  width: 1460px;
  height: 325px;
  margin: 20px;
  block: inline-block;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  float: left;
`;

const FilterObj = styled.div`
  position: absolute;
  width: 1410px;
  height: 94px;
  left: 30px;
  margin-top: 30px;
  background: #f4f4f4;
  border-radius: 6px;
`;
// interface filterClose {
//   onClick?: Function;
// }
const FilterClose = styled.svg`
  top: 8.4px;
  left: 1381px;
  position: absolute;
`;
const FilterText = styled.div`
  position: absolute;
  width: 70px;
  height: 21px;
  top: 14px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #2e2e2e;
`;

const FilterAdd = styled.button`
  position: absolute;
  width: 97px;
  height: 40px;
  left: 1343px;
  top: 265px;
  background: #ffffff;
  border: 1px solid #a7a7a7;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
`;
export default function HcFilter() {
  let [filterObjArray, setFilterObjArray]: any[] = useState([0]);
  const [num, setnum] = useState(1);
  const onAddButtonClick = () => {
    let prev = [...filterObjArray];
    console.log("num :" + num);
    setFilterObjArray(prev.concat(num));
    setnum(num + 1);
    console.log(filterObjArray);
  };
  const onDeleteButtonclick = (i: number, e: any) => {
    let prev = [...filterObjArray];

    if (prev.includes(i) == true) {
      setFilterObjArray(prev.splice(prev.indexOf(i), 1));
    }
    console.log("array:" + filterObjArray);
    console.log("clicked" + i + "obj");
    console.log("splice:" + prev.splice(prev.indexOf(i), 1));
    e.preventDefault();
  };
  return (
    <FilterContainer>
      {filterObjArray.includes(0) ? (
        <div key={0}>
          <FilterObj>
            <div key={0} onClick={(e) => onDeleteButtonclick(0, e)}>
              <FilterClose>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="1.4"
                    height="14"
                    transform="matrix(0.699578 0.714557 -0.699578 0.714557 14.2817 4.88574)"
                    fill="#424242"
                  />
                  <rect
                    width="1.4"
                    height="14"
                    transform="matrix(-0.699578 0.714557 -0.699577 -0.714557 15.2622 14.8896)"
                    fill="#424242"
                  />
                </svg>
              </FilterClose>
            </div>

            <FilterText style={{ left: 14 }}>발령 일자</FilterText>
            <FilterText style={{ left: 438 }}>발령 내용</FilterText>
            <FilterText style={{ left: 878 }}>발령 일자</FilterText>
          </FilterObj>
        </div>
      ) : (
        <></>
      )}
      {/* {filterObjArray} */}
      {filterObjArray.map((i: number) => (
        <div key={i} style={{ marginTop: 114 * i }}>
          <FilterObj>
            <div key={i} onClick={(e) => onDeleteButtonclick(i, e)}>
              <FilterClose>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="1.4"
                    height="14"
                    transform="matrix(0.699578 0.714557 -0.699578 0.714557 14.2817 4.88574)"
                    fill="#424242"
                  />
                  <rect
                    width="1.4"
                    height="14"
                    transform="matrix(-0.699578 0.714557 -0.699577 -0.714557 15.2622 14.8896)"
                    fill="#424242"
                  />
                </svg>
              </FilterClose>
            </div>
            <FilterText style={{ left: 14 }}>발령 일자</FilterText>
            <FilterText style={{ left: 438 }}>발령 내용</FilterText>
            <FilterText style={{ left: 878 }}>발령 일자</FilterText>
          </FilterObj>
        </div>
      ))}
      <FilterAdd onClick={onAddButtonClick}>필터 추가</FilterAdd>
    </FilterContainer>
  );
}
