import express from "express";

import {
  createMenuItem,
  deleteMenuItem,
  getMenuItem,
  getMenuItems,
  updateMenuItem,
} from "../controllers/menuItem.js";
import { verifyGod } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyGod, createMenuItem);
//UPDATE
router.put("/:id", verifyGod, updateMenuItem);
//DELETE
router.delete("/:id", verifyGod, deleteMenuItem);
//GET
router.get("/:id", getMenuItem);
//GET ALL
router.get("/", getMenuItems);

export default router;
