import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishesSlice";
import { UserContext } from "../../contexts/UserContext/context";
import Counter from "../Counter/Counter";
import styles from "./Dish.module.css";
import useDishCounter from "./useDishCounter";

const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  const { count, onIncrement, onDecrement } = useDishCounter(dishId);
  const { user } = useContext(UserContext);

  if (!dish) return null;
  const { name } = dish;

  return (
    <div className={styles.dish}>
      <span className={styles.name}>{name}</span>
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
