import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  loadDishById,
  selectDishById,
} from "../../redux/entities/dishes/dishesSlice";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext/context";
import Counter from "../../components/Counter/Counter";
import styles from "../../components/Dish/Dish.module.css";
import useDishCounter from "../../components/Dish/useDishCounter";

const DishPage = () => {
  const dispatch = useDispatch();
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));
  const { count, onIncrement, onDecrement } = useDishCounter(dishId);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (dishId && !dish) dispatch(loadDishById(dishId));
  }, [dishId, dish, dispatch]);

  if (!dish) return <div>Загрузка блюда...</div>;
  const { name } = dish;

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
