import { COMPONENT, ROW, COLUMN } from "./constants";

const initialData = {
  layout: [
    {
      type: ROW,
      id: "row0",
      children: [
        {
          type: COLUMN,
          id: "column0",
          children: [
            {
              type: COMPONENT,
              id: "component0",
              title: "장보성1",
            },
            {
              type: COMPONENT,
              id: "component1",
              title: "장보성2",
            },
            {
              type: COMPONENT,
              id: "component2",
              title: "장보성3",
            },
          ],
        },
        {
          type: COLUMN,
          id: "column1",
          children: [
            {
              type: COMPONENT,
              id: "component3",
              title: "김건우1",
            },
            {
              type: COMPONENT,
              id: "",
              title: "",
            },
            {
              type: COMPONENT,
              id: "component4",
              title: "김건우2",
            },
          ],
        },
      ],
    },
  ],
  components: {
    component0: { id: "component0", type: "input", content: "Some input" },
    component1: { id: "component1", type: "image", content: "Some image" },
    component2: { id: "component2", type: "email", content: "Some email" },
    component3: { id: "component3", type: "name", content: "Some name" },
    component4: { id: "component4", type: "phone", content: "Some phone" },
  },
};

export default initialData;
