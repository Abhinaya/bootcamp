/**
 * Created by sabhinay on 9/10/14.
 *
 */

var userlist = [{username: "rajiv", password: "password"}, {username: "abhi", password: "password"}]

$(document).ready(
   function(){
       $('input[type=button]').click(function(){

           var usernameField = $('input[name="username"]')[0],
               passwordField =  $('input[type="password"]')[0];
           var matchedUser = userlist.filter(function(a){return a.username == usernameField.value && a.password== passwordField.value;})

           if(matchedUser[0]){
               $('body').html('Hello '+ usernameField.value);
           }
           else{
               $('.error').html('Please Enter valid username/password');
           }
       });
   }
);



