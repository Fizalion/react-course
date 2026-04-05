import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import Dish from "../Dish/Dish";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";

const Restaurant = ({ restaurant }) => {
  const name = restaurant.name;
  const menu = restaurant.menu;
  const reviews = restaurant.reviews || [];
  const { user } = useContext(UserContext);

  return (
    <section>
      <h2>{name}</h2>

      {menu?.length > 0 && (
        <>
          <h3>Меню</h3>
          <ul>
            {menu.map((dish) => (
              <li key={dish.id}>
                <Dish dish={dish} />
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
              <Review review={review} />
            </li>
          ))}
        </ul>
      )}
      {user && <ReviewForm />}
    </section>
  );
};

export default Restaurant;
