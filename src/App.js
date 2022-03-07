
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Beers from './pages/Beers';
import Homepage from './pages/Homepage';
import BeerDetail from './pages/BeerDetail';
import RandomBeer from './pages/RandomBeer';
import CreateBeer from './pages/CreateBeer';
function App() {
  return (
  <div>
  <Navbar/>
    <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/beers' element={<Beers/>}/>
      <Route exact path='/beers/:id' element={<BeerDetail/>}/>
      <Route exact path='/beers/randomBeer' element={<RandomBeer/>}/>
      <Route exact path='/createBeer' element={<CreateBeer/>}/>
    </Routes>
  </div>
  );
}

export default App;
