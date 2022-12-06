import React from "react";
import "./styles/App.css"
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import WatchList from './Pages/WatchList';
import SideNav from "./components/SideNav";
import RightNav from "./components/RightNav";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Signout from "./Pages/Signout";
import Error from "./components/Error";

function App() {
  return (<div className="flex flex-row justify-between h-screen">
    <SideNav/>
    <Error/>
          <Routes>
            <Route
                path="/"
                element={
                    <Home/>
                }
              />
               <Route
                path="/Signup"
                element={
                    <Signup/>
       
                }
              />
              <Route
                path="/login"
                element={
                    <Login/>
       
                }
              />
               <Route
                path="/signout"
                element={
                    <Signout/>
       
                }
              />
          </Routes>
          <RightNav/>
    </div>
  );
}


export default App;
