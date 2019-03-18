const path = require("path");
const friendsData = require("../data/friends");

module.exports = function(app) {

    app.get(friendsData, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, ".../public/home.html"));
    })
console.log(friendsData)
}
