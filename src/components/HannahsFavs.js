import React from "react";
import BeerCard from "./BeerCard";

function HannahsFavs({ hannah, handleVoteClick }) {
  const hannahsBeers = hannah.map((h) => {
    return (
      <BeerCard
        key={h.id}
        beer={h}
        handleVoteClick={handleVoteClick}
      />
    );
  });
  return (
    <>
        <div className="hannah-about">
            <div className='hannah-header'>
                <h2>Hey thanks for visiting!</h2>
            </div>
                <p className='hannah-content'>
                  My name is Hannah, and I am one of the developers of Beer Stuff. <br/>
                  Let me acknowledge what is probably your initial thought of my list - my favorite beer list is indeed measly - so let me be honest with you; whiskey is my drink of choice, but hand me a tangy sour beer and it's all over. There's just something undeniable about the layers of flavor topped by a refreshing tartness that makes the hairs on the back of your neck stand up.<br/>
                  Anyways, here are my favorite beers. <br/>
                  Cheers. 
                </p>
        </div>

      <h1 style={{fontSize: '25pt',paddingTop:'30px'}}>
        My Favorite Beers
      </h1>
        <div className="beerList">{hannahsBeers}</div>
    </>
  );
}

export default HannahsFavs;
