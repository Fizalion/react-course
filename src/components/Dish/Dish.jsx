import { useState } from "react";

const Dish = ({ dish }) => {
  // Не вынес count в отдельный компонент, пока он используется только в Dish
  const [count, setCount] = useState(0);

  return (
    <div>
      {dish.name}{" "}
      <button onClick={() => (count > 0 ? setCount(count - 1) : null)}>
        -
      </button>{" "}
      {count}{" "}
      <button onClick={() => (count < 5 ? setCount(count + 1) : null)}>
        +
      </button>
    </div>
  );
};

export default Dish;
