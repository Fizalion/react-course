import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext/context";
import { UserContext } from "../../contexts/UserContext/context";
import ScrollProgress from "../ScrollProgress/ScrollProgress";
import Button from "../Button/Button";
import Cart from "../Cart/Cart";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login, logout } = useContext(UserContext);

  return (
    <main>
      <ScrollProgress />
      <div className={theme === "dark" ? "container dark" : "container"}>
        <header className={styles.header}>
          <Link to="/restaurants">Рестораны</Link>
          <div className={styles.headerRight}>
            {user ? (
              <>
                <span>{user.name}</span>
                <Button onClick={logout}>Выйти</Button>
              </>
            ) : (
              <Button onClick={login}>Войти</Button>
            )}
            <Button onClick={toggleTheme}>Сменить тему</Button>
          </div>
        </header>

        {children}

        <Cart />
        <footer>Footer</footer>
      </div>
    </main>
  );
};

export default Layout;
