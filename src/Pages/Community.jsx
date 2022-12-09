import React from 'react';
import { useNavigate } from "react-router-dom";

function Community () {
  const navigate = useNavigate();
  return (
    <div className='lg:ml-[50vw] flex items-center justify-center'>
      <h1 className='text-white text-5xl self-center comingSoon'>Coming soon....</h1>
    </div>
  )
}

export default Community;