import React, { useContext, useEffect } from "react";
import ViewItem from "./ViewLocItem";
import LocationContext from "../../../context/location/locationContext";

const Views = () => {
  const locationContext = useContext(LocationContext);
  const { getLocations, locations } = locationContext;

  useEffect(() => {
    if (localStorage.locations) getLocations();
  }, []);

  return (
    <div className='container'>
      <div className='allLocations'>
        {locations !== null &&
          locations.map((location, index) => (
            <ViewItem key={index} location={location} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Views;
