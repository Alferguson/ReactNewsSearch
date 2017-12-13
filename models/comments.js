const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const CommentsSchema = new Schema({
	body: {
	    type: String
	},
	id: {
		type: String
	}
});

// This creates our model from the above schema, using mongoose's model method
const Comments = mongoose.model("Comments", CommentsSchema);

// Export the Comments model
module.exports = Comments;
