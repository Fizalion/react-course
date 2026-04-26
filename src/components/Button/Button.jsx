import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext/context";
import classNames from "classnames";
import styles from "./button.module.css";

const Button = ({ children, onClick, className }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={classNames(className, { [styles.dark]: theme === "dark" })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
