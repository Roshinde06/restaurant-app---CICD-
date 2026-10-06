function Header() {
  return (
    <header className="header">
      <div className="container navbar">
        <div className="logo">
          🍴 Food<span>Hub</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#menu" className="nav-button">
          Order Now
        </a>
      </div>
    </header>
  );
}

export default Header;
