import User from "../models/User.js";
import { createError } from "../utils/error.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const user = new User({ ...req.body, password: hash });

  try {
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    next(createError(400, e.message));
  }
};

export const signin = async (req, res, next) => {
  try {
    // bcrypt.compareSync("B4c0/\/", hash);

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(createError(401, "User not found!"));
    }
    if (await !bcrypt.compareSync(req.body.password, user.password)) {
      return next(createError(401, "password is incorrect!"));
    }

    const token = Jwt.sign(
      {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        birthday: user.birthday,
        email: user.email,
      },
      process.env.JWT,
      { expiresIn: "60min" }
    );

    const { password, ...other } = user._doc;
    await res
      .cookie("access_token", token, {
        http: true,
      })
      .status(200)
      .json({ ...other, token });
  } catch (e) {
    next(e);
  }
};

export const getUser = (req, res, next) => {
  try {
    const { iat, exp, ...others } = req.user;
    res.status(200).json({ ...others });
  } catch (e) {
    next(e);
  }
};
