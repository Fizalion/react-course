import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectDishesByRestaurantId } from "../../redux/selectors";
import Dish from "../../components/Dish/Dish";
import { useEffect } from "react";
import { loadDishesByRestaurantId } from "../../redux/entities/dishes/dishesSlice";
import { REQUEST_STATUS } from "../../redux/constants";

const MenuPage = () => {
  const dispatch = useDispatch();

  const { restaurantId } = useParams();
  const dishes = useSelector((state) =>
    selectDishesByRestaurantId(state, restaurantId),
  );
  const status = useSelector((state) => state.dishes.status);
  const error = useSelector((state) => state.dishes.error);

  useEffect(() => {
    if (restaurantId && dishes.length === 0)
      dispatch(loadDishesByRestaurantId(restaurantId));
  }, [restaurantId, dispatch, dishes.length]);

  if (status === REQUEST_STATUS.LOADING) return <div>Загрузка...</div>;
  if (status === REQUEST_STATUS.FAILED) return <div>{error}</div>;

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
