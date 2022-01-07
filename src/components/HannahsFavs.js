import React from "react";
import BeerCard from "./BeerCard";

function HannahsFavs({ hannah }) {
  const hannahsBeers = hannah.map((h) => {
    return (
      <BeerCard
        key={h.id}
        beer={h}
        // handleVoteClick={handleVoteClick}
      />
    );
  });
  return (
    <>
      <h1 style={{fontSize: '35pt',paddingTop:'30px'}}>
        Check out Hannah's Favorite Beers!
        <div className="beerList">{hannahsBeers}</div>
      </h1>
    </>
  );
}

export default HannahsFavs;
