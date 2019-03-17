//friend finder server
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

//setting up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//adding routes from routes.js
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("server is linstening on http://localhost" + PORT);
})