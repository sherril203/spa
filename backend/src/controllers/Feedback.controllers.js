const FeedbackModel = require("../model/Feedback.model");

const postFeedback = async (req, res) => {
  try {        
    const Feed_data = req.body;
    console.log("Incoming query data:", Feed_data); // debug

    const stored_data = new FeedbackModel(Queries_data);
    await stored_data.save();

    return res.status(200).send({ message: "Query submitted successfully", data: stored_data });
  } catch (err) {
    console.error("Error saving query:", err);
    return res.status(500).send("Error in submitting query");
  }
};

const getFeedback = async (req, res) => {
  try {
    const showFeedback = await FeedbackModel.find().sort({ _id: -1 });
    return res.status(200).send({ showdata: showFeedback });
  } catch (err) {
    console.error("Error fetching feedback:", err);
    return res.status(500).send("Error in fetching feedback");
  }
};

module.exports = { postFeedback, getFeedback };
