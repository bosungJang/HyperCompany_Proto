import * as React from "react";
import "./OrganizationChart.css";
import { v4 as uuid } from "uuid";

const data = [
  {
    id: uuid(),
    user: {
      firstName: "Root",
      lastName: "",
      email: "",
      id: "",
    },
    children: [
      {
        id: uuid(),
        user: {
          firstName: "Child 1",
          lastName: "",
          email: "",
          id: "",
        },
        children: [
          {
            id: uuid(),
            user: {
              firstName: "Grand Child",
              lastName: "",
              email: "",
              id: "",
            },
          },
        ],
      },
      {
        id: uuid(),
        user: {
          firstName: "Child 2",
          lastName: "",
          email: "",
          id: "",
        },

        children: [
          {
            id: uuid(),
            user: {
              firstName: "Grand Child",
              lastName: "",
              email: "",
              id: "",
            },
            children: [
              {
                id: uuid(),
                user: {
                  firstName: "Great Grand Child 1",
                  lastName: "",
                  email: "",
                  id: "",
                },
              },
              {
                id: uuid(),
                user: {
                  firstName: "Grand Grand Child 2",
                  lastName: "",
                  email: "",
                  id: "",
                },
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        user: {
          firstName: "Child 2",
          lastName: "",
          email: "",
          id: "",
        },
      },
    ],
  },
];

export interface Node {
  user: User;
  id: string;
  children: Node[];
}

export interface User {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}

export type TreeRoot = Node;

interface TreeNode {
  [key: string]: any; // type for unknown keys.
  children?: TreeNode[]; // type for a known property.
}
interface CardProps {
  data: Array<TreeNode>;
}

const Card = (props: CardProps) => {
  return (
    <>
      <ul>
        {props.data.map((item) => (
          <>
            <li className="card">
              {item.user.firstName}
              {item.children?.length && <Card data={item.children} />}
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

const EmployeeChart = () => {
  const [tree, setTree] = React.useState<Array<TreeNode>>([
    {
      id: uuid(),
      user: {
        firstName: "Init",
        lastName: "",
        email: "",
        id: "",
      },
      children: [],
    },
  ]);

  React.useEffect(() => {
    setTree(data);
  }, []);

  return (
    <div className="org-tree">
      Employee Chart
      <Card data={tree} />
    </div>
  );
};
export default EmployeeChart;
