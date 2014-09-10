describe("getMatchedUser", function() {
    it("should return matching user", function () {
        expect(getMatchedUser('rajiv', 'password')).toEqual({username: 'rajiv', password: 'password'});
    });

    it("should return undefined if no user is matched", function () {
        expect(getMatchedUser('blah', 'blah')).toEqual(undefined);
    });
});