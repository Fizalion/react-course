import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectReviewsByRestaurantId } from "../../redux/selectors";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext/context";
import Review from "../../components/Review/Review";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import { loadReviewsByRestaurantId } from "../../redux/entities/reviews/reviewsSlice";
import { REQUEST_STATUS } from "../../redux/constants";
import { loadUsers } from "../../redux/entities/users/usersSlice";

const ReviewsPage = () => {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const reviews = useSelector((state) =>
    selectReviewsByRestaurantId(state, restaurantId),
  );
  const statusReviews = useSelector((state) => state.reviews.status);
  const errorReviews = useSelector((state) => state.reviews.error);
  const statusUsers = useSelector((state) => state.users.status);
  const errorUsers = useSelector((state) => state.users.error);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (restaurantId && reviews.length === 0)
      dispatch(loadReviewsByRestaurantId(restaurantId));
  }, [restaurantId, dispatch, reviews.length]);

  useEffect(() => {
    if (statusUsers === REQUEST_STATUS.IDLE) dispatch(loadUsers());
  }, [statusUsers, dispatch]);

  if (statusReviews === REQUEST_STATUS.LOADING)
    return <div>Загрузка отзывов...</div>;
  if (statusReviews === REQUEST_STATUS.FAILED) return <div>{errorReviews}</div>;
  if (statusUsers === REQUEST_STATUS.LOADING)
    return <div>Загрузка пользователей...</div>;
  if (statusUsers === REQUEST_STATUS.FAILED) return <div>{errorUsers}</div>;

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
