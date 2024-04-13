                     
import { Route, Routes } from 'react-router-dom';
import CityDetails from './pages/CityDetails';
import Home from './pages/Home';

function App() {

  return (
    <div>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/citydetails' element={<CityDetails />} />
      </Routes>
    </div>
  )
}

export default App
