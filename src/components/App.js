import "../App.css";
import React from "react";
import MainBeerList from "./MainBeerList";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BeerForm from "./BeerForm";
import LikedBeerList from "./LikedBeerList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/likedbeers">
            <LikedBeerList />
          </Route>
          <Route path="/beerform">
            <BeerForm  />
          </Route>
          <Route exact path='/'> 
            <MainBeerList  />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
