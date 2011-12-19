Orders = Backbone.Model.extend({
      defaults: {
          id: 0,
          date_added: DateTime.now(),
          shirts : [new Shirt()],
		  user : new User()
      },
      initialize: function(){
          alert("Welcome to this world");
		  this.bind("error", function(model, error){
          // We have received an error, log it, alert it or forget it :)
          alert( error );
	  });
      }
  });