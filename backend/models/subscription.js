
  
var mongoose = require('mongoose');

var Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var OrderSchema = new Schema({
  date_added: { type : Date, default : new Date().getTime() },
  quantity : {type : Number, default : 1 },
  gift : {type : Boolean, default : true},
  level : {type : String}
  customer : {type : ObjectId, ref : "UserSchema"},
  shipping_address : {type : String, default : "214 State Street"},
  shipping_zip : {type : String, default : "00000"}, 
  total : {type : Number}
});


exports.Order = mongoose.model('Order', OrderSchema);
  