
import './App.css';
import Nav from './components/nav';
import RenderRegion from './components/renderRegion';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Nav/>
      <RenderRegion/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
