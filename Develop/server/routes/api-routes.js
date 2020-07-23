const fs = require("fs");
const tableData = require("../../db/db.json");

module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        // res.send(tableData);
        fs.readFile("./db/db.json", function(err, data){
            res.json(data);
        });
    });

    app.post("/api/notes", function(req, res){
        fs.readFile("./db/db.json", function(err, data){
            let json = JSON.parse(data);
            json.push(req.body);
            fs.writeFile("./db/db.json", JSON.stringify(json), function(err){
                console.log(err);
            });
        });
        res.send(tableData);
    });

    // app.delete("/api/notes/:id", function(req, res){
    //     tableData.length = 0;
    // });
}

