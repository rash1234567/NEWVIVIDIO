import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../components/MovieCard';
import { useEffect} from 'react';
import {useNavigate} from 'react'

function Search(props) {
    

  return (
    <Form className="d-flex">
           <input type="search" className="search " style={{border:'none'}} onChange={props.onChange} value={props.value}/>
           <button style={{ color:'white',border:'none' }} className="bg-dark"><i className="fa-solid fa-magnifying-glass" ></i></button>
        </Form>

  )
}

export default Search;