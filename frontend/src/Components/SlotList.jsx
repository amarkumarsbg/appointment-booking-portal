import React from "react";

const slots = [
  { date: "2025-06-10", times: ["10:00 AM", "11:00 AM", "12:00 PM"] },
  { date: "2025-06-11", times: ["10:00 AM", "11:00 AM", "12:00 PM"] },
  { date: "2025-06-12", times: ["10:00 AM", "11:00 AM", "12:00 PM"] },
];

const SlotList = ({ onSelect }) => {
  return (
    <div>
      <h2>📅 Available Slots</h2>
      {slots.map((slot) => (
        <div key={slot.date}>
          <h4>{slot.date}</h4>
          {slot.times.map((time) => (
            <button
              key={time}
              onClick={() => onSelect(slot.date, time)}
              style={{ margin: "5px" }}
            >
              {time}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SlotList;
