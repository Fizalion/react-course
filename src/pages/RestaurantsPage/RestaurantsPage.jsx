import { useSelector } from "react-redux";
import { selectRestaurants } from "../../redux/selectors";
import Button from "../../components/Button/Button";
import { useNavigate, useParams, Outlet, NavLink } from "react-router-dom";

const RestaurantsPage = () => {
  const restaurants = useSelector(selectRestaurants);
  const { restaurantId } = useParams();
  const navigate = useNavigate();

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === restaurantId,
  );

  function handleClick(id) {
    if (id === restaurantId) return;
    navigate(`/restaurants/${id}`);
  }

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
