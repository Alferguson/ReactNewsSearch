const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  summary: {
    type: String,
    required: false
  },
  articleLink: {
    type: String,
    required: true,
    unique: true
  },
  comments: {
    type: Schema.Types.ObjectId,
    ref: "Comments"
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// This creates our model from the above schema, using mongoose's model method
const News = mongoose.model("News", NewsSchema);

// Export the News model
module.exports = News;
