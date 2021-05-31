import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LocationState from "./context/location/LocationState";
import CategoryState from "./context/category/CategoryState";
import Nav from "./components/Nav";
import Management from "./components/Management";
import ManageLocation from "./components/pages/ManageLocation";
import ManageCategory from "./components/pages/ManageCategory";
import ViewLocations from "./components/view/location/LocViews";
import ViewCategories from "./components/view/category/CatViews";

function App() {
  return (
    <LocationState>
      <CategoryState>
        <Router>
          <Fragment>
            <Nav />
            <Switch>
              <Route exact path='/add-location' component={ManageLocation} />
              <Route exact path='/add-category' component={ManageCategory} />
              <Route
                exact
                path='/'
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
      </CategoryState>
    </LocationState>
  );
}

export default App;
