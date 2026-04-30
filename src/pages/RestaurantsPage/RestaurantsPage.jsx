import { useDispatch, useSelector } from "react-redux";
import { selectRestaurants } from "../../redux/selectors";
import Button from "../../components/Button/Button";
import { useNavigate, useParams, Outlet, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { REQUEST_STATUS } from "../../redux/constants";
import {
  loadRestaurantById,
  loadRestaurants,
} from "../../redux/entities/restaurants/restaurantsSlice";

const RestaurantsPage = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.restaurants.status);
  const error = useSelector((state) => state.restaurants.error);
  const restaurants = useSelector(selectRestaurants);

  const { restaurantId } = useParams();
  const navigate = useNavigate();

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId,
  );

  useEffect(() => {
    if (status === REQUEST_STATUS.IDLE) dispatch(loadRestaurants());
  }, [dispatch, status]);

  useEffect(() => {
    if (restaurantId && !restaurant) dispatch(loadRestaurantById(restaurantId));
  }, [dispatch, restaurantId, restaurant]);

  function handleClick(id) {
    if (id === restaurantId) return;
    navigate(`/restaurants/${id}`);
  }

  if (status === REQUEST_STATUS.LOADING) return <div>Загрузка...</div>;
  if (status === REQUEST_STATUS.FAILED) return <div>{error}</div>;

  return (
    <main>
      <div className="tabs">
        {restaurants.map((restaurant) => (
          <Button
            key={restaurant.id}
            onClick={() => handleClick(restaurant.id)}
          >
            {restaurant.name}
          </Button>
        ))}
      </div>

      <h2>{restaurant?.name}</h2>

      {restaurantId && (
        <>
          <div className="tabs">
            <NavLink to="menu">Menu</NavLink>
            <NavLink to="reviews">Reviews</NavLink>
          </div>

          <Outlet />
        </>
      )}
    </main>
  );
};

export default RestaurantsPage;
