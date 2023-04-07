import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Image} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <header >
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    <main>
    <Container>
      <Row className='px-4 my-5'>
        <Col sm={7}>
          <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" fluid round className='' />
        </Col>
        <Col sm={5}>
          <h1 class='font-weigh-light'>Tagline</h1>
          <p>Nearly 20 years since its debut, RBD is proving that great music is para siempre.
—Edward Segarra, USA TODAY, 20 Jan. 2023. Ávila also contributed to an installation in the exhibition titled Biblioteca para lomo-lectores (Library for Spine Readers, 2018–2022).
—Coco Fusco, The New York Review of Books, 19 Jan. 2023</p>
          <Button variant="outline-primary">Call to action</Button>
        </Col>
      </Row>
      <Row>
      <Card className='text-center bg-secondary text-white my-5 py-4'>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="http://pagalladka.com/wp-content/uploads/2018/12/full-size-HD-image-of-nature-500x375.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </main>
    <footer class="py-5 my-5 bg-dark">
      <div  class='container px-4 px-lg-5'>
        <p class="m-0 text-center text-white">Copyright &copy; Website 2023</p>
      </div>
    </footer>
    </div>
  );
}

export default App;
