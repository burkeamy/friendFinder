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
      console.log(req.body)
      let score = 0;
      let allScores=[];
      let newUser = req.body;
      let newUser_Scores=newUser.scores;
     
      for (let i = 0; i < friendsData.length; i ++) {
        //console.log(friendsData[i].name);
//caluculate difference betwwen new friend and curent friend
        for (let j = 0; j <10; j++) { 
          score +=Math.abs(friendsData[i].scores[j] - newUser_Scores[j]);
         // console.log(score);

        } allScores.push(score);
            score = 0;
            console.log(allScores)
      }
      // Return name and photo link to callback function
     // res.json(req.body);
     let bestMatch =friendsData[allScores.indexOf(Math.min.apply(null,allScores))] 
     console.log(bestMatch);
     res.send(bestMatch);
   });
};