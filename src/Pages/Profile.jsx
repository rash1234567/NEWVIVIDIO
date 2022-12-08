import React from 'react';
import { useNavigate } from "react-router-dom";
import humanIcon from '../images/humanIcon.png';
import backgroundImage from '../images/backgroundimage.jpg'

function Profile() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='text-white'>profile</h1>
    </div>
  )
}

export default Profile