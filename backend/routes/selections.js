var _ = require('underscore')
  , mongoose = require('mongoose')

var Selection = mongoose.model('Selection')

exports.new = function(req, res) {
  res.render('selections/new', {selection : new Selection()});
}

