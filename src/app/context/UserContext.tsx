/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";

export interface IUser {
  id: number;
  avatar: string;
  username: string;
  isLiked: boolean;
  name: string;
  email: string;
  website: string;
  phone: string;
}
export const UserContext = createContext({
  users: [
    {
      id: 0,
      avatar: "",
      username: "",
      isLiked: false,
      name: "",
      email: "",
      website: "",
      phone: "",
    },
  ],
  handleLike: (id) => {},
  handleRemove: (id) => {},
  editUser: (id, user) => {},
});

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserContextProvider = ({ children }: { children }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleLike = (id) => {
    const userIndex = users.findIndex((user) => user.id === id);
    const newUser = [...users];
    newUser[userIndex].isLiked = !newUser[userIndex].isLiked;
    setUsers(newUser);
  };

  const handleRemove = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const editUser = (id, newValues) => {
    const userIndex = users.findIndex((user) => user.id === id);
    const newUser = [...users];
    newUser[userIndex] = {
      ...newUser[userIndex],
      ...newValues,
    };
    setUsers(newUser);
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <UserContext.Provider
      value={{
        users,
        handleLike,
        handleRemove,
        editUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
