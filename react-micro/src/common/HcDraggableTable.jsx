import React from "react";
import {
  SortableHandle,
  SortableContainer,
  SortableElement,
} from "react-sortable-hoc";
import styled from "styled-components";

export const TrWrapper = styled.tr`
  background: white;
  cursor: default;

  .firstElement {
    display: flex;
    flex-direction: row;
  }

  &.helperContainerClass {
    width: auto;
    border: 1px solid #efefef;
    box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 3px;

    &:active {
      cursor: grabbing;
    }

    & > td {
      padding: 5px;
      text-align: left;
      width: 200px;
    }
  }
`;

const Handle = styled.div`
  margin-right: 10px;
  padding: 0 5px;
  cursor: grab;
`;

export const MyTableWrapper = styled.div`
  padding: 10px;

  .fixed_header {
    width: 800px;
    table-layout: fixed;
    border-collapse: collapse;

    & > tbody {
      display: block;
      width: 807px;
      overflow: auto;
      height: 400px;
      cursor: grabbing;
      background: grey;
    }

    & > thead {
      background: yellow;
      color: black;

      & > tr {
        display: block;
        //width: 793px;
      }
    }

    & > thead th,
    & > tbody td {
      padding: 5px;
      text-align: left;
      width: 200px;
      border: 1px solid #000;
    }
  }
`;

const ITEMS = [
  {
    first: "She",
    second: "was",
    third: "a",
    fourth: "fast",
  },
  {
    first: "machine",
    second: "She",
    third: "kept",
    fourth: "her",
  },
  {
    first: "motor",
    second: "clean",
    third: "She",
    fourth: "was",
  },
  {
    first: "the",
    second: "best",
    third: "damn",
    fourth: "woman",
  },
  {
    first: "I",
    second: "had",
    third: "ever",
    fourth: "seen",
  },
  {
    first: "She",
    second: "had",
    third: "the",
    fourth: "sightless",
  },
  {
    first: "eyes",
    second: "telling",
    third: "me",
    fourth: "no",
  },
  {
    first: "lies",
    second: "knockin'",
    third: "me",
    fourth: "out",
  },
  {
    first: "with",
    second: "those",
    third: "American",
    fourth: "thighs",
  },
  {
    first: "taking",
    second: "more",
    third: "than",
    fourth: "her",
  },
  {
    first: "share",
    second: "had",
    third: "me",
    fourth: "fighting",
  },
  {
    first: "for",
    second: "air",
    third: "She",
    fourth: "told",
  },
  {
    first: "me",
    second: "to",
    third: "come",
    fourth: "but",
  },
  {
    first: "I",
    second: "was",
    third: "already",
    fourth: "there",
  },
  {
    first: "'cause",
    second: "the",
    third: "walls",
    fourth: "start",
  },
  {
    first: "shaking",
    second: "the",
    third: "earth",
    fourth: "was",
  },
  {
    first: "quaking",
    second: "my",
    third: "mind",
    fourth: "was",
  },
  {
    first: "aching",
    second: "and",
    third: "we",
    fourth: "were",
  },
  {
    first: "making",
    second: "it",
    third: "and",
    fourth: "you",
  },
];

const arrayMoveMutate = (array, from, to) => {
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
};

export const arrayMove = (array, from, to) => {
  array = array.slice();
  arrayMoveMutate(array, from, to);
  return array;
};

export const RowHandler = SortableHandle(() => (
  <Handle className="handle">|</Handle>
));
/*
export const TableRow = ({ value, className }) => {
  return (
    <TrWrapper className={className}>
      <td>
        <div className="firstElement">
          <RowHandler />
          {value.first}
        </div>
      </td>
      <td>{value.second}</td>
      <td>{value.third}</td>
      <td>{value.fourth}</td>
    </TrWrapper>
  );
};
*/

export const SortableCont = SortableContainer((props) => {
  return <tbody style={props.style}>{props.children}</tbody>;
});

export const SortableItem = SortableElement((props) => (
  <TrWrapper className={props.className} style={props.style}>
    {props.children}
  </TrWrapper>
));

const HcDraggableTable = () => {
  const [items, setItems] = React.useState(ITEMS);

  const onSortEnd = React.useCallback(({ oldIndex, newIndex }) => {
    setItems((oldItems) => arrayMove(oldItems, oldIndex, newIndex));
  }, []);

  return (
    <>
      <MyTableWrapper>
        <table className="table table-dark fixed_header">
          <thead>
            <tr>
              <th>First</th>
              <th>Second</th>
              <th>Third</th>
              <th>Forth</th>
            </tr>
          </thead>
          <SortableCont
            onSortEnd={onSortEnd}
            axis="y"
            lockAxis="y"
            lockToContainerEdges={true}
            lockOffset={["30%", "50%"]}
            helperClass="helperContainerClass"
            useDragHandle={true}
          >
            {items.map((value, index) => (
              <SortableItem key={`item-${index}`} index={index} value={value}>
                <td>
                  <div className="firstElement">
                    <RowHandler />
                    {value.first}
                  </div>
                </td>
                <td>{value.second}</td>
                <td>{value.third}</td>
                <td>{value.fourth}</td>
              </SortableItem>
            ))}
          </SortableCont>
        </table>
      </MyTableWrapper>
    </>
  );
};

export default HcDraggableTable;
