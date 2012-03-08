var _ = require('underscore')
  , mongoose = require('mongoose')

var Shirt = mongoose.model('Shirt')

exports.index = function(req, res) {
  Shirt.find({}, function(err, shirts) {
    if (err) throw err;
    res.render('shirts/index', {shirts: shirts})
  })
}

exports.new = function(req, res) {
  res.render('shirts/new', {shirt : new Shirt()});
}

exports.create = function(req, res) {
  var shirt = new Shirt(req.body.shirt)
  shirt.save(function(err) {
    if (err) throw err;
      res.render('shirt/index')
  })
}

exports.show = function(req, res) {
  Shirt.findById(req.params.shirt, function(err, record) {
    if (err) throw err;
    res.render('shirt/show', {shirt: record})
  })
}

exports.edit = function(req, res) {
  Shirt.findById(req.params.shirt, function(err, record) {
    if (err) throw err;
    res.render('shirts/edit', {shirt: record})
  })
}

exports.update = function(req, res) {
  console.dir(req.body)
  Shirt.update({_id: req.params.shirt}, req.body.shirt, function(err) {
    if (err) throw err;
    Shirt.findById(req.params.shirt, function(err, shirt) {
      res.render('shirts/show', {shirt: shirt})
    })
  })
}

