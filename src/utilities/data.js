const tv_series_trending_url = "https://api.themoviedb.org/3/trending/tv/day?api_key=0eaae2146624836f2825bc2d4154ad6e";

const movie_trending_url = "https://api.themoviedb.org/3/trending/movie/day?api_key=0eaae2146624836f2825bc2d4154ad6e";

const movie_image = "https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=0eaae2146624836f2825bc2d4154ad6e&;language=en-US";

const tv_image =" https://api.themoviedb.org/3/tv/{tv_id}/images?api_key=0eaae2146624836f2825bc2d4154ad6e&language=en-US";

const new_release = "https://api.themoviedb.org/3/discover/movie?api_key=0eaae2146624836f2825bc2d4154ad6e&primary_release_date.gte=2022-08-15&primary_release_date.lte=2022-09-01";

const search = "https://api.themoviedb.org/3/search/movie?api_key=0eaae2146624836f2825bc2d4154ad6e&query=nameOfMovie&page=1";

const popular_kids =  "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc";

const API_IMG = "https://image.tmdb.org/t/p/w500";

//overview property for the blog part

function data() {
    const tv_series_trending_url = "https://api.themoviedb.org/3/trending/tv/day?api_key=0eaae2146624836f2825bc2d4154ad6e";

    const movie_trending_url = "https://api.themoviedb.org/3/trending/movie/day?api_key=0eaae2146624836f2825bc2d4154ad6e";
    
    const movie_image = "https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=0eaae2146624836f2825bc2d4154ad6e&;language=en-US";
    
    const tv_image =" https://api.themoviedb.org/3/tv/{tv_id}/images?api_key=0eaae2146624836f2825bc2d4154ad6e&language=en-US";
    
    const new_release = "https://api.themoviedb.org/3/discover/movie?api_key=0eaae2146624836f2825bc2d4154ad6e&primary_release_date.gte=2022-08-15&primary_release_date.lte=2022-09-01";
    
    const search = "https://api.themoviedb.org/3/search/keyword?api_key=0eaae2146624836f2825bc2d4154ad6e&query=spider&page=1";
    
    const popular_kids =  "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc";
    
    const API_IMG = "https://image.tmdb.org/t/p/w500";
}


// import { useState,useEffect } from 'react';
// import '../styles/MovieList.css';
// import MovieCard from '../components/MovieCard';
// import Slider from 'react-slick';
// //import TrendingMovies from './TrendingMovies';

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

// function Movies() {
//   const url = "https://api.themoviedb.org/3/trending/movie/day?api_key=0eaae2146624836f2825bc2d4154ad6e";
//   const [movieList,setMovieList] = useState([]);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 5,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />
//   };
 
//   useEffect(
//     ()=>{
//       fetch(url)
//       .then((res)=> res.json())
//       .then((data)=>{setMovieList(data.results)
//       console.log(data.results)})
//       .catch((Error)=> console.log(Error));
//     },[]
//   )
 
//   return <>
//       <div style={{width: '100%',alignItems:'center',display:'flex',justifyContent:'center'}}>
//         <Slider {...settings} style={{width: '95%',alignItems:'center',justifyContent:'space-around',display:'flex'}}>
          
//         </Slider>
//       </div>
//   </>
// }
// export default Movies;

// // {
// //             movieList.map((movieReq)=>{
// //               return <MovieCard key={movieReq.id} {...movieReq}/>
// //             })
// //           }