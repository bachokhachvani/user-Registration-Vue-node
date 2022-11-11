import mongoose from "mongoose";
import { v4 as uuid } from "uuid";
import isEmail from "validator/lib/isEmail.js";

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: {
    type: String,
    default: () => uuid(),
  },
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[A-Za-z]+$/g.test(v);
      },
      message: (props) => "firstName must only include Latin characters",
    },
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[A-Za-z]+$/g.test(v);
      },
      message: (props) => "lastName must only include Latin characters",
    },
  },
  birthday: {
    type: Date,
    required: true,
    min: ["01 / 01 / 1920", "birthday must be higher year"],
    max: [
      new Date(Date.now()).setFullYear(new Date(Date.now()).getFullYear() - 18),
      "you are under eighteen!",
    ],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return isEmail(v) && v.endsWith("@newage.io");
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
