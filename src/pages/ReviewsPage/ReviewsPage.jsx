import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectReviewsByRestaurantId } from "../../redux/selectors";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import Review from "../../components/Review/Review";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

const ReviewsPage = () => {
  const { restaurantId } = useParams();
  const reviews = useSelector((state) =>
    selectReviewsByRestaurantId(state, restaurantId),
  );
  const { user } = useContext(UserContext);

  return (
    <section>
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

export default ReviewsPage;
