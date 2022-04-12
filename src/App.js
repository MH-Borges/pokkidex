import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pokedex from './Pages/Pokedex'
import Pokemon from './Pages/Pokemon';
import Home from './Pages/Home';
import Guess from './Pages/Guess';
import Random from './Pages/Random';



export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route path="/adivinha" element={ <Guess />} > </Route>
        <Route path="/random" element={ <Random />} > </Route>
        <Route path="/pokedex" element={ <Pokedex />} ></Route>
        <Route path="/pokemons/:name" element={ <Pokemon />} ></Route>
      </Routes>
    </Router>
  );
}