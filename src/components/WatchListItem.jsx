import React from 'react';
import { useUserAuth } from '../utilities/UserAuthContextProvider';

function WatchListItem({poster_path, showDetails, id, title, name}) {
  const { watchList, setWatchList } = useUserAuth()

    const removeFromWatchList = () => {
      const items = watchList.filter(items => items.id !== id) 
      setWatchList(items)
    }
    const API_IMG = "https://image.tmdb.org/t/p/w500";
  return (
    <div className=' flex flex-col m-2 mt-0 pb-2 bg-[#3d3b3baa] w-60 h-80 rounded-3xl'>
        <div className='w-full h-[70%]'>
            <img src={API_IMG+poster_path}className='w-full h-full overflow-hidden rounded-t-3xl'/>
        </div>
        <div className='text-white text-sm px-1 font-bold mt-3 h-[20%]'>{title || name}</div>
        <div className='text-white flex flex-col px-4 mt-3'>
          <button className='self-end' title='remove from watch list' onClick={removeFromWatchList}><i className="fa-solid fa-trash-can self-end"></i></button>
        </div>
    </div>
  )
}

export default WatchListItem;