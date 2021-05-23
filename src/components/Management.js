import React from "react";
import { useHistory } from "react-router-dom";

const Management = () => {
  let history = useHistory();
  const addCart = () => {
    history.push("/add-category");
  };

  const addLoc = () => {
    history.push("/add-location");
  };

  return (
    <div className='manage'>
      <button className='manageCategory' onClick={addCart}>
        Manage Category
      </button>
      <button className='manageLoc' onClick={addLoc}>
        Manage Location
      </button>
    </div>
  );
};

export default Management;
