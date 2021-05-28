import React from "react";

const ViewCatItem = (props) => {
  return (
    <div className='catItem'>
      <p>{props.category}</p>
    </div>
  );
};

export default ViewCatItem;
