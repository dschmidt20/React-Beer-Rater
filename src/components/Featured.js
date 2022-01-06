import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardContent, CardDescription, CardHeader, Image, Popup, Rating } from "semantic-ui-react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2
  }
};

const Featured = ({ featured }) => {

    // const images = featured.map(beer => beer.image);
    // const names = featured.map(beer => beer.name);

  return (
      <div style={{display: window.location.pathname === '/beerform' || window.location.pathname === '/thanks' ? 'none' : 'block'}} className="featured-carousel">
          <div id='featured-header'>
              <h4>The Best Beers</h4>
          </div>
        <Carousel
            className="carousel"
            ssr={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            arrows={false}
            >
            {featured.slice(0, 5).map(beer => {
                return (
                    <Popup
                        trigger={
                            <Card
                                style={{ 
                                    backgroundColor: 'white',
                                    width: '250px',
                                }}
                            >
                                <Image
                                    draggable={false}
                                    style={{ width: "100%", height: "100%" }}
                                    src={beer.image}
                                />
                                <CardHeader
                                    style={{paddingTop: '7px', color: '#342404'}}
                                >
                                    <p>{beer.name}</p>
                                </CardHeader>
                                
                            </Card>
                        }
                        style={{
                            backgroundColor: 'white', 
                            padding: '10px 10px', 
                            borderRadius: '5px',
                            margin: '8px',
                        }}
                    >
                        <Popup.Header
                            style={{color: '#342404'}}
                        >
                                Specifications</Popup.Header>
                        <Popup.Content>
                            <p
                                style={{color: '#ce5e04'}}
                            >
                                {beer.category}<br/>
                                {beer.region}<br/>
                                {beer.abv}%<br/>
                                {beer.votes}
                            </p>
                        </Popup.Content>
                    </Popup>
                );
            })}
        </Carousel>
    </div>
  );
};

export default Featured;
