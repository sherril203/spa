const mongoose = require("mongoose");
const FeedbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    Feedback: { type: String, required: true },
  },
  { collection: "Feedback" }
);
const FeedbackModel = mongoose.model("Query", FeedbackSchema);

module.exports = FeedbackModel; 