import React from 'react'
import BeerCard from './BeerCard'

function DanielsFavs({daniel}) {
    const danielsBeers = daniel.map(d => {
        return (
            <BeerCard 
                key={d.id}
                beer={d}
                // handleVoteClick={handleVoteClick}
            />
        )
    })
    return (
        <div className='beerList'>
            {danielsBeers}
        </div>
    )
}
export default DanielsFavs
