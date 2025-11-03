import BuyPage from "./Pages/BuyPage";
import MainPage from "./Pages/MainPage";
import { Route, Routes } from "react-router-dom";
import SellPage from "./Pages/SellPage";
import LoginPage from "./Pages/Login";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import "./Pages/App.css";
import Shop from "./Pages/shop";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/buypage" element={<BuyPage />} />
        <Route path="/sellpage" element={<SellPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
