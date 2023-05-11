import express from "express";

import {
  createRestaurant,
  deleteRestaurant,
  getRestaurant,
  getRestaurants,
  updateRestaurant,
} from "../controllers/restaurant.js";
import { verifyGod } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyGod, createRestaurant);
//UPDATE
router.put("/:id", verifyGod, updateRestaurant);
//DELETE
router.delete("/:id", verifyGod, deleteRestaurant);
//GET
router.get("/:id", getRestaurant);
//GET ALL
router.get("/", getRestaurants);

export default router;
