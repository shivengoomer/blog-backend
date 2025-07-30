const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  postID: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);