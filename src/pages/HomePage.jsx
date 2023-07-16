import Nav from 'react-bootstrap/Nav';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './story.css';
import './HomePage1.css';
import './BookingSection';
import StoryPage from './story';
import BookingSection from './BookingSection';

class HomePage extends Component {
  scrollToBookingSection = () => {
    const bookingSectionRef = this.bookingSectionRef;
    if (bookingSectionRef) {
      bookingSectionRef.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    return (
      <div>
        <div className="maincomponent">
          <header>
            {[false].map((expand) => (
              <div>
   <nav class="navbar navbar-expand-lg bg-body-light">
  <div class="container-fluid">
    <a class="navbar-brand navbar-brand-large" href="#">PatientHub</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link nav-link-small active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item ml-3">
          <a class="nav-link nav-link-small" href="#">خدماتنا</a>
        </li>
        <li class="nav-item ml-3">
          <a class="nav-link nav-link-small" href="#">أحجز الآن</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


              </div>
            ))}
          </header>
          <div>
            <h1 className="t2">!لتحصل على أفضل أهتمام لصحة فمك</h1>
            <h5 className="t3">سبب أخر لإبتسامك</h5>
            <div
              className="container mt-3"
              style={{
                position: 'relative',
                left: '-500px',
              }}
            >
              <button type="button" className="t4" onClick={this.scrollToBookingSection}>
                أحجز الآن
              </button>
            </div>
          </div>
        </div>

        <StoryPage />

        <div ref={(ref) => (this.bookingSectionRef = ref)}>
          <BookingSection />
        </div>
      </div>
    );
  }
}

export default HomePage;
