const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.send("Hii from the express");
})

app.get("/api/main", function (req, res) {
    res.send("Namaste from api");
})

app.listen(5001);