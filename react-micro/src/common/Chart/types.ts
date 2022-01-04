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
