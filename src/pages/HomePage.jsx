import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { Component } from 'react';
import './story.css'
import '../App.css';
import './HomePage1.css'
import './BookingSection'
import StoryPage from './story.jsx';
import BookingSection from './BookingSection';

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className='maincomponent'>
           <header>
          {[false].map((expand) => (
            <Navbar key={expand} expand={expand}>
              <Container fluid>
                <div>
                  <Navbar.Toggle className='border border-0' />
                  <Navbar.Text href="#" className="t1"> بيشنت هاب</Navbar.Text>
                </div>
                <Navbar.Offcanvas placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title> بيشنت هاب </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">خدماتنا</Nav.Link>
                      <Nav.Link href="#action2">للإنضمام الينا</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </header>
        <div>
                <h1 className="t2">!لتحصل على أفضل أهتمام لصحة فمك</h1>
                <h5 className="t3">سبب أخر لإبتسامك</h5>
                <div className="container mt-3" style={{
                  position:'relative',
                  left:'-500px',
                }}>
                  <button type="button" className="t4">أحجز الآن</button>
                </div>
        </div>
        </div>
         
          <StoryPage></StoryPage>
          <BookingSection></BookingSection>
         
        

      </div>
    );
  }
}

export default HomePage;



