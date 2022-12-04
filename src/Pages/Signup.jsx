import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../utilities/UserAuthContextProvider';
import { useState } from 'react';
import backgroundImage from '../images/backgroundimage.jpg'

function Signup() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const {signUp} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit= async (e) => {
    e.preventDefault();
    setError('')
     try {
       await signUp(email,password);
       navigate('/')
     } catch (err) {
      setError(err.message)
     }
  }



  return (
    <div className= "w-[60%] h-full flex items-center" style={{backgroundImage:`url(${backgroundImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
    <div className="formbody w-1/2 mx-auto bg-white">
      <div className="p-4 box">
        <h2 className="mb-3"> Signup</h2>
        {error && <Alert variant = 'danger'>{error}</Alert> }
        <Form  onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e)=>{setPassword(e.target.value)}}
              required
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-3 box mt-3 text-center">
        Already have an account? <Link to="/login">Login</Link>
      </div>
      </div>
    </div>
  );
}
export default Signup;