import React from 'react';
import { useUserAuth } from '../utilities/UserAuthContextProvider';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';
import backgroundImage from '../images/backgroundimage.jpg'

function Signout() {
  const {user} = useUserAuth();
  const {logOut} = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className= "w-full lg:w-full h-screen flex items-center" style={{backgroundImage:`url(${backgroundImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
    <div className="formbody flex flex-col items-center justify-center lg:w-1/2 mx-auto">
      <div className="p-4 box mt-3 text-center text-white font-bold">
        We hate to see you go
      </div>
      <div className="p-1 rounded-xl cursor-pointer text-center text-white bg-[#171029] w-40 mx-auto " onClick={handleLogout}>
        Log out
      </div>
      </div>
    </div>
  );
}

export default Signout;