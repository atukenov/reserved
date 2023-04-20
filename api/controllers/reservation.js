import Reservation from "../models/Reservation.js";
import { check, validationResult } from "express-validator";
import { createError } from "../utils/error.js";

export const createReservation = async (req, res, next) => {
  try {
    await check("restaurantId")
      .notEmpty()
      .withMessage("Restaurant is required")
      .run(req);
    await check("reservationDate")
      .notEmpty()
      .withMessage("Reservation Date is required")
      .run(req);
    await check("reservationTime")
      .notEmpty()
      .withMessage("Reservation Time is required")
      .run(req);
    await check("partySize")
      .notEmpty()
      .withMessage("Please specify how many people will attend the party.")
      .run(req);
    await check("guest.name")
      .notEmpty()
      .withMessage("Guest Name is required.")
      .run(req);
    await check("guest.phoneNumber")
      .notEmpty()
      .withMessage("Guest Phone Number is required.")
      .run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(createError(400, "Validation Error!"));
    }
  } catch (err) {
    return next(err);
  }
  const newReservation = new Reservation({
    restaurantId: req.body.restaurantId,
    reservationDate: req.body.reservationDate,
    reservationTime: req.body.reservationTime,
    partySize: req.body.partySize,
    guest: req.body.guest,
  });
  try {
    const savedReservation = await newReservation.save();
    res.status(200).json(savedReservation);
  } catch (err) {
    next(err);
  }
};

export const updateReservation = async (req, res, next) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedReservation);
  } catch (err) {
    next(err);
  }
};
export const deleteReservation = async (req, res, next) => {
  const ReservationId = req.params.id;
  try {
    await Reservation.findByIdAndDelete(ReservationId);

    res.status(200).json("Reservation has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    res.status(200).json(reservation);
  } catch (err) {
    next(err);
  }
};
export const getReservationsByUser = async (req, res, next) => {
  try {
    const reservations = await Reservation.find({ userId: req.params.userId });
    res.status(200).json(reservations);
  } catch (err) {
    next(err);
  }
};
export const getReservationsByRestaurant = async (req, res, next) => {
  try {
    const reservations = await Reservation.find({
      restaurantId: req.params.restaurantId,
    });
    res.status(200).json(reservations);
  } catch (err) {
    next(err);
  }
};
export const getReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (err) {
    next(err);
  }
};
