import React from 'react'
import WatchListItem from '../components/WatchListItem';
import { useUserAuth } from '../utilities/UserAuthContextProvider';


function WatchList() {
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const { watchList, setWatchList } = useUserAuth();


  return (
    <>
      <div className='w-screen lg:w-[100%] h-screen flex flex-col bg-black'>
        <h1 className='text-white text-2xl self-center my-10 font-semibold'>WatchList</h1>
        <hr />
        <div className= "flex flex-col md:flex-row md:flex-wrap overflow-y-scroll justify-around home items-center">
          {
              watchList.map((movie) => {
                return <WatchListItem key={movie.id} {...movie} />
              })
          }
        </div>
      </div>
  </>
  )
}

export default WatchList