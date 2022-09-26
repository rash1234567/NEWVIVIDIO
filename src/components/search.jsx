import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'react-multi-carousel/lib/styles.css';

function Search(props) {
  

  return (
    <Form className="d-flex" onSubmit={props.onSubmit}>
           <input type="search" onChange={props.onChange}  value={props.value} className="form-control input-sm search"/>
           <button style={{ color:'black',border:'none',background:'white',marginLeft:'3px' }} ><i className="fa-solid fa-magnifying-glass" ></i></button>
        </Form>

  )
}
export default Search;