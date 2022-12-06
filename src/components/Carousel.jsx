import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselCard from "../cards/CarouselCard";
import { useState, useEffect } from 'react';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


function CarouselC() {
  const url = "https://api.themoviedb.org/3/trending/movie/day?api_key=0eaae2146624836f2825bc2d4154ad6e";
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {setMovieList(data.results)
                    })
  }, [])
  
  return (
    <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 0.2"
        transitionDuration={200}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[]}
      // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
        style={{ width: '100%'}}
      >
        {
          movieList.map((movie) => {
           return  <CarouselCard key={movie.id} {...movie} />
          })
        }
    </Carousel>
  )
}

export default CarouselC