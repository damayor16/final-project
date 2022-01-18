import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './key.js';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from './components/Homepage/Homepage';
import AboutUs from './components/AboutUs/AboutUs';
import Meat from './components/Meat/Meat';
import Pastry from './components/Pastry/Pastry';
import Vegan from './components/Vegan/Vegan';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import Search from './components/Search/Search';
import Desert from './components/Desert/Desert';
import Contact from './components/ContactUs/ContactUs';

function App() {
//const YOUR_APP_ID = "20353751"
//const YOUR_APP_KEY = "f5f2e537340fe084164aeb3093d27944"

  //var url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

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
      <Route path="/desert" element={<Desert />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    <Footer />
  </div>;
}

export default App;
