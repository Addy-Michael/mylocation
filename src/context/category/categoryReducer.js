import { REMOVE, EDIT, VIEWS, VIEW, ADD, ID } from "../types";

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
        categories: JSON.parse(localStorage.categories),
      };

    case VIEW:
      return {
        ...state,
        current: action.payload,
      };

    case ADD:
    case REMOVE:
    case EDIT:
      localStorage.setItem("categories", JSON.stringify(action.payload));
      return {
        ...state,
        locations: JSON.parse(localStorage.categories),
      };

    default:
      return state;
  }
};
