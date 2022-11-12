import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const updateUser = async (req, res, next) => {
  try {
    if (!req.body.firstName && !req.body.lastName) {
      return next(
        createError(400, "changing params must be only first or last names!")
      );
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (e) {
    next(e);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    await res.clearCookie("access_token");
    await res.status(200).json(deleteUser);
  } catch (e) {
    next(e);
  }
};
