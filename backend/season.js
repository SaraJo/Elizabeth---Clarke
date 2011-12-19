Season = Backbone.Model.extend({
      defaults: {
		  id : 0,
          name: "Fall 2011",
          start_date: DateTime.now()
      },
      initialize: function(){
          alert("Welcome to this world");
		  this.bind("error", function(model, error){
          // We have received an error, log it, alert it or forget it :)
          alert( error );
	  });
      }
  });