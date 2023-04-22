import express from "express";

import {
  deleteUser,
  getUser,
  getUsers,
  loadUser,
  login,
  register,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyGod, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user you are logged in.");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user you are logged in and you can delete your account.");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello user you are logged in and you are admin.");
// });

//CREATE
router.post("/register", verifyGod, register);
//LOGIN
router.post("/login", login);
//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//LOAD USER
router.get("/load", verifyUser, loadUser);
//GET
router.get("/:id", verifyUser, getUser);
//GET ALL
router.get("/", verifyGod, getUsers);

export default router;
