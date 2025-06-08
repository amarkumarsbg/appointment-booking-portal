const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// ✅ CORS setup: allow only frontend domain
app.use(
  cors({
    origin: "https://appointment-frontend-o73d.onrender.com",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api", bookingRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
