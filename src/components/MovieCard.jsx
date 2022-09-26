import React from 'react';
import Card from 'react-bootstrap/Card';

const API_IMG = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({poster_path,title}) {
    
    return (
        <Card className='cardcomp w-90' style={{marginTop:'5px',marginLeft:'5px'}}>
          <Card.Img src={API_IMG+poster_path} />
          <Card.Title style={{textAlign:'center'}}>{title}</Card.Title>
        </Card>
    );
}