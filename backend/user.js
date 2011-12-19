User = Backbone.Model.extend({
      defaults: {
          id: 0,
          date_added: DateTime.now(),
          name : "Deborah Jackson",
 		  email : "dbj1007@gmail.com", 
		  phone : "8623563065",
		  secondary_phone : "2122013065", 
		  street_address : "37 26th St",
		  secondary_street_address : "Suite 301",
		  zip : 07748,
		  age_range : "default",
		  income : 0
      },
      initialize: function(){
          alert("Welcome to this world");
		  this.bind("error", function(model, error){
          // We have received an error, log it, alert it or forget it :)
          alert( error );
	  });
      }
  });

