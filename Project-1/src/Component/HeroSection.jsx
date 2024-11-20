const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Your feet deserve the best, and we’re here to help you find the perfect shoes for any
          occasion. Experience comfort and style with every step.
        </p>

        <div className="hero-btn">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn">Explore Categories</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="Amazon" />
            <img src="/images/flipkart.png" alt="Flipkart" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="Shoe Image" />
      </div>
    </main>
  );
};

export default HeroSection;
