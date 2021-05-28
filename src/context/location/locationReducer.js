import { REMOVE, EDIT, VIEWS, VIEW, ADD, ID, CLEAR_CURRENT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ID:
      return {
        ...state,
        locId: action.payload,
      };

    case VIEWS:
      return {
        ...state,
        locations: JSON.parse(localStorage.locations),
      };

    case VIEW:
      return {
        ...state,
        current: action.payload,
      };

    case ADD:
    case REMOVE:
    case EDIT:
      localStorage.setItem("locations", JSON.stringify(action.payload));
      return {
        ...state,
        locations: JSON.parse(localStorage.locations),
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: [],
        categories: [],
      };

    default:
      return state;
  }
};
