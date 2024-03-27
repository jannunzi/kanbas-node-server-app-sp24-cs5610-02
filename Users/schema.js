import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    id: String,
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    dob: String,
    role: {
      type: String,
      enum: ["USER", "ADMIN", "STAFF", "FACULTY", "STUDENT"],
      default: "USER",
    },
  },
  { collection: "users" }
);

export default userSchema;
