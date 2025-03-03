import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Checkout from "./pages/checkout/Checkout";
import LoginPage from "../src/components/LoginPage/LoginPage"
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";


function App() {
   const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <ThemeProvider>
        {showLogin ? <LoginPage setShowLogin={setShowLogin} /> : <></>}
        <div className="app">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
