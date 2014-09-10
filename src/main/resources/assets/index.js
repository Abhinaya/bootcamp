$(document).ready(
    function() {
        var login = function () {

            var usernameField = $('input[name="username"]')[0],
                passwordField = $('input[type="password"]')[0];

            var matchedUser = getMatchedUser(usernameField.value, passwordField.value);

            if (matchedUser) {
                $('body').html('Hello ' + usernameField.value);
            }
            else {
                $('.error').html('Please Enter valid username/password');
            }
        };

        $('input[type=button]').click(login);
    }
);