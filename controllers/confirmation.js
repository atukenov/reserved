import Confirmation from "../models/Confirmation.js";
import { check, validationResult } from "express-validator";
import { createError } from "../utils/error.js";

export const createConfirmation = async (req, res, next) => {
  try {
    await check("reservationId")
      .notEmpty()
      .withMessage("Reservation is required.")
      .run(req);
    await check("confirmationNumber")
      .notEmpty()
      .withMessage("Confirmation Number is required")
      .run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(createError(400, errors.array()));
    }
  } catch (err) {
    return next(err);
  }
  const newConfirmation = new Confirmation(req.body);
  try {
    const savedConfirmation = await newConfirmation.save();
    res.status(200).json(savedConfirmation);
  } catch (err) {
    next(err);
  }
};

export const updateConfirmation = async (req, res, next) => {
  try {
    const updatedConfirmation = await Confirmation.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedConfirmation);
  } catch (err) {
    next(err);
  }
};
export const deleteConfirmation = async (req, res, next) => {
  const ConfirmationId = req.params.id;
  try {
    await Confirmation.findByIdAndDelete(ConfirmationId);

    res.status(200).json("Confirmation has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getConfirmation = async (req, res, next) => {
  try {
    const confirmation = await Confirmation.findById(req.params.id);
    res.status(200).json(confirmation);
  } catch (err) {
    next(err);
  }
};
export const getConfirmations = async (req, res, next) => {
  try {
    const confirmations = await Confirmation.find();
    res.status(200).json(confirmations);
  } catch (err) {
    next(err);
  }
};
