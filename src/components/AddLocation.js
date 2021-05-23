import React, { useState, useContext, useEffect } from "react";
import LocationContext from "../context/location/locationContext";

const AddLocation = () => {
  let locations = [];

  const locationContext = useContext(LocationContext);
  const {
    addLocation,
    getCurrent,
    current,
    editLocation,
    removeLocation,
    getId,
    locId,
  } = locationContext;

  const [locInfo, setLocInfo] = useState({
    name: "",
    lat: "",
    lng: "",
    address: "",
    categories: "",
  });

  const [index, setIndex] = useState("");

  useEffect(() => {
    if (current !== null) {
      setLocInfo(current[0]);
    }

    if (localStorage.locations) {
      locations = JSON.parse(localStorage.locations);
      console.log(localStorage.locations);
    }
    getId();
  }, [current]);

  const { name, lat, lng, address, categories } = locInfo;

  const onChange = (e) => {
    setLocInfo({ ...locInfo, [e.target.name]: e.target.value });
  };

  const addLocItem = (e) => {
    if (
      name !== "" &&
      lat !== "" &&
      lng !== "" &&
      address !== "" &&
      categories !== ""
    ) {
      if (localStorage.locations) {
        locations = JSON.parse(localStorage.getItem("locations"));
        locations.push(locInfo);
        addLocation(locations);
      } else {
        locations.push(locInfo);
        addLocation(locations);
      }
    }
    setLocInfo({ name: "", lat: "", lng: "", address: "", categories: "" });
  };

  const editLocItem = (e) => {
    editLocation(Number(index), locInfo);
  };

  const delLocation = () => {
    removeLocation(Number(index));
    setLocInfo({ name: "", lat: "", lng: "", address: "", categories: "" });
  };

  const getIndex = (e) => setIndex(e.target.value);

  const setCurrent = () => getCurrent(Number(index));

  console.log(locId);

  return (
    <div className='location'>
      <div className='form'>
        <div className='selectIndex'>
          <select name='index' onChange={getIndex}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
          <button className='add edit' onClick={setCurrent}>
            Select Index
          </button>
        </div>
        <input
          type='text'
          className='name'
          name='name'
          value={name}
          onChange={onChange}
          placeholder='Enter name of location'
        />
        <div className='coords'>
          <input
            type='text'
            className='lat'
            name='lat'
            value={lat}
            onChange={onChange}
            placeholder='Enter lat of location'
          />
          <input
            type='text'
            className='lng'
            name='lng'
            value={lng}
            onChange={onChange}
            placeholder='Enter lng of location'
          />
        </div>
        <input
          type='text'
          className='address'
          name='address'
          value={address}
          onChange={onChange}
          placeholder='Enter address of location'
        />
        <input
          type='text'
          className='categories'
          name='categories'
          value={categories}
          onChange={onChange}
          placeholder='Enter catergory of location'
        />
      </div>
      <div className='addLoc'>
        <button className='add' onClick={addLocItem}>
          Add Location
        </button>
        <button className='add edit' onClick={editLocItem}>
          Edit Location
        </button>
        <button className='add del' onClick={delLocation}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddLocation;
