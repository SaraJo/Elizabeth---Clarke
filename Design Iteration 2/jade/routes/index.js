exports.index = function(req, res){
  var locals = {
    pagetitle: "Howdy"
  };
  res.render('index', { locals: locals})
};

exports.account = function(req, res){
  var locals = {
    pagetitle: "My Account"
  };
  res.render('account', { locals: locals})
};

exports.about = function(req, res){
  var locals = {
    pagetitle: "About Us"
  };
  res.render('about', { locals: locals})
};

exports.faq = function(req, res){
  var locals = {
    pagetitle: "FAQ"
  };
  res.render('faq', { locals: locals})
};

exports.faq = function(req, res){
  var locals = {
    pagetitle: "Checkout"
  };
  res.render('checkout', { locals: locals})
};

exports.success = function(req, res){
  var locals = {
    pagetitle: "Success"
  };
  res.render('success', { locals: locals})
};

exports.test = function(req, res){
  var locals = {
    pagetitle: "test"
  };
  res.render('test', { locals: locals})
};

