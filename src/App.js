import React from "react";
import "./styles/App.css"
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import WatchList from './Pages/WatchList';
import SideNav from "./components/SideNav";
import RightNav from "./components/RightNav";

function App() {
  return (<div className="flex flex-row justify-between">
    <SideNav/>
          <Routes>
            <Route
                path="/"
                element={
                    <Home/>
       
                }
              />
          </Routes>
          <RightNav/>
    </div>
  );
}


export default App;
