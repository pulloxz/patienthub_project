import React, { useRef, useState } from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import "./story.css";
import "./HomePage1.css";
import StoryPage from "./story";
import BookingSection from "./BookingSection";
import FinalComponent from "../components/form/components/final_component/final_component";

const HomePage = () => {
  const [expand, setExpand] = useState(false);
  const aboutusRef = useRef(null);
  const bookingSectionRef = useRef(null);
  const FinalComponentRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      setExpand(false); // Close the Offcanvas when a link is clicked
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleToggle = () => {
    setExpand(!expand);
  };

  return (
    <div>
      <div className="maincomponent">
        <header>
          <Navbar expand="lg" className="navbar-custom" expanded={expand}>
            <Container fluid>
              <Navbar.Brand href="#" className="t1">
                PatientHub
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="border border-0"
                onClick={handleToggle}
              />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <Nav>
                  <div className="nav-item">
                    <Nav.Link
                      href="#"
                      onClick={() => scrollToSection(aboutusRef)}
                    >
                      خدماتنا
                    </Nav.Link>
                  </div>
                  <div className="nav-item">
                    <Nav.Link
                      href="#"
                      onClick={() => scrollToSection(FinalComponentRef)}
                    >
                      للإنضمام الينا
                    </Nav.Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <div>
          <section className="">
            <h1 className="t2">!لتحصل على أفضل أهتمام لصحة فمك</h1>
            <h5 className="t3">سبب أخر لإبتسامك</h5>
          </section>
          <div
            className="containerr"
          >
            <button
              type="button"
              className="b4"
              onClick={() => scrollToSection(bookingSectionRef)}
            >
              أحجز الآن
            </button>
          </div>
        </div>
      </div>
      <div ref={aboutusRef}>
        <StoryPage />
      </div>

      <div ref={bookingSectionRef}>
        <BookingSection />
      </div>
      <div ref={FinalComponentRef}>
        <FinalComponent />
      </div>
    </div>
  );
};

export default HomePage;
