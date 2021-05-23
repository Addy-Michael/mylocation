import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LocationState from "./context/location/LocationState";
import Nav from "./components/Nav";
import Management from "./components/Management";
import AddLocation from "./components/AddLocation";
import AddCategory from "./components/AddCategory";
import ViewLocations from "./components/view/location/LocViews";
import ViewCategories from "./components/view/category/CatViews";

function App() {
  return (
    <LocationState>
      <Router>
        <Fragment>
          <Nav />
          <Switch>
            <Route
              exact
              path='/add-location'
              render={(props) => <AddLocation {...props} />}
            />
            <Route
              exact
              path='/add-category'
              render={(props) => <AddCategory {...props} />}
            />

            <Route
              exact
              path='/view/location'
              render={(props) => <ViewLocations {...props} />}
            />

            <Route
              exact
              path='/view/category'
              render={(props) => <ViewCategories {...props} />}
            />
          </Switch>
          <Management />
        </Fragment>
      </Router>
    </LocationState>
  );
}

export default App;
