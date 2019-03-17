//friend finder server
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(routes)

app.listen(PORT, function() {
    console.log("server is linstening on http://localhost" + PORT);
})