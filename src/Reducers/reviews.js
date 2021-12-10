export default function reviews(state = [], action) {
    switch (action.type) {
      case "GET_REVIEWS":
        return [...action.reviews];
      case "ADD_REVIEW":
        return [...action.reviews];
      case "UPDATE_REVIEW":
        const updatedReview = action.review;
        return state.map((review) => review.id === updatedReview.id ? updatedReview : review);
      case "REMOVE_REVIEW":
        return state.filter((review) => review.id !== action.id);
      default:
        return state;
    }
  }