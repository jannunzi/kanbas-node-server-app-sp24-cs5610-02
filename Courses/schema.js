import mongoose from "mongoose";
export default mongoose.Schema(
  {
    id: String,
    name: String,
    number: String,
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
  },
  { collection: "courses" }
);
