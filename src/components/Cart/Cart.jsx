import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartArr = Object.entries(cart);

  return (
    <div>
      {cartArr.length > 0 && (
        <ul>
          {cartArr.map(([id, count]) => (
            <li key={id}>
              <CartItem dishId={id} count={count} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
