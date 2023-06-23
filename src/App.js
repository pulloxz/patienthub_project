import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import Navbar from './components/navbar';
import HomePage from './pages/HomePage';
import './pages/HomePage1.css'
import storyPage from './pages/story';


function App() {
  return (
  
    <div className="App">
     
      <HomePage></HomePage>
      <storyPage></storyPage>
    </div>

  );
}

export default App;
