const express = require("express");
const app = express();
const request = require("request");
app.set("view engine", "ejs");

app.get("/results", function(req, res){
    request("http://www.omdbapi.com/?s=iowa&apikey=thewdb", function(error, response, body){
        if( !error && response.statusCode == 200){
            const parseData = JSON.parse(body);
            res.render("results", {parseData: parseData});
        }
    })
});

app.listen(3000);
console.log("Movie app has Started");