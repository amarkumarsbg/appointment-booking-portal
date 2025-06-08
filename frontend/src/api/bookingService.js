import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE;

export const bookSlot = (data) => axios.post(`${BASE_URL}/book`, data);
export const getAllBookings = () => axios.get(`${BASE_URL}/bookings`);
