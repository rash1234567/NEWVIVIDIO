import { useState } from "react"
import React from 'react'
import { useEffect } from "react";
import CarouselC from "../components/Carousel";

function Home() {
    const [topRated,setTopRated] = useState([]);

  return (
    <div className='w-[60%] bg-[#171029] text-white'>
        <div className="nav h-[7%] w-full text-white">
            <button className='ml-4'>Home</button>
            <button className='ml-4'>Tv Shows</button>
            <button className='ml-4'>Movies</button>
        </div>
        <CarouselC/>
        <div className='px-3 mt-4'>
            <h6>Trending Movies <i class="fa-solid fa-fire"></i></h6>
        </div>
        <div className='px-3'>
            <h6>Top Rated <i class="fa-regular fa-star text-yellow-500 "></i></h6>
        </div>
        <div className='px-3'>
            <h6>Continue Watching... <i class="fa-regular fa-star text-yellow-500 "></i></h6>
        </div>
    </div>
  )
}
export default Home