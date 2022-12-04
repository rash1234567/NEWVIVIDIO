import React from 'react'
import MoviesDisplay from "../components/moviesDisplay";
import CarouselC from '../components/Carousel';

function Home() {

  return (
    <div className='w-[60%] h-[100vh] overflow-y-scroll overflow-x-hidden bg-[#171029] text-white home px-4 py-10'>
        <div className="nav h-[7%] bg-[#171029] w-full text-white font-bold ">
            <button className=''>Tv Shows</button>
            <button className='ml-4'>Movies</button>
        </div>
        <div className=' mt-4'>
            <h6>Trending Movies <i class="fa-solid fa-fire"></i></h6>
            <CarouselC/>
        </div>
        <div className=' mt-4'>
            <h6>Top Rated <i class="fa-regular fa-star text-yellow-500 "></i></h6>
            <MoviesDisplay/>
        </div>
        <div className=' mt-4'>
            <h6>Continue Watching... <i class="fa-regular fa-star text-yellow-500 "></i></h6>
        </div>
    </div>
  )
}
export default Home