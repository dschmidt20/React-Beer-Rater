import React, { useState } from 'react';
import { Card, Button, Image } from 'semantic-ui-react'
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';

function BeerCard({ beer, handleVoteClick }) {
    const [detailsToggle, setDetailsToggle] = useState(false);
    const [voted, setVoted] = useState(false);
    
    const { id, image, name, brewery, category, votes, notes, region, abv } = beer;

    function handleVClick(e, votes) {
        handleVoteClick(e, votes);
        setVoted(true);
    }


    return (
        <div className="container">
            <Card
                style={{
                    backgroundColor: 'white',
                    width: '250px',
                }}
            >
                <Image src={image} alt={name} />
                <Card.Content>
                    <Card.Header
                        style={{
                            marginTop: '15px'
                        }}
                    >{name}</Card.Header>
                <Card.Meta
                    style={{
                        marginBottom: '15px'
                    }}
                >{brewery}</Card.Meta>
                    <Button
                        style={{float: 'left'}}
                        id={id} 
                        votes={votes} 
                        onClick={() => handleVClick(id, votes)}
                    >
                        {voted ? 'Voted!' : 'Vote'}
                    </Button>
                    <Button 
                        style={{float: 'right'}} 
                        id={id} 
                        votes={votes} 
                        onClick={() => setDetailsToggle(!detailsToggle)}
                    >{detailsToggle ? <VscChevronUp/> : <VscChevronDown/>}</Button>
                </Card.Content>

                <Card.Content 
                    extra 
                    style={{display: detailsToggle ? 'block' : 'none'}}    
                >
                    <h4 style={{textDecoration: 'overline', marginTop: '25px'}}>Specs</h4>
                    <p>Category: {category} </p>
                    <p>Region: {region}</p>
                    <p>ABV: {abv}%</p>
                    <p>Notes: {notes}</p>
                    <p>Votes: {votes}</p>
                </Card.Content>
            </Card>
        </div>
    )
}

export default BeerCard;
