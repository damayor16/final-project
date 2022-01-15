import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from "./components/Header/Header";
import Header from "./components/Footer/Footer";

function App() {
  return <div className="App">
    <hHeader />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Homepage</div>} />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/product" element={<div>Product</div>} />
      <Route path="/product/:productId" element={<div>Product Details</div>} />      
    </Routes>
    </BrowserRouter>
    <Footer />
  </div>;
}

export default App;
