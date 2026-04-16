import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectDishById } from "../../redux/entities/dishes/dishesSlice";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { selectDishCountById } from "../../redux/cart/cartSlice";
import { increment, decrement } from "../../redux/cart/cartSlice";
import Counter from "../../components/Counter/Counter";
import styles from "../../components/Dish/Dish.module.css";

const DishPage = () => {
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));
  const count = useSelector((state) => selectDishCountById(state, dishId));
  const dispatch = useDispatch();
  const { user } = useContext(UserContext);

  if (!dish) return <div>Блюдо не найдено</div>;
  const { name } = dish;
  const onDecrement = () => dispatch(decrement(dishId));
  const onIncrement = () => dispatch(increment(dishId));

  return (
    <section className={styles.dish}>
      <h2 className={styles.name}>{name}</h2>
      {user && (
        <Counter
          value={count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      )}
    </section>
  );
};

export default DishPage;
