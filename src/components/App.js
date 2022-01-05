import "../App.css";
import React, { useEffect, useState } from "react";
import Header from './Header';
import NavBar from "./NavBar";
import MainBeerList from "./MainBeerList";
import BeerForm from "./BeerForm";
import LikedBeerList from "./LikedBeerList";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const API = 'http://localhost:3001/beers/';

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(beerData => setBeers(beerData))
  }, [])

  return (
    <div className="app">
      <Header />
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
            <MainBeerList beers={beers}  />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
