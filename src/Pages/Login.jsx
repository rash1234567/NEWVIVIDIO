import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Link,useNavigate } from 'react-router-dom';
import { useUserAuth } from '../utilities/UserAuthContextProvider';
import { useState } from 'react';
import backgroundImage from '../images/backgroundimage.jpg'

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const {logIn,googleSignIn} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit= async (e) => {
    e.preventDefault();
    setError('')
     try {
       await logIn(email,password)
       navigate('/')
     } catch (err) {
      setError(err.message)
     }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

    return (
      <div className= "w-full lg:w-full h-screen flex items-center" style={{backgroundImage:`url(${backgroundImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
      <div className="formbody w-4/5 md:w-1/2 lg:w-[33%] mx-auto bg-transparent">
          <div className="p-4 box">
            <h2 className="mb-3 text-white">Login</h2>
            {error && <Alert variant = 'danger'>{error}</Alert> }
            <Form onSubmit={handleSubmit} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  onChange= {(e)=>{setEmail(e.target.value)}}
                  required
                />
              </Form.Group>
    
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange= {(e)=>{setPassword(e.target.value)}}
                  required
                />
              </Form.Group>
    
              <div className="d-grid gap-2">
                <Button variant="primary" type="Submit">
                  Log In
                </Button>
              </div>
            </Form>
            <hr />
            
          </div>
          <div className="px-4 text-white">
            Don't have an account? <Link to="/Signup" className=" text-yellow-300" >Sign up</Link> 
          </div>
          </div>
        </div>
      );
}

export default Login;