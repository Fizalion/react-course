import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function login() {
    return setUser({ name: "Oleg" });
  }

  function logout() {
    return setUser(null);
  }

  return <UserContext value={{ user, login, logout }}>{children}</UserContext>;
};

export default UserProvider;
