var express = require('express');
var router = express.Router();

var User = function(fname, lname, phone) {
    this.FirstName = fname;
    this.LastName = lname;
    this.Phone = phone;
};

var users = [];

router.init = function() {
    users.push(new User('Matt', 'Palmerlee', '818-123-4567'));
    users.push(new User('Joe', 'Plumber', '310-012-9876'));
    users.push(new User('Tom', 'Smith', '415-567-2345'));
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.body);
    res.render('users', {'users':users, 'title':'Users'});
});

module.exports = router;
