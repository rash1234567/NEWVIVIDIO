import React from 'react';
import { Outlet } from 'react-router-dom';
import MovieNav from '../components/MovieNav';
import SliderComp from '../components/Slider'

function Home() {
 
  return (
    <>
    <div >
      <MovieNav/>
      <SliderComp/>
    </div>  
    <Outlet/>
    </>
  );
}

export default Home;