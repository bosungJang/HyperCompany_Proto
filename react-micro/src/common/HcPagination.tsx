import { useState } from "react";
import styled from "styled-components";
const PageButton = styled.button`
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  background: white;
  border: none;
  &:hover {
    background-color: lightblue;
    border-radius: 55px;
  }
`;
interface Props {
  rowsPerPage: number;
  dataLength: number;
}
const HcPagination: React.FC<Props> = (props) => {
  const pageclick = (num: number) => (event: any) => {
    setPage(num);
  };

  const [page, setPage] = useState(1);
  const range = []; //페이지 배열
  const totalPage = Math.ceil(props.dataLength / props.rowsPerPage); //전체 페이지 수
  const remainder = Math.ceil(page / 5) - 1;

  const firstPageClick = () => {
    setPage(1);
  };
  const lastPageClick = () => {
    setPage(totalPage);
  };
  const nextPageClick = () => {
    if (page + 1 <= totalPage) setPage(page + 1);
  };
  const prevPageClick = () => {
    if (page - 1 > 0) setPage(page - 1);
  };

  if (totalPage <= 1) {
    range.push(1);
  } else if (totalPage < 5) {
    range.push(page);
  } else {
    for (let i = 1; i <= 5; i++) {
      if (i + 5 * remainder > totalPage) continue;

      range.push(i + 5 * remainder);
    }
  }

  return (
    <>
      <ul>
        <li style={{ float: "left" }}>
          <PageButton className="pageButtons" onClick={firstPageClick}>
            first
          </PageButton>
        </li>
        <li style={{ float: "left" }}>
          <PageButton className="pageButtons" onClick={prevPageClick}>
            prev
          </PageButton>
        </li>
        {range.map((item) => (
          <li style={{ float: "left" }}>
            <PageButton
              className="pageButtons"
              onClick={pageclick(item)}
              style={
                item == page
                  ? { backgroundColor: "lightGray", borderRadius: 55 }
                  : {}
              }
            >
              {item}
            </PageButton>
          </li>
        ))}
        <li style={{ float: "left" }}>
          <PageButton className="pageButtons" onClick={nextPageClick}>
            next
          </PageButton>
        </li>
        <li style={{ float: "left" }}>
          <PageButton className="pageButtons" onClick={lastPageClick}>
            last
          </PageButton>
        </li>
      </ul>
      now {page}
    </>
  );
};
export default HcPagination;
