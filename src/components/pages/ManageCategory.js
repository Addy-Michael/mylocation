import React, { Fragment, useEffect, useContext } from "react";
import AddCategory from "../AddCategory";
import CategoryContext from "../../context/category/categoryContext";

const ManageCategory = () => {
  const categoryContext = useContext(CategoryContext);
  const { catId, getId } = categoryContext;

  useEffect(() => {
    if (localStorage.locations) getId();
  }, []);

  return (
    <Fragment>
      <AddCategory categoryId={catId} />
    </Fragment>
  );
};

export default ManageCategory;
