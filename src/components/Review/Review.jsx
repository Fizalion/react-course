import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/reviewsSlice";
import { selectUserById } from "../../redux/entities/users/usersSlice";
import styles from "./Review.module.css";

const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));

  if (!review) return null;

  const { userId, text, rating } = review;
  const user = useSelector((state) => selectUserById(state, userId));
  const name = user?.name;

  return (
    <div className={styles.review}>
      <div>{name}</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.rating}>{rating}</div>
    </div>
  );
};

export default Review;
