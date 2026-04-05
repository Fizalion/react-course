import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import Counter from "../Counter/Counter";
import styles from "./Dish.module.css";

const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);
  const { user } = useContext(UserContext);

  function onDecrement() {
    if (count === 0) return;
    setCount(count - 1);
  }

  function onIncrement() {
    if (count === 5) return;
    setCount(count + 1);
  }

  return (
    <div className={styles.dish}>
      <span className={styles.name}>{dish.name}</span>
      {user && (
        <Counter
          value={count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      )}
    </div>
  );
};

export default Dish;
