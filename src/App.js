import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HomePage from './pages/HomePage';
import './pages/HomePage1.css'
import StoryPage from './pages/story';
import './pages/story.css'


function App() {
  return (
  
    <div className="App" style={{overflow:'auto'}}>
     
      <HomePage></HomePage>
      <StoryPage/>
    </div>

  );
}

export default App;
