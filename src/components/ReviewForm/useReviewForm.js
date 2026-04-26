import { useReducer } from "react";

const initialState = {
  text: "",
  rating: 1,
};

function reducer(state, action) {
  switch (action.type) {
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

export const useReviewForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  return {
    state,
    handleTextChange,
    handleIncrementRating,
    handleDecrementRating,
    handleClear,
  };
};
