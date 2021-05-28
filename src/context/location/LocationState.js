import React, { useReducer } from "react";
import LocationContext from "./locationContext";
import LocationReducer from "./locationReducer";
import { REMOVE, EDIT, ADD, VIEWS, VIEW, ID } from "../types";

const LocationState = (props) => {
  const initialState = {
    locations: null,
    current: null,
    locId: [],
  };

  const [state, dispatch] = useReducer(LocationReducer, initialState);

  const getLocations = () => dispatch({ type: VIEWS });

  const getId = () => {
    let id = JSON.parse(localStorage.locations);

    id = id.map((data, index) => index);

    dispatch({ type: ID, payload: id });
  };

  const getCurrent = async (index) => {
    const loc = JSON.parse(localStorage.locations);
    let data = loc.filter((el, i) => i === index);
    dispatch({ type: VIEW, payload: data });
  };

  const addLocation = (location) => {
    dispatch({ type: ADD, payload: location });
  };

  const removeLocation = (index) => {
    const loc = JSON.parse(localStorage.locations);
    loc.splice(index, 1);
    dispatch({ type: REMOVE, payload: loc });
  };

  const editLocation = (index, data) => {
    const loc = JSON.parse(localStorage.locations);
    loc[index] = data;
    dispatch({ type: EDIT, payload: loc });
  };

  return (
    <LocationContext.Provider
      value={{
        categories: state.categories,
        locations: state.locations,
        current: state.current,
        locId: state.locId,
        getLocations,
        getCurrent,
        addLocation,
        removeLocation,
        editLocation,
        getId,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationState;
