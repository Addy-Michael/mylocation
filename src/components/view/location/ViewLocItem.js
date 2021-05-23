import React from "react";

const ViewItem = ({
  location: { address, categories, lat, lng, name },
  index,
}) => {
  return (
    <div className='location-details card'>
      <div className='locName'>
        {" "}
        <span> Name</span> {name}
      </div>
      <div className='locCat'>
        <span> Category</span> {categories}
      </div>
      <div className='loc-coords'>
        {/* <h3>Coordinates</h3> */}
        <div className='loc-lat'>
          <span>Lat</span> {lat}
        </div>
        <div className='loc-lng'>
          <span>Lng</span> {lng}
        </div>
      </div>
      <p className='loc-address'>
        <span>Address</span> {address}
      </p>
    </div>
  );
};

export default ViewItem;
