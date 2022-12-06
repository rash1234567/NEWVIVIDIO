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
    const ref = useRef(null);

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
              return setShowAlert(true)
            }
            setSearch(data.results);
          } catch (error) {
            
          }   
        setType('movie')})
        };
        fetchData();
     };


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
    <userAuthContext.Provider value={{user, signUp, logIn, logOut, googleSignIn, handleSubmit, input, search, handleChange,setTopRatedAPI,movieToprated,tvShowsToprated,fetchToprated,topRatedAPI,setTrendingAPI,url_movie,url_tv,movieList,movieId,findYoutubeId,ref, isComponentVisible, setIsComponentVisible,setType,showAlert,setShowAlert, watchList, setWatchList}}>
        {children}
    </userAuthContext.Provider>)
}

export function useUserAuth() {
    return useContext(userAuthContext)
};