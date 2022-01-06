import React, { useState } from 'react';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';

function BeerCard({ beer, handleVoteClick }) {
    const [detailsToggle, setDetailsToggle] = useState(false);
    
    const { id, image, name, brewery, category, votes, notes, region, abv } = beer;


    return (
        <div className="container">
            <div className="card">
                <img src={image} alt={name} />
                    <div className='beer-name'>
                        <h4>{name}</h4> <br/><h5>{brewery}</h5>
                    </div>
                <div className='card-btns'>
                    <button style={{float: 'left'}}
                        className="card-button" 
                        id={id} 
                        vote={votes} 
                        onClick={() => handleVoteClick(id, votes)}
                    >Vote</button>
                    <button style={{float: 'right'}}
                        className="card-button" 
                        id={id} 
                        vote={votes} 
                        onClick={() => setDetailsToggle(!detailsToggle)}
                    >{detailsToggle ? <VscChevronUp/> : <VscChevronDown/>}</button>
                </div>
                <div style={{display: detailsToggle ? 'block' : 'none'}} className='card-details'>
                    <h4 style={{textDecoration: 'overline'}}>Specifications</h4>
                    <p>Category: {category} </p>
                    <p>Region: {region}</p>
                    <p>ABV: {abv}%</p>
                    <p>Votes: {votes}</p>
                </div>
            </div>
        </div>
    )
}

export default BeerCard;
