
  
var mongoose = require('mongoose');

var Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;

var ShirtSchema = new Schema({
  sku : {type : String},
  color : {type : String},
  price : {type : String},
  sizes : [],
  images : [ImageSchema],
  season : {type: String},
  description : {type : String},
  cost : {type : Number},
  manufacturer_shipping : { type : Number},
  date_added: { type : Date, default : new Date().getTime() }
});


exports.Shirt = mongoose.model('Shirt', ShirtSchema);