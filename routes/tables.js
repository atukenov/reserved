import express from "express";

import {
  createTable,
  deleteTable,
  getTable,
  getTables,
  updateTable,
} from "../controllers/table.js";
import { verifyGod } from "../utils/verifyToken.js";
const router = express.Router();

//CREATE
router.post("/", verifyGod, createTable);
//UPDATE
router.put("/:id", verifyGod, updateTable);
//DELETE
router.delete("/:id", verifyGod, deleteTable);
//GET
router.get("/:id", getTable);
//GET ALL
router.get("/", getTables);

export default router;
