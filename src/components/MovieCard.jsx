import React from 'react';
import Card from 'react-bootstrap/Card';

const API_IMG = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({poster_path}) {

    
    return (
        <Card className='cardcomp' style={{ width: '200px',marginTop:'5px',marginLeft:'35px'}}>
          <Card.Img  src={API_IMG+poster_path} />
        </Card>
    );
}