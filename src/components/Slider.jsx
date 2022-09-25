import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function SliderComp() {
  const url = "https://api.themoviedb.org/3/trending/all/day?api_key=0eaae2146624836f2825bc2d4154ad6e";
  const API_IMG = "https://image.tmdb.org/t/p/original/";
  const [slides,setSlides] = useState([]);

    useEffect(() => {
      fetch(url)
      .then((res)=> res.json())
      .then((data)=>{setSlides(data.results)
      console.log(data.results)})
      .catch((Error)=> console.log(Error));
  }, [])

  return (<>
    <Carousel>
      {
        slides.map((slide)=>{
          return <Carousel.Item key={slide.id}>
          <img
            className="d-block w-100 h-100"
            src={API_IMG+slide.backdrop_path}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
        })
      }
    </Carousel>
    </>
  );
}

export default SliderComp;