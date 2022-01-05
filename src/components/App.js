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
  const [updateBeers, setUpdateBeers] = useState([])

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(beerData => setBeers(beerData))
  }, [updateBeers])

  // add votes 
  function handleVoteClick(id, votes) {
    fetch((API + id), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        votes: (votes + 1)
      }),
    })
      .then(res => res.json())
      // setUpdateBeers to trigger re-render with new vote
      .then(setUpdateBeers([updateBeers]))
  }

  function handleAddBeer(newBeer) {
    setBeers([...beers, newBeer]);
  }

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
            <BeerForm onAddBeer={handleAddBeer} api={API}/>
          </Route>
          <Route exact path='/'> 
            <MainBeerList 
              beers={beers} 
              handleVoteClick={handleVoteClick} 
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
