const path = require('path');
const friendsData = require("../data/friends");
//const newUser = require(userData);

module.exports = function (app) {
    // Return JSON list of friends
    app.get('/api/friends', function (req, res) {
      res.json(friendsData);
    });
    // Post new friend to friends array and call findFriend to get match
    app.post('/api/friends', function (req, res) {
      let score = 0;
      let newUser = [friendsData.length -1];
      for (let i = 0; i < friendsData.length; i ++) {
        for (let j = 2; j < i.lenth; j++) { 
          if (newUser[j] === friendsData[i][j]) {
            score + 2;
          } else if (newUser[j] <1 || >1 friendsData[i][j]) {
            score ++;
          } else {
            score + 0;
          }
        }
      }
      // Return name and photo link to callback function
      res.json(req.body);

    });
  };