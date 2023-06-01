import Restaurant from "../models/Restaurant.js";
import { check, validationResult } from "express-validator";
import { createError } from "../utils/error.js";

export const createRestaurant = async (req, res, next) => {
  try {
    await check("restaurantName")
      .notEmpty()
      .withMessage("Restaurant name is required.")
      .run(req);
    await check("location")
      .notEmpty()
      .withMessage("Location is required")
      .run(req);
    await check("contactDetails.phoneNumber")
      .notEmpty()
      .withMessage("Phone Number is required")
      .isLength({ min: 12, max: 12 })
      .withMessage("Must by length of 12")
      .run(req);
    await check("contactDetails.email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Must be email format")
      .run(req);
    await check("type").notEmpty().withMessage("Type is required").run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(createError(400, "Validation Error!"));
    }
  } catch (err) {
    return next(err);
  }
  const newRestaurant = new Restaurant(req.body);
  try {
    const savedRestaurant = await newRestaurant.save();
    res.status(200).json(savedRestaurant);
  } catch (err) {
    next(err);
  }
};

export const updateRestaurant = async (req, res, next) => {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRestaurant);
  } catch (err) {
    next(err);
  }
};
export const deleteRestaurant = async (req, res, next) => {
  const restaurantId = req.params.id;
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
    res.status(200).json(deletedRestaurant);
  } catch (err) {
    next(err);
  }
};
export const getRestaurant = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    res.status(200).json(restaurant);
  } catch (err) {
    next(err);
  }
};
export const getRestaurants = async (req, res, next) => {
  try {
    //PAGINATION & FILTERING
    const limit = parseInt(req.query.limit) || 3;
    const skip = (parseInt(req.query.page) - 1) * limit || 0;
    const filter = {};
    const search = {};

    if (req.query.filter) {
      filter.type = req.query.filter;
    }

    if (req.query.search) {
      search.restaurantName = { $regex: req.query.search, $options: "i" };
    }
    // const restaurants = await Restaurant.find(filter)
    //   .where(search)
    //   .limit(limit)
    //   .skip(skip);
    const restaurants = await Restaurant.find();
    const count = await Restaurant.countDocuments();
    res.status(200).json({
      restaurants,
      totalPages: Math.ceil(count / limit),
    });
  } catch (err) {
    next(err);
  }
};
