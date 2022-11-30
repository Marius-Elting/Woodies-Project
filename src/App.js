import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation/Navigation';
import AboutUs from './pages/AboutUs';
import Products from './pages/Producs';
import Footer from './components/Footer/Footer';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="products/productpage/:name" element={<ProductPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
