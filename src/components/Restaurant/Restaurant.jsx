import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";
import Dish from "../Dish/Dish";

const Restaurant = ({ restaurant }) => {
  const name = restaurant.name;
  const menu = restaurant.menu;
  const reviews = restaurant.reviews || [];

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
      <ReviewForm />
    </section>
  );
};

export default Restaurant;
