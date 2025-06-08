const Booking = require("../models/booking");

// Create new booking
exports.createBooking = async (req, res) => {
  const { name, email, date, time } = req.body;

  if (!name || !email || !date || !time) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  try {
    const booking = new Booking({ name, email, date, time });
    await booking.save();
    res.status(201).json({ message: "Booking successful" });
  } catch (error) {
    res.status(500).json({ error: "Booking failed" });
  }
};

// Get all bookings (Admin view)
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to get bookings" });
  }
};
