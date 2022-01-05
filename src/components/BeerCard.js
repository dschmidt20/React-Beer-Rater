import React, { useState } from 'react';

function BeerCard({ beer, handleVoteClick }) {
    
    const { id, image, name, brewery, category, votes, notes, region, abv } = beer;

    function handleImgClick() {
        console.log('Imageclicked');
    }

    return (
        <div className="container">
            <div className="card">
                <img src={image} alt={name} onClick={handleImgClick} />
                    <div className='beer-name'>
                        <h4>{name} <br/> {brewery}</h4>
                    </div>
                <div className='card-details'>
                    <p>Category: {category} </p>
                    <p>Region: {region}</p>
                    <p>ABV: {abv}%</p>
                    <p>Votes: {votes}</p>
                    <button className="button" id={id} vote={votes} onClick={() => handleVoteClick(id, votes)}>It's got my vote!</button>
                </div>
            </div>
        </div>
    )
}

export default BeerCard;
