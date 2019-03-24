const path = require("path");
const friendsData = require("../data/friends");

module.exports = function(app) {

    //this is supposed to get the data from the survey page, I think
    // app.get("api/friends", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/survey.html"));
    // });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}
