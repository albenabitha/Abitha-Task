import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import City from './Component/City';

function App() {
    return (
      <BrowserRouter>
      <div >
      <Routes>
      
      <Route path='City' element={<City/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    );
  }
  
  export default App;
  