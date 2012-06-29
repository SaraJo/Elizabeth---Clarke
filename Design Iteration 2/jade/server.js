var express = require("express"), 
less = require('less');


var app = module.exports = express.createServer();


app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set("view options", {layout: true, pretty: true});
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.compiler({ src: __dirname + '/public', enable: ['less']}));
  app.use(app.router);
  app.use(express.static(__dirname + '/public')); 
});

//add another app.get.... and replace the view name with your view name
app.get('/', function(req, res){
  res.render("index");
});

app.configure('development', function(){
   app.use(express.errorHandler({ dumpExceptions: true }));
   app.set('view options', {
    pretty: true
  });
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});


var routes = require('./routes')
app.get('/', routes.index);
app.get('/account', routes.account);
app.get('/about', routes.about);
app.get('/faq', routes.faq);
app.get('/checkout', routes.checkout);
app.get('/success', routes.success);
app.get('/test', routes.test);


app.get('/404', function(req,res){
	  res.render('404', { title: 'Express' });
});
app.listen(3000);

console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

