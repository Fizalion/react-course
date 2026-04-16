import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurantsSlice";
import { selectDishesByRestaurantId } from "../../redux/selectors";
import { selectReviewsByRestaurantId } from "../../redux/selectors";
import { UserContext } from "../../contexts/UserContext/UserContext";
import Dish from "../Dish/Dish";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";

const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const dishes = useSelector((state) =>
    selectDishesByRestaurantId(state, restaurantId),
  );
  const reviews = useSelector((state) =>
    selectReviewsByRestaurantId(state, restaurantId),
  );
  const { user } = useContext(UserContext);

  if (!restaurant) return null;

  const { name } = restaurant;

  return (
    <section>
      <h2>{name}</h2>

      {dishes?.length > 0 && (
        <>
          <h3>Меню</h3>
          <ul>
            {dishes.map((dish) => (
              <li key={dish.id}>
                <Dish dishId={dish.id} />
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
          {reviews.map((review) => (
            <li key={review.id}>
              <Review reviewId={review.id} />
            </li>
          ))}
        </ul>
      )}
      {user && <ReviewForm />}
    </section>
  );
};

export default Restaurant;
