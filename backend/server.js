const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB(); // connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json());

// Simple Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});
const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api", bookingRoutes);
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
