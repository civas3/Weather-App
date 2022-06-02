import './index.css';
import Forecast from './components/Forecast';
import Splash from './components/Splash';
import About from './components/About';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Splash/>} />
        <Route path='/forecast' element={<Forecast/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </>
  );
}

export default App;








