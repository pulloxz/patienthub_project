import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { Component } from 'react';
import './story.css'
import '../App.css';
import './HomePage1.css'
import StoryPage from './story.jsx';

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div className="maincomponent"
      style={{
        overflowY: 'scroll', height: '500px'
      }}
      >
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
              <div>
                <h1 className="t2">!لتحصل على أفضل أهتمام لصحة فمك</h1>
                <h5 className="t3">سبب أخر لإبتسامك</h5>
                <div className="container mt-3">
                  <button type="button" className="t4">أحجز الآن</button>
                </div>
              </div>
            </Navbar>
          ))}
        </header>

        <StoryPage></StoryPage>

      </div>
    );
  }
}

export default HomePage;



