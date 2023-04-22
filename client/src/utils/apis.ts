import axios from "axios";
import { Authorization, Reservation, Restaurant, User } from "./types";

let config = {
  headers: {
    "Content-type": "application/json",
    "x-auth-token": "",
  },
};
const token = localStorage.token;
if (token) config.headers["x-auth-token"] = token;

const baseUrl = process.env.BASE_URL || "http://localhost:8080/api";

const api = axios.create({
  baseURL: baseUrl,
  headers: config.headers,
});

const _service = {
  //User API
  login: async (body: Authorization) => {
    return await api.post("users/login", body);
  },
  loadUser: async () => {
    return await api.get("/users/load");
  },
  createUser: async (body: User) => {
    return await api.post("/users/register", body);
  },
  //Restaurant API
  getRestaurantById: async (restaurantId: string) => {
    return await api.get("restaurants/" + restaurantId);
  },
  getAllRestaurants: async () => {
    return await api.get("restaurants");
  },
  createRestaurant: async (body: Restaurant) => {
    return await api.post("restaurants", body);
  },
  updateRestaurant: async (body: Restaurant) => {
    return await api.put("restaurants/" + body._id, body);
  },
  deleteRestaurant: async (restaurantId: string) => {
    return await api.delete("restaurants/" + restaurantId);
  },
  //Reservation API
  getReservationById: async (reservationId: string) => {
    return await api.get("reservations/" + reservationId);
  },
  getAllReservations: async () => {
    return await api.get("reservations");
  },
  getReservationsByUserId: async (userId: string) => {
    return await api.get("reservations/user/" + userId);
  },
  getReservationsByRestaurantId: async (restaurantId: string) => {
    return await api.get("reservations/restaurant/" + restaurantId);
  },
  createReservation: async (body: Reservation) => {
    return await api.post("reservations", body);
  },
  updateReservation: async (body: Reservation) => {
    return await api.put("reservations/" + body._id, body);
  },
  deleteReservation: async (reservationId: string) => {
    return await api.delete("restaurants/" + reservationId);
  },
  //Menu API
  //Table API
};

export default _service;
