import React, { useReducer } from "react";
import CategoryContext from "./categoryContext";
import CategoryReducer from "./categoryReducer";
import { REMOVE, EDIT, ADD, VIEWS, VIEW, ID } from "../types";

const CategoryState = (props) => {
  const initialState = {
    categories: [],
    current: null,
    catId: [],
  };

  const [state, dispatch] = useReducer(CategoryReducer, initialState);

  const getCategories = () => dispatch({ type: VIEWS });

  const getId = () => {
    let id = JSON.parse(localStorage.categories);

    id = id.map((data, index) => index);

    dispatch({ type: ID, payload: id });
  };

  const getCurrent = async (index) => {
    const cat = JSON.parse(localStorage.categories);
    let data = cat.filter((el, i) => i === index);
    dispatch({ type: VIEW, payload: data });
  };

  const addCategory = (cat) => {
    dispatch({ type: ADD, payload: cat });
  };

  const removeCategory = (index) => {
    const cat = JSON.parse(localStorage.categories);
    cat.splice(index, 1);
    dispatch({ type: REMOVE, payload: cat });
  };

  const editCategory = (index, data) => {
    const cat = JSON.parse(localStorage.categories);
    cat[index] = data;
    dispatch({ type: EDIT, payload: cat });
  };

  return (
    <CategoryContext.Provider
      value={{
        categories: state.categories,
        current: state.current,
        catId: state.catId,
        getCategories,
        getCurrent,
        addCategory,
        removeCategory,
        editCategory,
        getId,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryState;
