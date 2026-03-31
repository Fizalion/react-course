import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";
import Dish from "../Dish/Dish";

const Restaurant = ({ restaurant }) => {
  return (
    <section>
      <h2>{restaurant.name}</h2>

      {restaurant.menu?.length > 0 && (
        <>
          <h3>Меню</h3>
          <ul>
            {restaurant.menu.map((dish) => (
              <li key={dish.id}>
                <Dish dish={dish} />
              </li>
            ))}
          </ul>
        </>
      )}

      <>
        <h3>Отзывы</h3>
        {restaurant.reviews?.length === 0 && <div>Нет отзывов</div>}
        {restaurant.reviews?.length > 0 && (
          <ul>
            {restaurant.reviews.map((review) => (
              <li key={review.id}>
                <Review review={review} />
              </li>
            ))}
          </ul>
        )}
        <ReviewForm />
      </>
    </section>
  );
};

export default Restaurant;
