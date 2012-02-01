
  
var mongoose = require('mongoose');

var Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var SeasonSchema = new Schema({
  quarter : {type : Number, default : 1},
  year : {type : Number, default : 2012}
});


exports.Season = mongoose.model('Season', SeasonSchema);
