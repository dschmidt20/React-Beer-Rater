import React from 'react';
import BeerCard from './BeerCard';

function MainBeerList({ beers, handleVoteClick }) {

    const beerElements = beers.map(beer => {
        return (
            <BeerCard 
                key={beer.id}
                beer={beer}
                handleVoteClick={handleVoteClick}
            />
        )
    })
    return (
        <div id='beer-list-container'>
            <div>
                <h2 id='beers-list-header'>All of the Beers</h2>
            </div>
            <div className='beerList'>
                {beerElements}
            </div>
        </div>
    )
}

export default MainBeerList;
