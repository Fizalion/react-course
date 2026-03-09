import Dish from "../Dish/Dish";

const Restaurant = ({ restaurant }) => {
  return (
    <section>
      <h2>{restaurant.name}</h2>

      {restaurant.menu && restaurant.menu.length > 0 && (
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

      {restaurant.reviews && restaurant.reviews.length > 0 && (
        <>
          <h3>Отзывы</h3>
          <ul>
            {restaurant.reviews.map((review) => (
              <li key={review.id}>{review.text}</li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Restaurant;
