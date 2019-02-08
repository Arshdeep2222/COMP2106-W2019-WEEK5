var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Article = new Schema({
  title: { type: String },
  body: { type: String },
  date: { type: Date },
  author: { type: String }
});

module.exports = mongoose.model('Article', Article);
