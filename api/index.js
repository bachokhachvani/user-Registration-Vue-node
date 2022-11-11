import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";

const app = express();

dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};

//middlewares
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).json({
    status: errorStatus,
    message: errorMessage,
  });
});
const email = "emailasf@gmail.com@newage.io";

// console.log(
//   new Date(Date.now()).setFullYear(new Date(Date.now()).getFullYear() - 18),
//   Date.now()
// );
console.log(/^[A-Za-z]+$/g.test("bacho1`23"));

app.listen(8800, () => {
  connect();
  console.log("connected to backend");
});
