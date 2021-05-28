import React, { useState, useContext, useEffect } from "react";
import CategoryContext from "../context/category/categoryContext";

const AddCategory = ({ categoryId }) => {
  let categories = [];

  const categoryContext = useContext(CategoryContext);
  const { addCategory, getCurrent, editCategory, removeCategory, current } =
    categoryContext;

  const [category, setCategory] = useState("");
  const [index, setIndex] = useState("");

  useEffect(() => {
    if (current !== null) {
      setCategory(current[0]);
    }
  }, [current]);

  const addCat = () => {
    if (category !== "" && localStorage.categories) {
      categories = JSON.parse(localStorage.categories);
      categories.push(category);
      addCategory(categories);
    } else {
      categories.push(category);
      addCategory(categories);
    }

    setCategory("");
  };

  const editCat = (e) => {
    editCategory(Number(index), category);
  };

  const delCat = () => {
    removeCategory(Number(index));
    setCategory("");
  };

  const onChange = (e) => setCategory(e.target.value);

  const getIndex = (e) => setIndex(e.target.value);

  const setCurrent = () => getCurrent(Number(index));

  return (
    <div className='category'>
      <div className='form'>
        <div className='selectIndex'>
          <select name='index' onChange={getIndex}>
            {categoryId.length > 0 &&
              categoryId.map((opt, index) => (
                <option key={index} value={index}>
                  {opt}
                </option>
              ))}
          </select>
          <button className='add edit' onClick={setCurrent}>
            Select Index
          </button>
        </div>
        <input
          type='text'
          className='categoryInput'
          placeholder='Enter category'
          value={category}
          onChange={onChange}
        />
      </div>
      <div className='addCat'>
        <button className='add' onClick={addCat}>
          Add Location
        </button>
        <button className='add edit' onClick={editCat}>
          Edit Location
        </button>
        <button className='add del' onClick={delCat}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
