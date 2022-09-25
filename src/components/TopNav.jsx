//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNav() {



  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Form className="d-flex">
           <input type="search" className="search " style={{border:'none'}}/>
           <button style={{ color:'white',border:'none' }} className="bg-dark"><i className="fa-solid fa-magnifying-glass" ></i></button>
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto "
            style={{ maxHeight: '80vh' }}
           
          >
            <Nav.Link href="/Home/Home/TvShows">Home</Nav.Link>
            <Nav.Link href="/Profile">Profile</Nav.Link>
            <Nav.Link href="/WatchList">Watch List</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>
            <Nav.Link href="/Signout">Sign out</Nav.Link> 
            
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;