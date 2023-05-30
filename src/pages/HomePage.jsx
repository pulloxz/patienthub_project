import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function HomePage() {
  return (
    <header>
      {[false].map((expand) => (
        <Navbar key={expand}  expand={expand}>
          <Container fluid >
            <div>
            <Navbar.Toggle className='border border-0'/>
            <Navbar.Text href="#" class="t1"> بيشنت هاب</Navbar.Text>
             </div>
            <Navbar.Offcanvas  placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title> بيشنت هاب </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          <div>
          <h1 class="t2">!لتحصل على أفضل أهتمام لصحة فمك</h1> 
          <h5 class="t3">سبب أخر لأبتسامك</h5>
          <div class="container mt-3">
          <button type="button" class="t4">أحجز الأن</button> </div>
          </div>
        </Navbar>
      ))}
    </header>
  );
}

export default HomePage;