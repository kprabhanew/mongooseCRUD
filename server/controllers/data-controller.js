var Person = require('../models/person.js');

module.exports.getData = function (req, res) {
    console.log('I am in GetData');
    Person.find({}, function (err, people) {
        if (err) {
            return res.status(500).send("Couldn't run the query smart guy");
        }
        res.json({ data: people });
    })
}

module.exports.postData = function (req, res) {
    console.log('I am in PostData');
    var person = new Person(req.body)
    person.save(function (err) {
        if (err) {
            return res.status(500).send("Couldn't run the query smart guy");
        } else {
            res.status(200).send("You have added a new Person");
        }
        
    })
}

