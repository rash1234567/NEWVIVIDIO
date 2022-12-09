import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { createContext,useContext, useState , useEffect, useRef} from "react";
import { auth } from "./firebaseSetup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const userAuthContext = createContext();
const movieToprated = 'https://api.themoviedb.org/3/movie/top_rated?api_key=0eaae2146624836f2825bc2d4154ad6e&language=en-US&page=3';
const tvShowsToprated = 'https://api.themoviedb.org/3/tv/top_rated?api_key=0eaae2146624836f2825bc2d4154ad6e&language=en-US&page=3';
const url_movie = "https://api.themoviedb.org/3/trending/movie/day?api_key=0eaae2146624836f2825bc2d4154ad6e";
const url_tv = "https://api.themoviedb.org/3/trending/tv/day?api_key=0eaae2146624836f2825bc2d4154ad6e";

export function UserAuthContextProvider ({children}){
    const [user,setUser] = useState({});
    const [input, setInput] = useState('');
    const [search, setSearch] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [topRatedAPI,setTopRatedAPI] = useState(tvShowsToprated);
    const [trendingAPI,setTrendingAPI] = useState(url_tv);
    const [movieList, setMovieList] = useState([]);
    const [movieId, setMovieId] = useState('');
    const [type,setType] = useState('tv')
    const [isComponentVisible, setIsComponentVisible] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage,setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [activeMovie,setActiveMovie] = useState({});
    const [upcoming,setUpcoming] = useState([]);
    const [heading,setHeading] = useState('Top Rated')
    const ref = useRef(null);

    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=0eaae2146624836f2825bc2d4154ad6e&primary_release_date.gte=2022-12-10&primary_release_date.lte=2023-12-10').then(res=> setUpcoming(res.data.results ))
    }, [])


    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const findYoutubeId=(id)=>{
      if(!user){
        setErrorMessage('Please Log in to see trailers')
        setShowAlert(true)
        return
      }
      axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=0eaae2146624836f2825bc2d4154ad6e&language=en-US`)
      .then(res=>{ 
        if (res.data.results.length > 1) {
          return setMovieId( res.data.results[1].key)
        }
          setMovieId( res.data.results[0].key);
          console.log(movieId);
        });
      setIsComponentVisible(!isComponentVisible)
    }

    const fetchToprated =(API,URI)=>{
      axios.get(API).then(res=> setSearch(res.data.results))
      axios.get(URI).then(res=> setMovieList(res.data.results))
    }

    useEffect(() => {
     fetchToprated(topRatedAPI,trendingAPI)
    }, [topRatedAPI,trendingAPI])

    const handleChange = (e) =>{
      setInput(e.target.value)
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      async function fetchData () {
          await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0eaae2146624836f2825bc2d4154ad6e&query=${input}&page=2`)
        .then((res)=> res.json())
        .then((data)=>{ 
          try {
            if (data.results.length === 0){
              setErrorMessage('Not found! Try a new keyword')
              return setShowAlert(true)
            }
            setSearch(data.results);
          } catch (error) {
            setErrorMessage(error)
            setShowAlert(true)
          }   
        setType('movie')})
        };
        setHeading('Search Result...')
        fetchData();
     };

     const closeModal=()=>{
      setShowModal(false); 
      if(watchList.includes(activeMovie)){
        return
      }
      {
        setWatchList(prev => [...prev, activeMovie]);
        console.log(watchList)
      }
    }

    const showDetails = (id) =>{
      let movie = search.find(movie=> movie.id === id );
      if(!movie){
        movie = upcoming.find(movie=> movie.id === id );
        setType('movie')
      }
      setActiveMovie(movie)
      setShowModal(true)
    }


    function signUp(email,password){
        return createUserWithEmailAndPassword(auth, email,password);
    }
    function logIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logOut(){
      return signOut(auth)
    }
    function googleSignIn() {
      const googleAuthProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleAuthProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          setUser(currentuser);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);
    

    return( 
    <userAuthContext.Provider value={{user, signUp, logIn, logOut, googleSignIn, handleSubmit, input, search, handleChange,setTopRatedAPI,movieToprated,tvShowsToprated,fetchToprated,topRatedAPI,setTrendingAPI,url_movie,url_tv,movieList,movieId,findYoutubeId,ref, isComponentVisible, setIsComponentVisible,setType,showAlert,setShowAlert, watchList, setWatchList,errorMessage,setErrorMessage,showModal,setShowModal,closeModal,showDetails,activeMovie,setActiveMovie,upcoming,setUpcoming,heading,setHeading}}>
        {children}
    </userAuthContext.Provider>)
}

export function useUserAuth() {
    return useContext(userAuthContext)
};