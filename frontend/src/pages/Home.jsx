import React, { useState } from "react";
import SlotList from "../Components/SlotList";
import BookingForm from "../Components/BookingForm";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSlotSelect = (date, time) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  return (
    <div>
      <SlotList onSelect={handleSlotSelect} />
      {selectedDate && selectedTime && (
        <BookingForm selectedDate={selectedDate} selectedTime={selectedTime} />
      )}
    </div>
  );
};

export default Home;
