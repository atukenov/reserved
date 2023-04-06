import express from "express";
import Restaurant from "../models/Restaurant.js";
import {
  createRestaurant,
  deleteRestaurant,
  getRestaurant,
  getRestaurants,
  updateRestaurant,
} from "../controllers/restaurant.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createRestaurant);
//UPDATE
router.put("/:id", verifyAdmin, updateRestaurant);
//DELETE
router.delete("/:id", verifyAdmin, deleteRestaurant);
//GET
router.get("/:id", getRestaurant);
//GET ALL
router.get("/", getRestaurants);

export default router;
