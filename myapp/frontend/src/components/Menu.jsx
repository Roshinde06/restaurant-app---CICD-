import { useEffect, useState } from "react";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${API_URL}/api/menu`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch menu");
        }

        return response.json();
      })
      .then((data) => {
        setMenu(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [API_URL]);

  const orderFood = (item) => {
    alert(`You selected ${item.name}`);
  };

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <div className="section-heading">
          <p className="small-title">OUR MENU</p>

          <h2>Popular Dishes</h2>

          <p>
            Choose from our selection of freshly prepared dishes.
          </p>
        </div>

        {loading ? (
          <div className="loading">Loading menu...</div>
        ) : (
          <div className="menu-grid">
            {menu.map((item) => (
              <div className="food-card" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="food-content">
                  <div className="food-top">
                    <span className="category">
                      {item.category}
                    </span>

                    <span className="price">
                      ₹{item.price}
                    </span>
                  </div>

                  <h3>{item.name}</h3>

                  <p>{item.description}</p>

                  <button
                    className="order-button"
                    onClick={() => orderFood(item)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Menu;
