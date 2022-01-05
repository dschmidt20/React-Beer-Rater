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
        <div className='beerList'>
            {beerElements}
        </div>
    )
}

export default MainBeerList;
