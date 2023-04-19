import express from "express";

import {
  createReservation,
  deleteReservation,
  getReservation,
  getReservations,
  updateReservation,
} from "../controllers/reservation.js";
import { verifyGod, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", createReservation);
//UPDATE
router.put("/:id", verifyUser, updateReservation);
//DELETE
router.delete("/:id", verifyUser, deleteReservation);
//GET
router.get("/:id", verifyUser, getReservation);
//GET ALL
router.get("/", verifyUser, getReservations);

export default router;
