import axios from "axios";

let config = {
  headers: {
    "Content-type": "application/json",
    "x-auth-token": "",
  },
};

const token = localStorage.token;

if (token) config.headers["x-auth-token"] = token;

const _service = {
  //Restaurant API
  getRestairantById: async (restaurantId: string) => {
    return await axios.get("/api/restaurants/" + restaurantId, config);
  },
};

export default _service;
