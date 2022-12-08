import React,{useState} from 'react'
import MoviesDisplay from "../components/moviesDisplay";
import CarouselC from '../components/Carousel';
import { useUserAuth } from '../utilities/UserAuthContextProvider';
import YoutubePlayer from '../components/YoutubePlayer';
import RightNav from '../components/RightNav';


function Home() {
   const {setTopRatedAPI,movieToprated,tvShowsToprated,url_movie,url_tv,setTrendingAPI,setType} = useUserAuth();

  return (
    <div className='flex w-[100vw] z-0 lg:ml-[20vw] lg:w-[80vw] overflow-hidden flex-col lg:flex-row'>
        <div className='lg:w-[60vw] w-full h-80vh lg:h-[100vh] overflow-y-scroll overflow-x-hidden bg-black text-white home px-4 py-10'>
            <YoutubePlayer/>
            <div className="nav h-[7%] mt-4 bg-[#000] w-full text-white font-bold ">
                <button onClick={()=> {setTopRatedAPI(tvShowsToprated);setTrendingAPI(url_tv);setType('tv')}}>Tv Shows</button>
                <button className='ml-4' onClick={()=> {setTopRatedAPI(movieToprated,url_movie);setTrendingAPI(url_movie);setType('movie')}}>Movies</button>
            </div>

            <div className=' mt-4'>
                <h6>Trending Movies <i className="fa-solid fa-fire"></i></h6>
                <CarouselC/>
            </div>
            <div className='mt-4'>
                <h6>Top Rated <i className="fa-regular fa-star text-yellow-500 "></i></h6>
                <MoviesDisplay/>
            </div>
            

            {/* <div className=' mt-4'>
                <h6>Continue Watching... <i className="fa-regular fa-star text-yellow-500 "></i></h6>
            </div> */}
            
        </div>
        <RightNav/>
    </div>
  )
}
export default Home