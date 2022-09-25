import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {  Link } from 'react-router-dom';

function MovieNav() {
  return (
    <>
    <Navbar bg="dark" variant="dark" style={{height:'50px'}}>
      <Container>
        <Nav >
          <Link to="Home/TvShows">Tv Shows</Link>
          <Link to="Home/Movies">Movies</Link>
          <Link to="Home/Anime">Anime</Link>
        </Nav>
      </Container>
    </Navbar>
  </>
  );
}

export default MovieNav;
