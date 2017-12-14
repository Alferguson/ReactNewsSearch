const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    }
});

// This creates our model from the above schema, using mongoose's model method
const News = mongoose.model("News", NewsSchema);

// Export the News model
module.exports = News;
