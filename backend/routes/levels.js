var _ = require('underscore')
  , mongoose = require('mongoose')

var Level = mongoose.model('Level')

exports.index = function(req, res) {
  Level.find({}, function(err, levels) {
    if (err) throw err;
    res.render('levels/index', {levels: levels})
  })
}

exports.new = function(req, res) {
  res.render('levels/new', {level : new Level()});
}

exports.create = function(req, res) {
  var level = new Level(req.body.level)
  level.save(function(err) {
    if (err) throw err;
      res.render('levels/index')
  })
}

exports.show = function(req, res) {
  Level.findById(req.params.level, function(err, record) {
    if (err) throw err;
    res.render('levels/show', {level: record})
  })
}

exports.edit = function(req, res) {
  Level.findById(req.params.level, function(err, record) {
    if (err) throw err;
    res.render('levels/edit', {level: record})
  })
}

exports.update = function(req, res) {
  console.dir(req.body)
  Level.update({_id: req.params.level}, req.body.level, function(err) {
    if (err) throw err;
    Level.findById(req.params.level, function(err, level) {
      res.render('levels/show', {level: level})
    })
  })
}

