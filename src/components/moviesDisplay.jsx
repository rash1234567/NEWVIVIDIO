import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios"
import React,{useEffect,useState} from 'react';
import TopRated from "../cards/TopRated";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
function MoviesDisplay() {
    const [topRated,setTopRated] = useState([])
    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=0eaae2146624836f2825bc2d4154ad6e&language=en-US&page=3').then(res=> setTopRated(res.data.results))
    }, [])
    
  return (
    <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={ false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
        {
            topRated.map(movies=>{
                return <TopRated {...movies} key={movies.id}/>
            })
        }
    </Carousel>
  )
}

export default MoviesDisplay