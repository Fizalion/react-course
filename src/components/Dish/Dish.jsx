import { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./Dish.module.css";

const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);

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
      <Counter
        value={count}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
};

export default Dish;
