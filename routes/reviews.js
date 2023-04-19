import express from "express";

import {
  createReview,
  deleteReview,
  getReview,
  getReviews,
  updateReview,
} from "../controllers/review.js";
import { verifyGod, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyUser, createReview);
//UPDATE
router.put("/:id", verifyGod, updateReview);
//DELETE
router.delete("/:id", verifyGod, deleteReview);
//GET
router.get("/:id", verifyGod, getReview);
//GET ALL
router.get("/", getReviews);

export default router;
