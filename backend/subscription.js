Subscription = Backbone.Model.extend({
      defaults: {
		  id : 0,
          name: 'Two Shirts',
          description : "The perfect shirt fur under $30 x 3",
		  price : 374.32
      },
      initialize: function(){
          alert("Welcome to this world");
		  this.bind("error", function(model, error){
          // We have received an error, log it, alert it or forget it :)
          alert( error );
	  });
      }
  });