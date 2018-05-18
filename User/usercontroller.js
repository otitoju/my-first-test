const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const User = require('./User');

//  create new user
    router.post('/', function (req, res) {
        User.create({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password
            }, 
            function (err, user) {
                if (err) 
                return res.status(500).send("There was a problem adding the information to the database.");
                res.status(200).send(user);
            });
    });

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) 
        return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});
// RETURN A SINGLE USER
    router.get('/:id', function(req,res){
        User.findById(req.params.id, function(err,user){
            if(err)
            return res.status(500).send('There is a problem finding this user');
            if(!user)
            return res.status(404).send('Error');
            res.status(200).send(user)
        })
    })
    //DELETE A USER
    router.delete('/:id',function(req,res){
        User.findByIdAndDelete(req.params.id, function(err,user){
            if(err)
            return res.status(500).send('There is no user with such id');
            res.status(200).send(user)

        })
    })
    //UPDATE DATABASE
    router.put('/:id', function(req,res){
        User.findByIdAndUpdate(req.params.id, function(err,user){
            if(err)
            return res.status(500).send('There is a problem updating the database');
            res.status(200).send(user)            
        })
    })

module.exports = router;