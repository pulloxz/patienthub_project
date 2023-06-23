import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { Component } from 'react';
import './story.css'
import '../App.css';
import StoryPage from './story.jsx';

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div className="maincomponent"
      style={{
        overflowY: 'scroll', height: '800px'
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
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">Link</Nav.Link>
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



// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import React, { Component } from 'react';
// import './story.jsx'
// import '../App.css'

// class HomePage extends Component {

//   state = {  }
//   render() { 
//     return ( 
//       <header>
//       {[false].map((expand) => (
//         <Navbar key={expand}  expand={expand}>
//           <Container fluid >
//             <div>
//             <Navbar.Toggle className='border border-0'/>
//             <Navbar.Text href="#" class="t1"> بيشنت هاب</Navbar.Text>
//              </div>
//             <Navbar.Offcanvas  placement="end">
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title> بيشنت هاب </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="#action1">Home</Nav.Link>
//                   <Nav.Link href="#action2">Link</Nav.Link>
//                 </Nav>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//           <div>
//           <h1 class="t2">!لتحصل على أفضل أهتمام لصحة فمك</h1> 
//           <h5 class="t3">سبب أخر لأبتسامك</h5>
//           <div class="container mt-3">
//           <button type="button" class="t4">أحجز الآن</button> </div>
//           </div>
          
//         </Navbar>
        
        
//       )
//      ) }
      
//     </header>
//     <storyPage />
      
//      );
//   }
// }
 
// export default HomePage;

// function HomePage() {
//   return (
//     <header>
//       {[false].map((expand) => (
//         <Navbar key={expand}  expand={expand}>
//           <Container fluid >
//             <div>
//             <Navbar.Toggle className='border border-0'/>
//             <Navbar.Text href="#" class="t1"> بيشنت هاب</Navbar.Text>
//              </div>
//             <Navbar.Offcanvas  placement="end">
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title> بيشنت هاب </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="#action1">Home</Nav.Link>
//                   <Nav.Link href="#action2">Link</Nav.Link>
//                 </Nav>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//           <div>
//           <h1 class="t2">!لتحصل على أفضل أهتمام لصحة فمك</h1> 
//           <h5 class="t3">سبب أخر لأبتسامك</h5>
//           <div class="container mt-3">
//           <button type="button" class="t4">أحجز الآن</button> </div>
//           </div>
//           {/* <center><div class="about">
//      <h1>قصتنا</h1>
//      <p> بعد ملاحظتنا لكل من طلاب طب الاسنان والمرضى الذين يحتاجون <br/> العلاج ولا يملكون ما يكفي من المال لشدة كلفة العيادات <br/>الخارجية جئنا لنصبح حلقة وصل بين كل من اطباء طب الاسنان في اخر<br/> مراحل دراستهم ممن يحتاجون لحالات معينة وبين المرضى الذين <br/>يحتاجون العلاج لنصبح حلقة وصل تسهل على كلا الطرفين مبتغاهم</p>
//        </div></center> */}
//         </Navbar>
        
        
//       )
//      ) }
      
//     </header>

//   );
// }

// export default HomePage;