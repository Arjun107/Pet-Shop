
import Cart from "./Cart";
import "./Header.css"; 

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">🐾 The Pet Shot</div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
