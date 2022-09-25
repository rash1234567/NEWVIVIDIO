import React from 'react';
import { Outlet } from 'react-router-dom';
import MovieNav from '../components/MovieNav';
import SliderComp from '../components/Slider'

function Home() {
 
  return (
    <>
    <div>
      <MovieNav/>
      <SliderComp/>
      <h3 style={{textAlign:'left',marginLeft:'5px'}}>Trending Now</h3>
    </div>  
    <Outlet/>
    </>
  );
}

export default Home;