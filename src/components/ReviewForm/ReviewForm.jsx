import { useReducer } from "react";
import Counter from "../Counter/Counter";
import styles from "./ReviewForm.module.css";

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_TEXT":
      return { ...state, text: action.payload };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}

const initialState = {
  name: "",
  text: "",
  rating: 1,
};

const ReviewForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleNameChange(e) {
    dispatch({
      type: "SET_NAME",
      payload: e.target.value,
    });
  }

  function handleTextChange(e) {
    dispatch({
      type: "SET_TEXT",
      payload: e.target.value,
    });
  }

  function handleIncrementRating() {
    if (state.rating === 5) return;

    dispatch({
      type: "SET_RATING",
      payload: state.rating + 1,
    });
  }

  function handleDecrementRating() {
    if (state.rating === 1) return;

    dispatch({
      type: "SET_RATING",
      payload: state.rating - 1,
    });
  }

  function handleClear() {
    dispatch({
      type: "RESET_FORM",
    });
  }

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
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default ReviewForm;
