import React, { useEffect, useContext } from "react";
import ViewCatItem from "./ViewCatItem";
import CategoryContext from "../../../context/category/categoryContext";

const CatViews = () => {
  const categoryContext = useContext(CategoryContext);
  const { categories, getCategories } = categoryContext;

  useEffect(() => {
    if (localStorage.categories) getCategories();
  }, []);

  return (
    <div className='catViews'>
      {categories !== null &&
        categories.map((category, index) => (
          <ViewCatItem key={index} category={category} />
        ))}
    </div>
  );
};

export default CatViews;
