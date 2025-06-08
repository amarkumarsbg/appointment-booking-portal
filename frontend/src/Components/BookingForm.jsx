import React, { useState } from "react";
import { bookSlot } from "../api/bookingService";

const BookingForm = ({ selectedDate, selectedTime }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await bookSlot({ name, email, date: selectedDate, time: selectedTime });
      setMessage("✅ Booking Successful!");
      setName("");
      setEmail("");
    } catch (error) {
      setMessage("❌ Booking Failed");
    }
  };

  return (
    <div>
      <h2>📝 Book Appointment</h2>
      <p>
        Selected: {selectedDate} at {selectedTime}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Book Slot</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingForm;
