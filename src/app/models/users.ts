export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  address:string;
}

export const users = [
  {
    id: 1,
    username: "fakhri",
    email: 'fakhri@tekup.me',
    password: "123456",
    address:"maamoura"
  },
  {
    id: 2,
    username: "wissal",
    email: 'wissal@tekup.me',
    password: "123456",
    address:"tazarka"

  },
  {
    id: 3,
    username: "wissem",
    email: 'wissem@tekup.me',
    password: "123456",
    address:"el mourouj"

  },
];
