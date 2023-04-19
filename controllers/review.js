import Review from "../models/Review.js";
import { check, validationResult } from "express-validator";
import { createError } from "../utils/error.js";

export const createReview = async (req, res, next) => {
  try {
    await check("userId").notEmpty().withMessage("User is required.").run(req);
    await check("restaurantId")
      .notEmpty()
      .withMessage("Restaurant is required")
      .run(req);
    await check("rating").notEmpty().withMessage("Rating is required").run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(createError(400, errors.array()));
    }
  } catch (err) {
    return next(err);
  }
  const newReview = new Review(req.body);
  try {
    const savedReview = await newReview.save();
    res.status(200).json(savedReview);
  } catch (err) {
    next(err);
  }
};

export const updateReview = async (req, res, next) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedReview);
  } catch (err) {
    next(err);
  }
};
export const deleteReview = async (req, res, next) => {
  const ReviewId = req.params.id;
  try {
    await Review.findByIdAndDelete(ReviewId);

    res.status(200).json("Review has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    res.status(200).json(review);
  } catch (err) {
    next(err);
  }
};
export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (err) {
    next(err);
  }
};
