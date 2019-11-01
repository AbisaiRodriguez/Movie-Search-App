const express = require("express");
const app = express();
const request = require("request");

app.get("/results", function(req, res){
    request("http://www.omdbapi.com/?s=california&apikey=thewdb", function(error, response, body){
        if( !error && response.statusCode == 200){
            const parseData = JSON.parse(body);
            res.send(parseData["Search"][0]["Title"]);
        }
    })
});

app.listen(3000);
console.log("Movie app has Started");