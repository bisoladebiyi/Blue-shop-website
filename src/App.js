import "./App.css";
import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProductInfo from "./pages/productInfo";
import Cart from "./pages/cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product-detail/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<Cart />} />
          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
