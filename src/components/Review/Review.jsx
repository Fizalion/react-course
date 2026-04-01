import styles from "./Review.module.css";

const Review = ({ review }) => {
  const { name, text, rating } = review;

  return (
    <div className={styles.review}>
      <div>{name}</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.rating}>{rating}</div>
    </div>
  );
};

export default Review;
