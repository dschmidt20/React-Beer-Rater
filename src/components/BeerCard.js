import React from 'react';

function BeerCard({ beer }) {

    const { image, name, category, votes, notes, region, abv } = beer;

    function handleImgClick() {
        console.log('Imageclicked');
    }

    function handleBtnClick() {
        console.log('Button clicked')
    }

    return (
        <div className="container">
            <div className="card">
                <img src={image} alt={name} onClick={handleImgClick} />
                <div className='card-details'>
                    <div className='beer-name'>
                        <h4>{name}</h4>
                    </div>
                    <p>Category: {category} </p>
                    <p>Region: {region}</p>
                    <p>ABV: {abv}%</p>
                    <p>Votes: {votes}</p>
                    <button className="button" onClick={handleBtnClick}>It's got my vote!</button>
                </div>
            </div>
        </div>
    )
}

export default BeerCard;
