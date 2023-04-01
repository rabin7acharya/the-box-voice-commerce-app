import bcrypt from "bcryptjs";

const users = [
  {
    id: 1,
    name: "Rabin Acharya",
    email: "rabin7acharya@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    id: 2,
    name: "Juan Cruz",
    email: "juan@abc.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@abc.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
