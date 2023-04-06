import express from "express";

import {
  createConfirmation,
  deleteConfirmation,
  getConfirmation,
  getConfirmations,
  updateConfirmation,
} from "../controllers/confirmation.js";
import { verifyGod, verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createConfirmation);
//UPDATE
router.put("/:id", verifyAdmin, updateConfirmation);
//DELETE
router.delete("/:id", verifyGod, deleteConfirmation);
//GET
router.get("/:id", verifyUser, getConfirmation);
//GET ALL
router.get("/", verifyAdmin, getConfirmations);

export default router;
