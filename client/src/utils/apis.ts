import axios from "axios";
import { Authorization, Restaurant } from "./types";

let config = {
  headers: {
    "Content-type": "application/json",
    "x-auth-token": "",
  },
};
const token = localStorage.token;
if (token) config.headers["x-auth-token"] = token;

const api = axios.create({
  baseURL: "http://localhost:8080/api/",
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
  //Menu API
  //Table API
  //User API
};

export default _service;
