import React from "react";
import { useHistory } from "react-router-dom";

const Nav = () => {
  let history = useHistory();
  const ViewCategories = () => {
    history.push("/view/category");
  };

  const viewLocations = () => {
    history.push("/view/location");
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__content'>
          <h1 className='title'>My location</h1>
          <nav className='nav'>
            <li>
              <button className='v.c' onClick={ViewCategories}>
                View Categories
              </button>
            </li>
            <li>
              <button className='v.l' onClick={viewLocations}>
                View Location
              </button>
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
