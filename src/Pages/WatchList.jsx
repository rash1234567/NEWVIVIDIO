import React from 'react'
import WatchListItem from '../components/WatchListItem';
import backgroundImage from '../images/backgroundimage.jpg';
import { useUserAuth } from '../utilities/UserAuthContextProvider';
import ModalView from '../components/ModalView';
import { useState } from 'react';
import WatchListModalView from '../components/WatchListModal';

function WatchList() {
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  const { watchList, setWatchList } = useUserAuth();

  const [showModal, setShowModal] = useState(false);
  const [activeMovie,setActiveMovie] = useState({});

  const showDetails = (id) =>{
   let movie = watchList.find(movie=> movie.id === id );
    setActiveMovie(movie)
    setShowModal(true);
    console.log(activeMovie);
  }

  const closeModal=(id)=>{
    setShowModal(false);
    const items = watchList.filter((item)=>{ return item.id !== id})
    setWatchList(items)
  }

  return (
    <>
      <div className= "w-[60%] h-screen flex flex-wrap overflow-y-scroll home items-center" style={{backgroundImage:`url(${backgroundImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
        {
            watchList.map((movie) => {
              return <WatchListItem key={movie.id} {...movie} showDetails={showDetails}/>
            })
        }
      </div>
      <WatchListModalView  showModal={showModal} setShowModal={setShowModal} closeModal={closeModal} overview={activeMovie.overview} img={API_IMG+activeMovie.poster_path} title={activeMovie.title} />
    </>
  )
}

export default WatchList