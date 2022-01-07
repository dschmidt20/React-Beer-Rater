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
        <div className="hannah-about">
            <div className='hannah-header'>
                <h4>Hi</h4>
            </div>
                <p className='hannah-content'>
                    Hey thanks for visiting our page!<br/>
                    Let me acknowledge what is probably your initial thought - yes, my favorite beer list is measly - so let me be honest with you; whiskey is my drink of choice, but hand me a tangy sour beer and it's all over. There's just something undeniable about           
                </p>
            <div className='beerList'>
                {hannahsBeers}
            </div>
        </div>
    )
}

export default HannahsFavs;
