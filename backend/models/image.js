
  
var mongoose = require('mongoose');

var Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var ImageSchema = new Schema({
  path : {type : String},
  date_added : {type : DateTime, default : new Date(),
  model : {type : String}}
});


exports.Image = mongoose.model('Image', ImageSchema);
