import Table from "../models/Table.js";
import { check, validationResult } from "express-validator";
import { createError } from "../utils/error.js";

export const createTable = async (req, res, next) => {
  try {
    await check("restaurantId")
      .notEmpty()
      .withMessage("Restaurant must be choosen")
      .run(req);
    await check("tableNumber")
      .notEmpty()
      .withMessage("Table Number is required")
      .run(req);
    await check("seatingCapacity")
      .notEmpty()
      .withMessage("Seating capacity is required")
      .run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(createError(400, errors.array()));
    }
  } catch (err) {
    return next(err);
  }
  const newTable = new Table(req.body);
  try {
    const savedTable = await newTable.save();
    res.status(200).json(savedTable);
  } catch (err) {
    next(err);
  }
};

export const updateTable = async (req, res, next) => {
  try {
    const updatedTable = await Table.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedTable);
  } catch (err) {
    next(err);
  }
};
export const deleteTable = async (req, res, next) => {
  try {
    await Table.findByIdAndDelete(req.params.id);
    res.status(200).json("Table has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getTable = async (req, res, next) => {
  try {
    const table = await Table.findById(req.params.id);
    res.status(200).json(table);
  } catch (err) {
    next(err);
  }
};
export const getTables = async (req, res, next) => {
  try {
    const tables = await Table.find();
    res.status(200).json(tables);
  } catch (err) {
    next(err);
  }
};
