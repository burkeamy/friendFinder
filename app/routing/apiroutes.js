const path = require('path');
const friendsData = require("../data/friends");
module.exports = function(app) {

    //API GET request from the page
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

     //adds new friends to the list maybe
    app.post("api/friends", function(req,res) {
        friendsData.push(req.body);
    })


}