import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/navbar';
import HomePage from './pages/HomePage';
import './pages/HomePage1.css'
import { Height } from '@mui/icons-material';

function App() {
  return (
  
    <div className="App">
      <div style={{
        width: '150px',
        Height: '150px',
        backgroundImage: `url(${require('./image/pic1.jpg')})`
      }}>

      </div>
      <HomePage></HomePage>
      
    </div>

  );
}

export default App;
