import MenuItem from "../models/MenuItem.js";
import { check, validationResult } from "express-validator";
import { createError } from "../utils/error.js";

export const createMenuItem = async (req, res, next) => {
  try {
    await check("restaurantId")
      .notEmpty()
      .withMessage("Restaurant must be choosen")
      .run(req);
    await check("itemName")
      .notEmpty()
      .withMessage("Menu name is required")
      .run(req);
    await check("description")
      .notEmpty()
      .withMessage("Description is required")
      .run(req);
    await check("price").notEmpty().withMessage("Price is required").run(req);
    await check("ingredients")
      .isLength({ min: 3 })
      .withMessage("At least 3 ingredients must be added.")
      .run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(createError(400, errors.array()));
    }
  } catch (err) {
    return next(err);
  }
  const newMenuItem = new MenuItem(req.body);
  try {
    const savedMenuItem = await newMenuItem.save();
    res.status(200).json(savedMenuItem);
  } catch (err) {
    next(err);
  }
};

export const updateMenuItem = async (req, res, next) => {
  try {
    const updatedMenuItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedMenuItem);
  } catch (err) {
    next(err);
  }
};
export const deleteMenuItem = async (req, res, next) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.status(200).json("Menu Item has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getMenuItem = async (req, res, next) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    res.status(200).json(menuItem);
  } catch (err) {
    next(err);
  }
};
export const getMenuItems = async (req, res, next) => {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).json(menuItems);
  } catch (err) {
    next(err);
  }
};
