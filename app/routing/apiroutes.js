const path = require('path');
const friendsData = require("../data/friends");
module.exports = function(app) {

    //API GET request from the page
   /* // app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

     //adds new friends to the list maybe
    app.post("api/friends", function(req,res) {
        friendsData.push(req.body);
    })
}*/

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
}