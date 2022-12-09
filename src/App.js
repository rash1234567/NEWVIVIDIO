import React from "react";
import "./styles/App.css"
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import WatchList from './Pages/WatchList';
import SideNav from "./components/SideNav";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Signout from "./Pages/Signout";
import Error from "./components/Error";
import Community from "./Pages/Community";


function App() {
  return (<div className="flex bg-black justify-between min-h-screen">
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
                path="/signup"
                element={
                    <Signup/>
       
                }
              />
              <Route
                path="/community"
                element={
                    <Community />
       
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
               <Route
                path="/watchlist"
                element={
                    <WatchList/>
       
                }
              />
          </Routes>
    </div>
  );
}


export default App;
