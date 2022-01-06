import "../App.css";
import React, { useEffect, useState } from "react";
import Header from './Header';
import NavBar from "./NavBar";
import Featured from "./Featured";
import MainBeerList from "./MainBeerList";
import BeerForm from "./BeerForm";
import LikedBeerList from "./LikedBeerList";
import FormSubmission from "./FormSubmission";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const API = 'http://localhost:3001/beers/';

function App() {
  const [beers, setBeers] = useState([]);
  const [updateBeers, setUpdateBeers] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(beerData => setBeers(beerData))
  }, [updateBeers])

  useEffect(() => {
    handleFeatured();
  }, [beers])

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

  function handleFeatured() {
    let count = 0;

    for (let i = 0; i < beers.length - 1; i++) {
      count += beers[i].votes;
    }

    let avg = count / (beers.length - 1);

    const featuredArray = beers.filter(beer => beer.votes > (avg + (avg/4)));

    setFeatured([...featuredArray]);
  }

  console.log(featured);

  function handleAddBeer(newBeer) {
    setBeers([...beers, newBeer]);
  }

  return (
    <div className="app">
      <Header />
      <Featured featured={featured} />
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/likedbeers">
            <LikedBeerList />
          </Route>
          <Route path="/beerform">
            <BeerForm onAddBeer={handleAddBeer} api={API}/>
          </Route>
          <Route path='/thanks' component={FormSubmission}/>
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
