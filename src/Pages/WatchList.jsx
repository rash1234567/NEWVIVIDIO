import React from 'react'
import WatchListItem from '../components/WatchListItem';
import { useUserAuth } from '../utilities/UserAuthContextProvider';


function WatchList() {
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const { watchList, setWatchList } = useUserAuth();


  return (
    <>
      <div className='w-screen lg:w-[100%] lg:ml-[20vw] h-screen flex flex-col bg-black'>
        <h1 className='text-white text-2xl self-center my-10 font-semibold'>WatchList</h1>
       { watchList.length < 1 
          ?
        <p className='italic text-white mx-auto self-center'>You have not added any movie...</p>
          :
        <div className= "flex flex-col md:flex-row md:flex-wrap overflow-y-scroll home items-center lg:items-start ">
          {
              watchList.map((movie) => {
                return <WatchListItem key={movie.id} {...movie} />
              })
          }
        </div>}
      </div>   
  </>
  )
}

export default WatchList