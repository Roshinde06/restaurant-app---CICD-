function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="small-title">WELCOME TO FOODHUB</p>

          <h1>
            Delicious Food,
            <br />
            <span>Made With Love.</span>
          </h1>

          <p className="hero-description">
            Fresh ingredients, delicious recipes and great food
            delivered to your table.
          </p>

          <div className="hero-buttons">
            <a href="#menu" className="primary-button">
              Explore Menu
            </a>

            <a href="#about" className="secondary-button">
              About Us
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80"
            alt="Delicious pizza"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
