import React, { useState, useContext, useEffect } from "react";
import LocationContext from "../context/location/locationContext";
import CategoryContext from "../context/category/categoryContext";

const AddLocation = ({ locationId }) => {
  let locations = [];

  const locationContext = useContext(LocationContext);
  const {
    addLocation,
    getCurrent,
    current,
    editLocation,
    removeLocation,
    clearCurr,
  } = locationContext;

  const categoryContext = useContext(CategoryContext);
  const { categories, getCategories } = categoryContext;

  const [locInfo, setLocInfo] = useState({
    name: "",
    lat: "",
    lng: "",
    address: "",
    category: "",
  });

  const [index, setIndex] = useState("");

  useEffect(() => {
    if (current.length > 0) {
      setLocInfo(current[0]);
    }

    if (localStorage.locations) {
      locations = JSON.parse(localStorage.locations);
    }

    if (localStorage.categories) getCategories();
  }, [current]);

  const { name, lat, lng, address, category } = locInfo;

  const onChange = (e) => {
    setLocInfo({ ...locInfo, [e.target.name]: e.target.value });
  };

  const addLocItem = (e) => {
    if (
      name !== "" &&
      lat !== "" &&
      lng !== "" &&
      address !== "" &&
      category !== ""
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
    setLocInfo({ name: "", lat: "", lng: "", address: "", category: "" });
  };

  const editLocItem = (e) => {
    editLocation(Number(index), locInfo);
  };

  const delLocation = () => {
    removeLocation(Number(index));
    setLocInfo({ name: "", lat: "", lng: "", address: "", category: "" });
  };

  const setCat = (e) => {
    setLocInfo({ ...locInfo, category: e.target.value });
  };

  const clearForm = () => {
    setLocInfo({ name: "", lat: "", lng: "", address: "", category: "" });
    clearCurr();
  };

  const getIndex = (e) => setIndex(e.target.value);

  const setCurrent = () => getCurrent(Number(index));

  return (
    <div className='location'>
      <div className='form'>
        <div className='selectIndex'>
          <select name='index' onChange={getIndex}>
            {locationId.length > 0 &&
              locationId.map((opt, index) => (
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
          className='name'
          name='name'
          value={name || ""}
          onChange={onChange}
          placeholder='Enter name of location'
        />
        <div className='coords'>
          <input
            type='text'
            className='lat'
            name='lat'
            value={lat || ""}
            onChange={onChange}
            placeholder='Enter lat of location'
          />
          <input
            type='text'
            className='lng'
            name='lng'
            value={lng || ""}
            onChange={onChange}
            placeholder='Enter lng of location'
          />
        </div>
        <input
          type='text'
          className='address'
          name='address'
          value={address || ""}
          onChange={onChange}
          placeholder='Enter address of location'
        />
        <input
          type='text'
          className='categorys'
          name='category'
          value={category || ""}
          disabled={true}
          placeholder='Enter catergory of location'
        />
        <select name='cat' id='aaa' onChange={setCat}>
          {categories.length > 0 &&
            categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </div>
      <div className='addLoc'>
        {current.length === 0 ? (
          <button className='add' onClick={addLocItem}>
            Add Location
          </button>
        ) : (
          <button className='add' onClick={clearForm}>
            Clear
          </button>
        )}
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
