import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectDishesByRestaurantId } from "../../redux/selectors";
import Dish from "../../components/Dish/Dish";

const MenuPage = () => {
  const { restaurantId } = useParams();
  const dishes = useSelector((state) =>
    selectDishesByRestaurantId(state, restaurantId),
  );

  return (
    <section>
      <h3>Меню</h3>
      {dishes.length === 0 ? (
        <div>Нет блюд</div>
      ) : (
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id}>
              <Link to={`/dish/${dish.id}`}>
                <Dish dishId={dish.id} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MenuPage;
