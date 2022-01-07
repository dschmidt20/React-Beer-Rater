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
        <><h1 style={{fontSize: '35pt',paddingTop:'30px'}}>Check out Daniel's Favorite Beers!
        </h1>

        <div className='beerList'>
            {danielsBeers}
        </div>
        </>
    )
}
export default DanielsFavs
