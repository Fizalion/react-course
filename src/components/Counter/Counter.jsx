import Button from "../Button/Button";
import styles from "./Counter.module.css";

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className={styles.counter}>
      <Button onClick={onDecrement}>-</Button>
      <span className={styles.value}>{value}</span>
      <Button onClick={onIncrement}>+</Button>
    </div>
  );
};

export default Counter;
