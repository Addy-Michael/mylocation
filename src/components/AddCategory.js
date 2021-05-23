import React from "react";

const AddCategory = () => {
  return (
    <div className='category'>
      <div className='form'>
        <input
          type='text'
          className='categoryInput'
          placeholder='Enter category'
        />
      </div>
      <div className='addCat'>
        <button className='add'>Add Location</button>
        <button className='add edit'>Edit Location</button>
        <button className='add del'>Delete</button>
      </div>
    </div>
  );
};

export default AddCategory;
