import mongoose from "mongoose";
import { Schema } from "mongoose";
// import appSchema from "./app.model.js";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // apps: [appSchema],
});

const User = mongoose.model("User", userSchema);

export default User;
