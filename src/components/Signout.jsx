import React from 'react';
import { useUserAuth } from '../utilities/UserAuthContextProvider';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';

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
    <>
     <div className="formbody">
      <div className="p-4 box mt-3 text-center">
       We hate to see you go
      </div>
      <div className="p-3 px-5 box mt-3 text-center" onClick={handleLogout}>
        Log out
      </div>
      </div>
    </>
  );
}

export default Signout;