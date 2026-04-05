import { useReviewForm } from "./useReviewForm";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import styles from "./ReviewForm.module.css";

const ReviewForm = () => {
  const {
    state,
    handleNameChange,
    handleTextChange,
    handleIncrementRating,
    handleDecrementRating,
    handleClear,
  } = useReviewForm();

  return (
    <div className={styles.form}>
      <div className={styles.field}>
        <label>Имя</label>
        <input
          className={styles.input}
          value={state.name}
          onChange={handleNameChange}
        />
      </div>

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
        <Button onClick={handleClear}>Очистить</Button>
      </div>
    </div>
  );
};

export default ReviewForm;
