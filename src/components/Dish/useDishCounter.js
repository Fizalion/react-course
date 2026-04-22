import { useDispatch, useSelector } from "react-redux";
import { selectDishCountById } from "../../redux/cart/cartSlice";
import { increment, decrement } from "../../redux/cart/cartSlice";

const useDishCounter = (dishId) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectDishCountById(state, dishId));

  const onIncrement = () => dispatch(increment(dishId));
  const onDecrement = () => dispatch(decrement(dishId));

  return { count, onIncrement, onDecrement };
};

export default useDishCounter;
