import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import { UserContext } from "../../contexts/UserContext/UserContext";
import ScrollProgress from "../ScrollProgress/ScrollProgress";
import Button from "../Button/Button";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login, logout } = useContext(UserContext);

  return (
    <main>
      <ScrollProgress />
      <div className={theme === "dark" ? "container dark" : "container"}>
        <header className={styles.header}>
          <div>Рестораны</div>
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

        <footer>Footer</footer>
      </div>
    </main>
  );
};

export default Layout;
