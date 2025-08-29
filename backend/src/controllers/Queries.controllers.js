const QueriesModel = require("../model/queries.model");

const postQueries = async (req, res) => {
  try {        
    const Queries_data = req.body;
    console.log("Incoming query data:", Queries_data); // debug

    const stored_data = new QueriesModel(Queries_data);
    await stored_data.save();

    return res.status(200).send({ message: "Query submitted successfully", data: stored_data });
  } catch (err) {
    console.error("Error saving query:", err);
    return res.status(500).send("Error in submitting query");
  }
};

const getQueries = async (req, res) => {
  try {
    const showQueries = await QueriesModel.find().sort({ _id: -1 });
    return res.status(200).send({ showdata: showQueries });
  } catch (err) {
    console.error("Error fetching queries:", err);
    return res.status(500).send("Error in fetching queries");
  }
};

module.exports = { postQueries, getQueries };
