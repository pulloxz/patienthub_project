import Nav from "react-bootstrap/Nav";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./story.css";
import "./HomePage1.css";
import "./BookingSection";
import StoryPage from "./story";
import BookingSection from "./BookingSection";
import FinalComponent from "../components/form/components/final_component/final_component";

class HomePage extends Component {
  scrollToBookingSection = () => {
    const bookingSectionRef = this.bookingSectionRef;
    if (bookingSectionRef) {
      bookingSectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };
  scrollToJoinSection = () => {
    const FinalComponentRef = this.FinalComponentRef;
    if (FinalComponentRef) {
      FinalComponentRef.scrollIntoView({ behavior: "smooth" });
    }
  };
  scrollToaboutusSection = () => {
    const aboutusRef = this.aboutusRef;
    if (aboutusRef) {
      aboutusRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <div>
        <div className="maincomponent">
          <header>
            {[false].map((expand) => (
              <div>
               <Navbar key={expand} expand={expand}>
                <Container fluid>
                  <div>
                    <Navbar.Toggle className="border border-0" />
                    <Navbar.Text href="#" className="t1">
                      بيشنت هاب
                    </Navbar.Text>
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

              </div>
            ))}
          </header>      
          <div>
            <section class="">
              <h1 className="t2">!لتحصل على أفضل أهتمام لصحة فمك</h1>
              <h5 className="t3">سبب أخر لإبتسامك</h5>
            </section>
            <div
              className="container mt-3"
              style={{
                position: "relative",
                left: "-500px",
              }}
            >
              <button
                type="button"
                className="t4"
                onClick={this.scrollToBookingSection}
              >
                أحجز الآن
              </button>
            </div>
          </div>
        </div>
        <div ref={(ref) => (this.aboutusRef = ref)}>
          <StoryPage />
        </div>

        <div ref={(ref) => (this.bookingSectionRef = ref)}>
          <BookingSection />
        </div>
        <div ref={(ref) => (this.FinalComponentRef = ref)}>
          <FinalComponent />
        </div>
      </div>
    );
  }
}

export default HomePage;
