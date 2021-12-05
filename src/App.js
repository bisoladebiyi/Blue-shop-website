import "./App.css";
import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProductInfo from "./pages/productInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product-detail/:id" element={<ProductInfo />} />
          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
