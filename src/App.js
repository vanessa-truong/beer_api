import './App.css';
import { Routes, Route, Link } from 'react-router-dom';


//components&pages
import AllBeerList from './components/AllBeerList';
import AllBeerItem from './components/AllBeerItem';
import AllBeersHome from './pages/AllBeersHome';
import AllBeerDetails from "./components/AllBeerDetails";
import Home from "./pages/Home";
import RandomList from './components/RandomList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allbeers" element={<AllBeersHome />} />
        <Route path="/allbeers/:id" element={<AllBeerDetails/>} />
        <Route path="/list" element={<AllBeerList />} />
        <Route path="/random" element={<RandomList />} />
        
      </Routes>

    </div>
  );
}

export default App;
