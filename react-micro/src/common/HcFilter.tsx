import { useRef, useState } from "react";
import styled from "styled-components";
import { HcDateRangePicker } from "common/HcDatePicker";
import HcTextField, {
  HcSelect,
  HcTagInput,
  HcSearchTextField,
  HcTagNoInput,
} from "common/HcTextField";

const FilterContainer = styled.div`
  width: 1320px;
  height: 310px;
  position: relative;
  display: inline-block;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

const AddButton = styled.button`
  background: #ffffff;
  border: 1px solid #a7a7a7;
  box-sizing: border-box;
  border-radius: 3px;
  position: absolute;

  width: 86px;
  height: 32px;
  left: 1200px;
  bottom: 20px;
`;
const ObjContainer = styled.div`
  width: 1241px;
  height: 94px;
  background: #f4f4f4;
  border-radius: 6px;
  margin-top: 20px;
  margin-left: 40px;
`;
function FilterObj({ obj, onRemove }: any) {
  const { id } = obj;
  const [tags, setTags] = useState(["react"]);

  return (
    <ObjContainer>
      obj : {id}
      <HcTagInput titleName="title" tags={tags} setTags={setTags} />
      <div style={{ position: "absolute", marginLeft: 464, marginTop: -55 }}>
        <HcSelect titleName="TEXT" required>
          <option value="" hidden>
            Type
          </option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Citroen</option>
          <option value="4">Ford</option>
        </HcSelect>
      </div>
      <div style={{ position: "absolute", marginLeft: 814, marginTop: -27 }}>
        <HcDateRangePicker />
      </div>
      <svg
        style={{ position: "absolute", marginLeft: 762, marginTop: 10 }}
        onClick={() => onRemove(id)}
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
    </ObjContainer>
  );
}

function FilterObjList({ objs, onRemove }: any) {
  return (
    <div>
      {objs.map((obj: any) => (
        <FilterObj obj={obj} key={obj.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default function HcFilter() {
  const [objs, setObjs] = useState([
    {
      id: 1,
    },
  ]);

  const nextId = useRef(2);

  const onCreate = () => {
    const obj = {
      id: nextId.current,
    };
    setObjs([...objs, obj]);

    console.log(nextId.current);
    nextId.current += 1;
  };

  const onRemove = (id: any) => {
    setObjs(objs.filter((obj) => obj.id !== id));
  };

  return (
    <FilterContainer style={{ height: 192 + (objs.length - 1) * 114 }}>
      <FilterObjList objs={objs} onRemove={onRemove} />
      <AddButton onClick={onCreate}>필터 추가</AddButton>
    </FilterContainer>
  );
}
