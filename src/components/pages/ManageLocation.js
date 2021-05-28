import React, { Fragment, useEffect, useContext } from "react";
import AddLocation from "../AddLocation";
import LocationContext from "../../context/location/locationContext";

const ManageLocation = () => {
  const locationContext = useContext(LocationContext);
  const { locId, getId } = locationContext;

  useEffect(() => {
    if (localStorage.locations) getId();
  }, []);

  return (
    <Fragment>
      <AddLocation locationId={locId} />
    </Fragment>
  );
};

export default ManageLocation;
