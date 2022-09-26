//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNav() {

  return (
    <Navbar expand="lg" style={{background: "#120241"}}> 
      <Container fluid>
        <div className="logo d-flex" style={{ marginLeft:'10px',fontSize:'30px' }}>
          <i class="fa-solid fa-v" style={{ color:'white' }}></i>
          <i class="fa-solid fa-video" style={{ color:'white' }}></i>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor:"white"}} />
        <Navbar.Collapse style={{maxHeight: '100vh'}} >
          <Nav
            className="ms-auto nav-collapse">
            <Nav.Link href="/Home/Home/TvShows" style={{color:"white", alignSelf:'center'}}>Home</Nav.Link>
            <Nav.Link href="/Profile" style={{color:"white", alignSelf:'center' }}>Profile</Nav.Link>
            <Nav.Link href="/WatchList" style={{color:"white", alignSelf:'center' }}>Watch List</Nav.Link>
            <Nav.Link href="/Blog" style={{color:"white", alignSelf:'center' }} >Blog</Nav.Link>
            <Nav.Link href="/Signout" style={{color:"white", alignSelf:'center' }}>Sign out</Nav.Link>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;