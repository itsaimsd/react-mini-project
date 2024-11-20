const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="Brand Logo" />
      </div>
      <ul>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#location">Location</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navigation;
