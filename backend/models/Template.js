import mongoose from "mongoose";

const templateSchema = mongoose.Schema(
  {
    prop1: { type: String, required: true },
    prop2: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Template", templateSchema);
