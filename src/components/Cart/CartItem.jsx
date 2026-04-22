import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/dishesSlice";

const CartItem = ({ dishId, count }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));
  if (!dish) return null;

  return (
    <div>
      {dish.name} — {count}
    </div>
  );
};

export default CartItem;
