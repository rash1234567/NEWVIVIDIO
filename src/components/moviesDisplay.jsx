import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React,{useState} from 'react';
import TopRated from "../cards/TopRated";
import { useUserAuth } from '../utilities/UserAuthContextProvider';
import ModalView from '../components/ModalView';

   
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
  const API_IMG = "https://image.tmdb.org/t/p/w500";
function MoviesDisplay() {
    const {search} = useUserAuth();
    const [showModal, setShowModal] = useState(false);
    const [activeMovie,setActiveMovie] = useState({})

    const showDetails = (id) =>{
      let movie = search.find(movie=> movie.id === id );
      setActiveMovie(movie)
      console.log(movie);
      setShowModal(true)
    }
    const closeModal=()=>{
      setShowModal(false)
      setActiveMovie({})
    }
  return (
    <>
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
            search.map(movies=>{
                return <TopRated {...movies} key={movies.id}  showDetails={showDetails}/>
            })
        }
    </Carousel>
    <ModalView  showModal={showModal} setShowModal={setShowModal} closeModal={closeModal} overview={activeMovie.overview} img={API_IMG+activeMovie.poster_path} title={activeMovie.title} id={activeMovie.id } name={activeMovie.name}/>
    </>
  )
}
export default MoviesDisplay