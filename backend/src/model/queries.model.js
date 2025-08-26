const mongoose = require("mongoose");
const QueriesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    queries: { type: String, required: true },
  },
  { collection: "Query" }
);
const QueriesModel = mongoose.model("Query", QueriesSchema);

module.exports = QueriesModel; 