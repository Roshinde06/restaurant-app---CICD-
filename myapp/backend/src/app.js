const express = require("express");
const cors = require("cors");

const menu = require("./data/menu");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Home API
app.get("/", (req, res) => {
  res.json({
    message: "Restaurant API is running",
    status: "success"
  });
});

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

// Get all menu items
app.get("/api/menu", (req, res) => {
  res.json(menu);
});

// Get one menu item
app.get("/api/menu/:id", (req, res) => {
  const id = Number(req.params.id);

  const item = menu.find((food) => food.id === id);

  if (!item) {
    return res.status(404).json({
      message: "Menu item not found"
    });
  }

  res.json(item);
});

// Order API
app.post("/api/orders", (req, res) => {
  const { name, item } = req.body;

  if (!name || !item) {
    return res.status(400).json({
      message: "Name and item are required"
    });
  }

  res.status(201).json({
    message: `Thank you ${name}! Your order for ${item} has been received.`
  });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Restaurant backend running on port ${PORT}`);
});
