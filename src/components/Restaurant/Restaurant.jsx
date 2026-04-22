import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurantsSlice";
import { UserContext } from "../../contexts/UserContext/UserContext";
import Dish from "../Dish/Dish";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";

const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const { user } = useContext(UserContext);

  if (!restaurant) return null;
  const { menu, reviews, name } = restaurant;

  return (
    <section>
      <h2>{name}</h2>

      {menu?.length > 0 && (
        <>
          <h3>Меню</h3>
          <ul>
            {menu.map((dishId) => (
              <li key={dishId}>
                <Dish dishId={dishId} />
              </li>
            ))}
          </ul>
        </>
      )}

      <h3>Отзывы</h3>
      {reviews.length === 0 ? (
        <div>Нет отзывов</div>
      ) : (
        <ul>
          {reviews.map((reviewId) => (
            <li key={reviewId}>
              <Review reviewId={reviewId} />
            </li>
          ))}
        </ul>
      )}
      {user && <ReviewForm />}
    </section>
  );
};

export default Restaurant;
