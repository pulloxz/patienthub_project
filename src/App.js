import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import BookingPage from './pages/bookingPage';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import UserInfoConfirmation from './pages/userinfoconf';
import HomePage from './pages/HomePage';
import './pages/HomePage1.css'
// import StoryPage from './pages/story';
import './pages/story.css'

function App() {
  return (
    <div className='App'>
      <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/booking/confirmation" element={<UserInfoConfirmation />} />
    </Routes>
  </Router>
    </div>
    
  );
}

export default App;



// import './App.css';



// function App() {
//   return (
  
//     <div className="App" style={{overflow:'auto'}}>
     
//       <HomePage></HomePage>
//       {/* <StoryPage/> */}
//     </div>

//   );
// }

// export default App;
