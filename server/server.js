const express = require("express");
const app = express();
let path = require("path");

let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, function(){
    console.log(`Server listening on PORT ${PORT}.`);
});