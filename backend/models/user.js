
  var mongooseAuth = require('mongoose-auth')
    , mongoose = require('mongoose')
    , nconf = require('nconf')
    , Schema = mongoose.Schema
    , ObjectId = mongoose.SchemaTypes.ObjectId;

 
  var UserSchema = new Schema({})
        , User;
        
UserSchema.plugin(mongooseAuth, {
     // Here, we attach your User model to every module
     everymodule: {
       everyauth: {
           User: function () {
             return User;
           }
       }
     }, 
     password: {
               loginWith: 'email'
             , extraParams: {
                 name: {
                       first: String
                     , last: String
                   }
               }
             , everyauth: {
                   getLoginPath: '/login'
                 , postLoginPath: '/login'
                 , loginView: 'user/login'
                 , getRegisterPath: '/register'
                 , postRegisterPath: '/register'
                 , registerView: 'user/register'
                 , loginSuccessRedirect: '/'
                 , registerSuccessRedirect: '/'
               }
           },
          name : {type : String},
          address : {type : String},
          date_added: { type : Date, default : new Date().getTime() },
          subscription_level:{ type : String },
          referrer : {type : String }
           
}

);

mongoose.model('User', UserSchema);

User = mongoose.model('User');