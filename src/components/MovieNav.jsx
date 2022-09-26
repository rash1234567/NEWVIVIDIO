import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {  Link } from 'react-router-dom';

function MovieNav() {
  return (
    <>
    <Navbar variant="dark" style={{height:'50px',background: "#120241"
}}>
      <Container>
        <Nav style={{color:"white",width:'70%',display:'flex',justifyContent:'space-around' }}>
          <Link to="Home/TvShows" style={{color:"white",textDecoration:'none' }}>Tv Shows</Link>
          <Link to="Home/Movies" style={{color:"white",textDecoration:'none' }}>Movies</Link>
          <Link to="Home/Anime" style={{color:"white",textDecoration:'none' }}>Anime</Link>
        </Nav>
      </Container>
    </Navbar>
  </>
  );
}

export default MovieNav;
