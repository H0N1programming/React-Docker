const express = require("express");
const app = express();
const PORT = 3001;

app.get("/api/", (req, res) => {
    console.log("来たよ");
    res.send({message: true});
});

app.listen(PORT, () => {
    console.log("sever running!");
})