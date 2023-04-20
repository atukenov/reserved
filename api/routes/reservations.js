import express from "express";

import {
  createReservation,
  deleteReservation,
  getReservation,
  getReservationsByRestaurant,
  getReservationsByUser,
  getReservations,
  updateReservation,
} from "../controllers/reservation.js";
import { verifyAdmin, verifyGod, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", createReservation);
//UPDATE
router.put("/:id", verifyUser, updateReservation);
//DELETE
router.delete("/:id", verifyUser, deleteReservation);
//GET
router.get("/:id", getReservation);
//GET
router.get("/user/:userId", getReservationsByUser);
//GET
router.get(
  "/restaurant/:restaurantId",
  verifyAdmin,
  getReservationsByRestaurant
);
//GET ALL
router.get("/", verifyGod, getReservations);

export default router;
