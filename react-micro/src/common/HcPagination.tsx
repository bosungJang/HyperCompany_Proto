import { useState } from "react";

export default function HcPagination() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const length = 53;
  const pageclick = (num: number) => (event: any) => {
    setPage(num);
  };

  const range = [];
  const num = Math.ceil(length / rowsPerPage);

  for (let i = 1; i <= num; i++) {
    range.push(i);
  }

  return (
    <>
      <ul>
        {range.map((item) => (
          <li style={{ float: "left" }}>
            <button className="pageButtons" onClick={pageclick(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
