import { useState } from "react";
import { UserContext } from "./context";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function login() {
    return setUser({ name: "Sam", id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54" });
  }

  function logout() {
    return setUser(null);
  }

  return <UserContext value={{ user, login, logout }}>{children}</UserContext>;
};

export default UserProvider;
