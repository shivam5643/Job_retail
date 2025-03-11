import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  job_id: { type: String, required: true, unique: true },
  status: { type: String, enum: ["ongoing", "completed", "failed"], default: "ongoing" },
  results: [
    {
      imageUrl: String,
      perimeter: Number,
      store: Object,
    },
  ],
  errors: [
    {
      store_id: String,
      error: String,
    },
  ],
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model("Job", jobSchema);
