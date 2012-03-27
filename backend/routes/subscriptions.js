var _ = require('underscore')
  , mongoose = require('mongoose')

var Subscription = mongoose.model('Subscription');


exports.index = function(req, res) {
  Owner.find({}, function(err, owners) {
    if (err) throw err;
    res.render('subscriptions/index', {subscriptions: subscriptions})
  })
}

exports.new = function(req, res) {
  res.render('subscriptions/new', {subscription : new Subscription()})
}

exports.create = function(req, res) {
  var owner = new Owner(req.body.owner)
  owner.save(function(err) {
    if (err) throw err;
      Owner.find({}, function(err, owners) {
          if (err) throw err;
            res.render('subscriptions/index', {owners: owners, message: "Subscription Added!"});
          })
      });
  
}

exports.edit = function(req, res) {
  Owner.findById(req.params.owner, function(err, record) {
    if (err) throw err;
    res.render('owners/edit', {owner: record})
  })
}

exports.update = function(req, res) {
  console.dir(req.body)
  Owner.update({_id: req.params.owner}, req.body.owner, function(err) {
    if (err) throw err;
     Owner.find({}, function(err, owners) {
        if (err) throw err;
        res.render('owners/index', {owners: owners, message: "Owner updated!"});
      })
  })
}


