/**
 * Created by sabhinay on 9/10/14.
 */
var USER_LIST = [{username: "rajiv", password: "password"}, {username: "abhi", password: "password"}]

var getMatchedUser = function (username, password) {
    return USER_LIST.filter(function (user) {
        return user.username == username && user.password == password
    })[0];
};