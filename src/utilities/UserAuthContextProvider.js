import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { createContext,useContext, useState , useEffect} from "react";
import { auth } from "./firebaseSetup";
import axios from "axios";


const userAuthContext = createContext();

export function UserAuthContextProvider ({children}){
    const [user,setUser] = useState({});
    const [input, setInput] = useState('');
    const [search, setSearch] = useState([]);

    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=0eaae2146624836f2825bc2d4154ad6e&language=en-US&page=3').then(res=> setSearch(res.data.results))
    }, [])

    const handleChange = (e) =>{
      setInput(e.target.value)
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      async function fetchData () {
         const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0eaae2146624836f2825bc2d4154ad6e&query=${input}&page=2`)
        .then((res)=> res.json())
        .then((data)=>{    
        setSearch(data.results);
        console.log(data.results)})
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
    <userAuthContext.Provider value={{user, signUp, logIn, logOut, googleSignIn, handleSubmit, input, search, handleChange}}>
        {children}
    </userAuthContext.Provider>)
}

export function useUserAuth() {
    return useContext(userAuthContext)
};