import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2
  }
};

const Featured = ({ featured }) => {

    const images = featured.map(beer => beer.image);
    const names = featured.map(beer => beer.name);

  return (
      <div style={{display: window.location.pathname === '/beerform' || window.location.pathname === '/thanks' ? 'none' : 'block'}} className="featured-carousel">
          <div id='featured-header'>
              <h4>The Best Beers</h4>
          </div>
        <Carousel
            itemClass="image-item"
            ssr={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            >
            {images.slice(0, 5).map(image => {
                return (
                <Image
                    draggable={false}
                    style={{ width: "100%", height: "100%", marginRight: '100px' }}
                    src={image}
                />
                );
            })}
        </Carousel>
    </div>
  );
};

export default Featured;
