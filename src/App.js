 // src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
// <-- new
import ExchangeBook from "./pages/ExchangeBook";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Signup from "./pages/signup"; 
import Login from "./pages/login";
import Cart from "./pages/Cart";


function App() {
  return (
    

    <Router>
      <Header />                {/* rendered once for every page */}
      <div className="min-h-screen bg-green-50">
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/bookexchange" element={<ExchangeBook />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </div>
      <Footer />                
    </Router>
  );
}

export default App;







 

