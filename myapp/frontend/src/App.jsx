import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className="about-section" id="about">
          <div className="container about-content">
            <div>
              <p className="small-title">ABOUT FOODHUB</p>

              <h2>Good Food. Good Mood.</h2>

              <p>
                At FoodHub, we believe great food brings people
                together. Our chefs prepare every dish using
                fresh ingredients and simple recipes.
              </p>

              <p>
                Whether you are looking for a quick lunch,
                dinner with friends or a family meal, we are
                here to serve you delicious food.
              </p>
            </div>

            <div className="about-box">
              <div>
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>50+</strong>
                <span>Menu Items</span>
              </div>

              <div>
                <strong>10K+</strong>
                <span>Happy Customers</span>
              </div>
            </div>
          </div>
        </section>

        <Menu />
      </main>

      <Footer />
    </>
  );
}

export default App;
