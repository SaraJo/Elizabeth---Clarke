
  
var mongoose = require('mongoose');

var Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var BoxSchema = new Schema({
  customer : {type : ObjectId, ref : "UserSchema"},
  season : {type : String},
  shipped : {type : boolean},
  shirts : [],
  returned : {type: boolean},
  refunded : {type : boolean},
  packaging : {type : Number},
  customer_shipping : { type : Number},
  date_added: { type : Date, default : new Date().getTime() }
});

exports.Box = mongoose.model('Box', BoxSchema);