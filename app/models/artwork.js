// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArtWorkSchema = new Schema({
  title: String,
  author: String,
  photo: String,
  url: String,
  text: String
});

ArtWorkSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('ArtWork', ArtWorkSchema);

