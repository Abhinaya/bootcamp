var USER_LIST = [{username: "rajiv", password: "password"}, {username: "abhi", password: "password"}]

var getMatchedUser = function (username, password) {
    return USER_LIST.filter(function (user) {
        return user.username == username && user.password == password
    })[0];
};

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



