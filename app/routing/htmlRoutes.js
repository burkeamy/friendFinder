const path = require("path");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname,"../public/home.html"));
});

module.exports = 