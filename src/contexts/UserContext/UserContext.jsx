import { useState } from "react";
import { UserContext } from "./context";

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
