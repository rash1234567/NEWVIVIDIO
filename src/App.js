import './styles/App.css';
import Signup from "./components/Signup";
import Login from "./components/Login";
import React from "react";
import {Routes,Route} from 'react-router-dom';
import { UserAuthContextProvider } from './utilities/UserAuthContextProvider';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import ProtectedRoute from './utilities/ProtectedRoute';
import Blog from "./Pages/Blog";
import WatchList from './Pages/WatchList';
import Signout from './components/Signout';
import TopNav from './components/TopNav';
import TvShows from './Home Components/TvShows';
import Movies from './Home Components/Movies';
import Anime from './Home Components/Anime';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

function App() {
  return (<>
    <TopNav/>
        <UserAuthContextProvider>
          <Routes>
            <Route
                path="/Home"
                element={
                  <ProtectedRoute>
                    <Home/>
                  </ProtectedRoute>
                }
              >
                <Route
                path="Home/Tvshows"
                element={
                  <ProtectedRoute>
                    <TvShows/>
                  </ProtectedRoute>
                }
              />
            <Route
                path="Home/Movies"
                element={
                  <ProtectedRoute>
                    <Movies/>
                  </ProtectedRoute>
                }
              />
            <Route
                path="Home/Anime"
                element={
                  <ProtectedRoute>
                    <Anime/>
                  </ProtectedRoute>
                }
              />
              </Route>
            <Route
                path="/Profile"
                element={
                  <ProtectedRoute>
                    <Profile/>
                  </ProtectedRoute>
                }
              />
            <Route
                path="/WatchList"
                element={
                  <ProtectedRoute>
                    <WatchList/>
                  </ProtectedRoute>
                }
              />
            <Route
                path="/Blog"
                element={
                  <ProtectedRoute>
                    <Blog/>
                  </ProtectedRoute>
                }
              />
            <Route
                path="/Signout"
                element={
                  <ProtectedRoute>
                    <Signout/>
                  </ProtectedRoute>
                }
              />
            
            <Route path="/" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
          </Routes>
        </UserAuthContextProvider>
    
    </>
  );
}


export default App;
