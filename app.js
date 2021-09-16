const express = require("express");
const app = express();
const request = require("request");
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search")
});

app.get("/results", function(req, res){
    const query = req.query.search;
    const url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    request( url, function(error, response, body){
    
            if( !error && response.statusCode == 200){
                const parseData = JSON.parse(body);
                console.log(parseData);
                if( parseData.Response == "False"){
                    res.render("search");
                }
                res.render("results", {parseData: parseData});
            }
        
    })
});

app.listen(3000);
//app.listen(process.env.PORT, process.env.IP);
console.log("Movie app has Started");