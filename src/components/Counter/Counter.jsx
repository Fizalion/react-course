import styles from "./Counter.module.css";

const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className={styles.counter}>
      <button onClick={onDecrement}>-</button>
      <span className={styles.value}>{value}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
