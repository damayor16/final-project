import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from './components/Homepage/Homepage';
import AboutUs from './components/AboutUs/AboutUs';
import Meat from './components/Meat/Meat';
import Pastry from './components/Pastry/Pastry';
import Vegan from './components/Vegan/Vegan';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import Search from './components/Search/Search';

function App() {
  return <div className="App">    
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/meat" element={<Meat />} />
      <Route path="/pastry" element={<Pastry />} />
      <Route path="/vegan" element={<Vegan />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetails />} />      
      <Route path="/search" element={<Search />} />
    </Routes>
    </BrowserRouter>
    <Footer />
  </div>;
}

export default App;
