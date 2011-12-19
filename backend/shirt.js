Shirt = Backbone.Model.extend({
      defaults: {
		  id : 0,
          name: "The Pollyanna",
          date_added: DateTime.now(),
		  priority : 2,
		  description : "This is a pretty shirt",
		  season : new Season()
      },
      initialize: function(){
          alert("Welcome to this world");
		  this.bind("error", function(model, error){
          // We have received an error, log it, alert it or forget it :)
          alert( error );
	  });
      }
  });