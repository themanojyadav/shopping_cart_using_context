import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToastrContainer from "./components/ToastrContainer";
import CartContextProvider from "./context/cartContext";
import ToastrContextProvider from "./context/toastrContext";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <CartContextProvider>
      <ToastrContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
          <ToastrContainer />
        </BrowserRouter>
      </ToastrContextProvider>
    </CartContextProvider>
  );
}

export default App;
