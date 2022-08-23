import React from "react";
import {
  SortableHandle,
  SortableContainer,
  SortableElement,
} from "react-sortable-hoc";
import styled from "styled-components";

export const TrWrapper = styled.tr`
  //background: white;
  background: ${(props) =>
    props.isSelected && !props.itemIsBeingDragged
      ? "pink"
      : props.isSelected && props.itemIsBeingDragged
      ? "blue"
      : "white"};
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
    id: "001",
    first: "She",
    second: "was",
    third: "a",
    fourth: "fast",
  },
  {
    id: "002",
    first: "machine",
    second: "She",
    third: "kept",
    fourth: "her",
  },
  {
    id: "003",
    first: "motor",
    second: "clean",
    third: "She",
    fourth: "was",
  },
  {
    id: "004",
    first: "the",
    second: "best",
    third: "damn",
    fourth: "woman",
  },
  {
    id: "005",
    first: "I",
    second: "had",
    third: "ever",
    fourth: "seen",
  },
  {
    id: "006",
    first: "She",
    second: "had",
    third: "the",
    fourth: "sightless",
  },
  {
    id: "007",
    first: "eyes",
    second: "telling",
    third: "me",
    fourth: "no",
  },
  {
    id: "008",
    first: "lies",
    second: "knockin'",
    third: "me",
    fourth: "out",
  },
  {
    id: "009",
    first: "with",
    second: "those",
    third: "American",
    fourth: "thighs",
  },
  {
    id: "010",
    first: "taking",
    second: "more",
    third: "than",
    fourth: "her",
  },
  {
    id: "011",
    first: "share",
    second: "had",
    third: "me",
    fourth: "fighting",
  },
  {
    id: "012",
    first: "for",
    second: "air",
    third: "She",
    fourth: "told",
  },
  { id: "013", first: "me", second: "to", third: "come", fourth: "but" },
  {
    id: "014",
    first: "I",
    second: "was",
    third: "already",
    fourth: "there",
  },
  {
    id: "015",
    first: "'cause",
    second: "the",
    third: "walls",
    fourth: "start",
  },
  {
    id: "016",
    first: "shaking",
    second: "the",
    third: "earth",
    fourth: "was",
  },
  {
    id: "017",
    first: "quaking",
    second: "my",
    third: "mind",
    fourth: "was",
  },
  {
    id: "018",
    first: "aching",
    second: "and",
    third: "we",
    fourth: "were",
  },
  {
    id: "019",
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
  <TrWrapper
    className={props.className}
    isSelected={props.isSelected}
    itemIsBeingDragged={props.itemIsBeingDragged}
    onClick={props.onClick}
  >
    {props.children}
  </TrWrapper>
));

const HcDraggableTable = () => {
  const [items, setItems] = React.useState(ITEMS);
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [isSorting, setIsSorting] = React.useState(false);
  const [sortingItemKey, setIsSortingItemKey] = React.useState(null);

  const onSortEnd = React.useCallback(({ oldIndex, newIndex }) => {
    setItems((oldItems) => arrayMove(oldItems, oldIndex, newIndex));
  }, []);

  /* Handle Functions */
  const handleUpdateBeforeSortStart = ({ index }) => {
    return new Promise(
      (resolve) => {
        setIsSortingItemKey(items[index]);
        setIsSorting(true);
        resolve("Updated");
      }
      /*
      this.setState(
        ({ items }) => ({
          sortingItemKey: items[index],
          isSorting: true,
        }),
        resolve
      )
       */
    );
  };

  const handleSortStart = () => {
    document.body.style.cursor = "grabbing";
  };

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    let newItems;

    if (selectedItems.length) {
      const previtems = items.filter((value) => !selectedItems.includes(value));

      newItems = [
        ...previtems.slice(0, newIndex),
        ...selectedItems,
        ...previtems.slice(newIndex, previtems.length),
      ];
    } else {
      newItems = arrayMove(items, oldIndex, newIndex);
    }
    /*
    this.setState({
      items: newItems,
      isSorting: false,
      sortingItemKey: null,
      selectedItems: [],
    });
    */
    setItems(newItems);
    setIsSorting(false);
    setIsSortingItemKey(null);
    setSelectedItems([]);

    document.body.style.cursor = "";
  };

  const handleItemSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((value) => value !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleShouldCancelStart = (event) => {
    const item = items[event.target.sortableInfo.index];

    // Never cancel start if there are no selected items
    if (!selectedItems.length) {
      return false;
    }

    // If there are selected items, we want to cancel sorting
    // from starting when dragging elements that are not selected
    return !selectedItems.includes(item);
  };

  /* Handle Function */

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
            //shouldCancelStart={handleShouldCancelStart}
            updateBeforeSortStart={handleUpdateBeforeSortStart}
            onSortStart={handleSortStart}
            onSortEnd={handleSortEnd}
            axis="y"
            lockAxis="y"
            lockToContainerEdges={true}
            lockOffset={["30%", "50%"]}
            helperClass="helperContainerClass"
            useDragHandle={true}
          >
            {items.map((value, index) => {
              const isSelected = selectedItems.includes(value);
              const itemIsBeingDragged = sortingItemKey === value;
              return (
                <SortableItem
                  key={`item-${index}`}
                  index={index}
                  value={value}
                  onClick={() => handleItemSelect(value)}
                  isSelected={isSelected}
                  itemIsBeingDragged={itemIsBeingDragged}
                >
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
              );
            })}
          </SortableCont>
        </table>
      </MyTableWrapper>
    </>
  );
};

export default HcDraggableTable;
