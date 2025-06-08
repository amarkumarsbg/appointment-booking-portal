import React, { useEffect, useState } from "react";
import { getAllBookings } from "../api/bookingService";

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await getAllBookings();
        setBookings(res.data);
      } catch (err) {
        console.error("Failed to load bookings");
      }
    }
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>📋 Admin - All Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((b, i) => (
            <li key={i}>
              {b.name} - {b.email} - {b.date} @ {b.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPanel;
