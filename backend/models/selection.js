
  
var mongoose = require('mongoose');

var Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var SelectionSchema = new Schema({
  customer : {type : ObjectId, ref : "UserSchema"},
  	 shirt : {type : ObjectId, ref : "ShirtSchema"}
});


exports.Selection = mongoose.model('Selection',SelectionSchema);
  