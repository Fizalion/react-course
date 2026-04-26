import { useReviewForm } from "./useReviewForm";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import styles from "./ReviewForm.module.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/context";
import {
  createReview,
  loadReviewsByRestaurantId,
} from "../../redux/entities/reviews/reviewsSlice";
import { loadRestaurantById } from "../../redux/entities/restaurants/restaurantsSlice";
import { useContext } from "react";

const ReviewForm = () => {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const { user } = useContext(UserContext);

  const {
    state,
    handleTextChange,
    handleIncrementRating,
    handleDecrementRating,
    handleClear,
  } = useReviewForm();

  const handleSubmit = async () => {
    if (!restaurantId || !user) return;

    const review = {
      userId: user.id,
      text: state.text,
      rating: state.rating,
    };

    await dispatch(createReview({ restaurantId, review }));
    await dispatch(loadRestaurantById(restaurantId));
    await dispatch(loadReviewsByRestaurantId(restaurantId));
    handleClear();
  };

  return (
    <div className={styles.form}>
      <div className={styles.field}>
        <label>Текст отзыва</label>
        <textarea
          className={styles.textarea}
          value={state.text}
          onChange={handleTextChange}
        />
      </div>

      <div className={styles.controls}>
        <Counter
          value={state.rating}
          onIncrement={handleIncrementRating}
          onDecrement={handleDecrementRating}
        />
        <Button onClick={handleSubmit}>Отправить</Button>
        <Button onClick={handleClear}>Очистить</Button>
      </div>
    </div>
  );
};

export default ReviewForm;
