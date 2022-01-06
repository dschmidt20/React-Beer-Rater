import React from 'react'
import BeerCard from './BeerCard'

function HannahsFavs({hannah}) {
    const hannahsBeers = hannah.map(h => {
        return (
            <BeerCard 
                key={h.id}
                beer={h}
                // handleVoteClick={handleVoteClick}
            />
        )
    })
    return (
        <div className='beerList'>
            {hannahsBeers}
        </div>
    )
}

export default HannahsFavs
